import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { ConfigInterface, loader, validationSchema } from "./config";
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { UserModule } from './user/user.module';
@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            cache: true,
            load: [loader],
            validationSchema: validationSchema,
            expandVariables: true,
        }),
        MongooseModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: async (ConfigService: ConfigService<ConfigInterface>,) => ({
                uri: ConfigService.get("DATABASE_URI", { infer: true }),
                useUnifiedTopology: true,
            }),
        }),
        GraphQLModule.forRoot({
            autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
            sortSchema: true,
        }),
        UserModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
