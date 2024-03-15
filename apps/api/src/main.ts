/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';

import { nestApp } from './app/app.init';

async function bootstrap(): Promise<void> {
  const app = await nestApp();
  const port = process.env.PORT || 3200;
  await app.listen(port);
  Logger.log(`🚀 Application is running on: http://localhost:${port}/api`);
}

bootstrap();
