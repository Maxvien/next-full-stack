import { createClient } from 'soki/client';
import { RootSchema } from '@shared/schemas/root.schema';
import { EnvService } from '@shared/services/env.service';

export type { File } from 'soki/client';
export { useQuery, useMuation, getFiles } from 'soki/client';

export const ApiService = createClient({
  RootSchema,
  endpoint: EnvService.isNode() ? `http${EnvService.isProd() ? 's' : ''}://${EnvService.get('HOST')}/api` : '/api',
  options: {
    onRequest: async () => {
      return {
        headers: {},
        retries: EnvService.isProd() ? 3 : 0,
      };
    },
  },
});
