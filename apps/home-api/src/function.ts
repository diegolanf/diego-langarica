import { INestApplication } from '@nestjs/common';
import express from 'express';
import { setGlobalOptions } from 'firebase-functions/v2';
import { onRequest } from 'firebase-functions/v2/https';

import { nestApp } from './app/app.init';

const server = express();

export const createNestServer = async (
  expressInstance: unknown,
): Promise<INestApplication> => {
  const app: INestApplication = await nestApp(expressInstance);
  return app.init();
};

createNestServer(server)
  .then((_: INestApplication) => console.info('Nest Ready'))
  .catch((err) => console.error(err));

setGlobalOptions({ maxInstances: 10 });

// Connect express server to Firebase Functions
export const homeApp = onRequest(server);
