import { HttpClient, HttpRequest, HttpResponse } from '@http-client';
import axios, { AxiosResponse } from 'axios';
import { injectable } from 'inversify';

type Error = {
  response: AxiosResponse;
};

@injectable()
export class AxiosHttpClient extends HttpClient {
  public async request(data: HttpRequest): Promise<HttpResponse> {
    let axiosResponse: AxiosResponse;

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
