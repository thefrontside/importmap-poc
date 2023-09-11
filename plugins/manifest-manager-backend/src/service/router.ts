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

  router.get('/asset/:name', (request, response) => {
    const pkg = resolvePackagePath(request.params.name, 'package.json');

    const content = JSON.parse(`${readFileSync(pkg)}`);
    const main = resolvePackagePath(request.params.name, content.publishConfig.main);
    
    response
      .status(200)
      .setHeader("Content-Type", "text/javascript; utf-8")
      .send(readFileSync(main))
  })

  router.get('/health', (_, response) => {
    logger.info('PONG!');
    response.json({ status: 'ok' });
  });
  router.use(errorHandler());
  return router;
}
