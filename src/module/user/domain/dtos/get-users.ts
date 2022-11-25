import { User } from './user';

export interface GetUsersInput {
  id?: string;
}

export type GetUsersOutput = User[];

export type GetUsersResponse = User[];
