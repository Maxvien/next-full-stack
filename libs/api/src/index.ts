import { RootRouter } from './lib/routers/root.router';

export const router = RootRouter;
export type Router = typeof RootRouter;

export { createContext, createExpressMiddleware } from './lib/core';
