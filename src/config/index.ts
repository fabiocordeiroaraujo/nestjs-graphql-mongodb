export * from "@nestjs/config";
export { default as loader } from "./loader";
export { default as validationSchema } from "./validation-schema";

export interface ConfigInterface {
    NODE_ENV: string;
    PORT: number;

    DATABASE_URI: string;
    DATABASE_NAME: string;
    DATABASE_USERNAME: string;
    DATABASE_PASSWORD: string;
    DATABASE_USERNAME_ADMIN: string;
    DATABASE_PASSWORD_ADMIN: string;
}