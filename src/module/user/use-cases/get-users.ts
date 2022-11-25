import { inject } from 'inversify';

import { Envs } from '../../../core/envs';
import { HttpClient, HttpMethod } from '../../../core/http-client';
import {
  GetUsersInput,
  GetUsersOutput,
  GetUsersResponse,
} from '../domain/dtos/get-users';

export class GetUsers {
  public constructor(
    @inject(HttpClient)
    private readonly httpClient: HttpClient<GetUsersResponse>
  ) {}

  public async execute(query: GetUsersInput): Promise<GetUsersOutput> {
    const response = await this.httpClient.request({
      method: HttpMethod.GET,
      url: this.makeUrl(query),
    });

    if (response.data) {
      return response.data;
    }

    return [];
  }

  private makeUrl(params: GetUsersInput) {
    const query: string[] = [];

    return `${Envs.API_URL}/users?${query.join('&')}`;
  }
}
