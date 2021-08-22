import { ConfigService } from "@nestjs/config";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ConfigInterface } from "./config";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const configService = app.get<ConfigService<ConfigInterface>>(ConfigService);
    const port = configService.get("PORT", { infer: true });
    await app.listen(port);
}
bootstrap();
