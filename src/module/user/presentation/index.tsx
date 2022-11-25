import React from 'react';

import { Route, Routes } from 'react-router-dom';

import { container } from '../container';
import { Home } from './pages/home/home';
import { UserProvider } from './providers/user';

export const UserModule = () => {
  return (
    <UserProvider container={container}>
      <Routes>
        <Route path="/users">
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </UserProvider>
  );
};
