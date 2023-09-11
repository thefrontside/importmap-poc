import { errorHandler, resolvePackagePath } from '@backstage/backend-common';
import express from 'express';
import Router from 'express-promise-router';
import { Logger } from 'winston';
import { readFileSync } from 'fs';

export interface RouterOptions {
  logger: Logger;
}


const IndexHTML = readFileSync(resolvePackagePath("backstage-plugin-manifest-manager-backend", "src/service/index.html"));

export async function createRouter(
  options: RouterOptions,
): Promise<express.Router> {
  const { logger } = options;

  const router = Router();
  router.use(express.json());

  router.get('/', (_, response) => {
    response
      .status(200)
      .setHeader("Content-Type", "text/html; utf-8")
      .send(IndexHTML);
  });

  router.get('/health', (_, response) => {
    logger.info('PONG!');
    response.json({ status: 'ok' });
  });
  router.use(errorHandler());
  return router;
}
