interface TeamworkOptions {
  urlPrefix: string;
  region?: string;
  apiKey: string;
}


interface Teamwork {
  get(opts: RequestOptions): Promise<any>;
  post(opts: RequestOptions): Promise<any>;
  del(opts: RequestOptions): Promise<any>;
  put(opts: RequestOptions): Promise<any>;
}


interface RequestOptions {
  path: string;
  qs?: {};
  body?: {};
}


interface StatusResponse {
  STATUS: string;
}
