import { createRouter, z } from '../core';

export const PostRouter = createRouter().mutation('add', {
  input: z.object({
    id: z.string().uuid().optional(),
    title: z.string().min(1).max(32),
    text: z.string().min(1),
  }),
  async resolve({ ctx, input }) {
    //
  },
});
