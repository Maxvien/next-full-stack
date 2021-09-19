import { inferAsyncReturnType, router } from '@trpc/server';
import { CreateExpressContextOptions } from '@trpc/server/adapters/express';

export * from 'zod';
export * from '@trpc/server';
export * from '@trpc/server/adapters/express';

export const createContext = async ({
  req,
  res,
}: CreateExpressContextOptions) => {
  return { req, res };
};

export type Context = inferAsyncReturnType<typeof createContext>;

export function createRouter() {
  return router<Context>();
}
