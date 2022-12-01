import { injectable } from 'inversify';

@injectable()
export abstract class Auth {
  public abstract getToken(): Promise<string | undefined>;

  public abstract setToken(token: string): void;

  public abstract deleteToken(): Promise<void>;
}
