import { createRouter } from '../core';
import { PostRouter } from './post.router';
import { UserRouter } from './user.router';

export const RootRouter = createRouter()
  .merge('post.', PostRouter)
  .merge('user.', UserRouter);
