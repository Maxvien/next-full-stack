import { createRouter } from './core';
import { PostRouter } from './routers/post.router';
import { UserRouter } from './routers/user.router';

export const router = createRouter()
  .merge('post.', PostRouter)
  .merge('user.', UserRouter);

export type Router = typeof router;
export { createContext, createExpressMiddleware } from './core';
