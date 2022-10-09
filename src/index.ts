import 'dotenv/config';
import { logger } from './utils/logger';

logger.info(`${process.env.PORT}`);
