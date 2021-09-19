import { createRouter, z } from '../core';

export const UserRouter = createRouter().query('all', {
  async resolve({ ctx }) {
    console.log('it works');

    return [];
  },
});
