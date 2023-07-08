import { env } from "./config/env";
import { logger } from "./utils/logger";

logger.info(`${env.HOST}:${env.PORT} - ${env.ENV}`);
