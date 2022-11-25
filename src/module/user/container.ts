import { HttpClient } from '@http-client';
import { AxiosHttpClient } from '@vendor/axios';
import { Container } from 'inversify';

const container = new Container();

container.bind(HttpClient).to(AxiosHttpClient);

export { container };
