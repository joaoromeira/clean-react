import { HttpClient } from '@http-client';
import { useQuery } from 'react-query';

import { GetUsersOutput } from '../../domain/dtos/get-users';
import { QueryKeys } from '../../domain/dtos/query-keys';
import { GetUsers } from '../../use-cases/get-users';
import { useContainer } from './use-container';

export const useGetUsers = () => {
  const container = useContainer();

  return useQuery<GetUsersOutput, Error>(
    [QueryKeys.getUsers],
    () => new GetUsers(container.get(HttpClient)).execute({}),
    {
      retry: false,
      retryOnMount: false,
    }
  );
};
