import { I18nextProvider } from 'react-i18next';
import { QueryClient, QueryClientProvider } from 'react-query';

import { ContainerProvider } from '../hooks/use-container';
import i18n from '../i18n';

export const UserProvider = ({ children, container }: any) => {
  const queryClient = new QueryClient();

  return (
    <ContainerProvider container={container}>
      <I18nextProvider i18n={i18n}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </I18nextProvider>
    </ContainerProvider>
  );
};
