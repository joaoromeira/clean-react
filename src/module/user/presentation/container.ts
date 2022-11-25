import { Container } from 'inversify';

import { HttpClient } from '../../../core/http-client';
import { AxiosHttpClient } from '../../../vendor/axios';

const container = new Container();

container.bind(HttpClient).to(AxiosHttpClient);

export { container };
