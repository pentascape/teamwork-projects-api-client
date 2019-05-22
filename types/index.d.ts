export interface TeamworkOptions {
  urlPrefix: string;
  region?: string;
  apiKey: string;
  logLevel?: 'error' | 'warn' | 'info' | 'verbose' | 'debug' | 'silly';
}


export interface Teamwork {
  get(opts: RequestOptions): Promise<any>;
  post(opts: RequestOptions): Promise<any>;
  del(opts: RequestOptions): Promise<any>;
  put(opts: RequestOptions): Promise<any>;
}


export interface RequestOptions {
  path: string;
  qs?: {};
  body?: {};
}


export interface StatusResponse {
  STATUS: string;
}

export * from './invoices';
export * from './projects';
export * from './tasklists';
