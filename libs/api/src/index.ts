import { RootRouter } from './routers/root.router';

export const router = RootRouter;
export type Router = typeof RootRouter;

export { createContext, createExpressMiddleware } from './core';
