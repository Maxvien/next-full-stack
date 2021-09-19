import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import App from './app/app';
import { ApiService } from './app/services/api.service';

function Root() {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() => ApiService.createClient({ url: '/api' }));

  return (
    <StrictMode>
      <ApiService.Provider client={trpcClient} queryClient={queryClient}>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </ApiService.Provider>
    </StrictMode>
  );
}

ReactDOM.render(<Root></Root>, document.getElementById('root'));
