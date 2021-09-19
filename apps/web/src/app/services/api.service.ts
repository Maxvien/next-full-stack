import type { Router } from '@next-full-stack/api';

import { createReactQueryHooks } from '@trpc/react';

export const ApiService = createReactQueryHooks<Router>();
