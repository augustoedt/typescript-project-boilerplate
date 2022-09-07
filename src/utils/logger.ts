import dayjs from 'dayjs';
import pino from 'pino';
import PinoPretty from 'pino-pretty';

const stream = PinoPretty({ colorize: true });
const logger = pino(
  {
    base: {
      pid: false,
    },
    timestamp: () => `,"time":"${dayjs().format('DD/MM - HH:mm:ss')}"`,
  },
  stream,
);

export { logger };
