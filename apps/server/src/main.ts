import * as express from 'express';
import {
  router,
  createContext,
  createExpressMiddleware,
} from '@next-full-stack/api';

const app = express();

app.use('/api', createExpressMiddleware({ router, createContext }));

const port = process.env.port || 3333;

const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});

server.on('error', console.error);
