import * as Joi from "joi";
import { ConfigInterface } from ".";

export default Joi.object<ConfigInterface>({
    NODE_ENV: Joi.string().valid("dev", "tes", "hom", "prod").default("dev"),
    PORT: Joi.number().default(3000),
    DATABASE_URI: Joi.string().uri().required(),
    DATABASE_NAME: Joi.string().required(),
    DATABASE_USERNAME: Joi.string().required(),
    DATABASE_PASSWORD: Joi.string().required(),
    DATABASE_USERNAME_ADMIN: Joi.string().required(),
    DATABASE_PASSWORD_ADMIN: Joi.string().required(),
});
