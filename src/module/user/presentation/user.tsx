import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { QueryClient } from '../../../core/query-client';
import { container } from './container';
import { Home } from './pages/home/home';
import { UserProvider } from './providers/user';

export const UserModule = () => {
  return (
    <QueryClient>
      <UserProvider container={container}>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </QueryClient>
  );
};
