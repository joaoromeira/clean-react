import axios, { AxiosResponse } from 'axios';
import { injectable } from 'inversify';

import { Auth } from '../../core/auth';
import { HttpClient, HttpRequest, HttpResponse } from '../../core/http-client';

type Error = {
  response: AxiosResponse;
};

@injectable()
export class AxiosHttpClient extends HttpClient {
  public constructor(private readonly auth: Auth) {
    super();
  }

  public async request(data: HttpRequest): Promise<HttpResponse> {
    let axiosResponse: AxiosResponse;

    const token = await this.auth.getToken();

    if (token) {
      data.headers = Object.assign({}, { authorization: `Bearer ${token}` });
    }

    try {
      axiosResponse = await axios.request({
        url: data.url,
        method: data.method,
        data: data.body,
        params: data.params,
        headers: data.headers,
        withCredentials: data.withCredentials,
        signal: data.signal,
      });
    } catch (error) {
      axiosResponse = (error as Error).response;
    }

    return {
      statusCode: axiosResponse?.status,
      data: axiosResponse?.data,
    };
  }
}
