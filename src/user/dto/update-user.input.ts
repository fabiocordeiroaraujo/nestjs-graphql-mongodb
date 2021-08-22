import { Field, InputType } from "@nestjs/graphql";
import { IsEmail, IsString, IsOptional } from "class-validator";

@InputType()
export class UpdateUserInput {

    @IsString()
    @IsOptional()
    @Field()
    name?: string;

    @IsEmail()
    @IsOptional()
    @Field()
    email?: string;

    constructor(name?: string, email?: string){
        this.name = name;
        this.email = email;
    }
}