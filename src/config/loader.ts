import { ConfigInterface } from ".";

export default (): ConfigInterface => ({
    NODE_ENV: process.env.NODE_ENV,
    PORT: parseInt(process.env.PORT, 3000),
    DATABASE_URI: process.env.DATABASE_URI,
    DATABASE_NAME: process.env.DATABASE_NAME,
    DATABASE_USERNAME: process.env.DATABASE_USERNAME,
    DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
    DATABASE_USERNAME_ADMIN: process.env.DATABASE_USERNAME_ADMIN,
    DATABASE_PASSWORD_ADMIN: process.env.DATABASE_PASSWORD_ADMIN,
});