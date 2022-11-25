import { ReactNode } from 'react';

import { QueryClientProvider, QueryClient as Client } from 'react-query';

interface QueryClientProps {
  children?: ReactNode;
}

export const QueryClient = ({ children }: QueryClientProps): JSX.Element => {
  const client = new Client();

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};
