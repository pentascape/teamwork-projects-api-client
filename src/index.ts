import {OptionsWithUri} from 'request-promise';
import request from 'request-promise-native';
import winston, {Logger} from 'winston';

import {RequestOptions, Teamwork, TeamworkOptions} from '../types';
import Invoices from './Resources/Invoices';
import Projects from './Resources/Projects';
import TaskLists from './Resources/TaskLists';


export default class implements Teamwork {
  public Projects: Projects;
  public TaskLists: TaskLists;
  public Invoices: Invoices;

  private readonly url: string;
  private readonly key: string;
  private readonly logger: Logger;

  constructor(options: TeamworkOptions) {
    const urlComponents = [
      `https://${options.urlPrefix}`,
      options.region,
      'teamwork.com',
    ];

    this.url = urlComponents.filter((e) => e).join('.');
    this.key = options.apiKey;
    this.logger = winston.createLogger({
      format: winston.format.json(),
      level: options.logLevel || 'warn',
    });

    this.loadResources();
  }

  public get(opts: RequestOptions): Promise<{}> {
    return request
      .get(this.normaliseRequest(opts));
  }

  public post(opts: RequestOptions): Promise<{}> {
    return request
      .post(this.normaliseRequest(opts));
  }

  public del(opts: RequestOptions): Promise<{}> {
    return request
      .del(this.normaliseRequest(opts));
  }

  public put(opts: RequestOptions): Promise<{}> {
    return request
      .put(this.normaliseRequest(opts));
  }

  private loadResources() {
    this.Projects = new Projects(this, this.logger);
    this.TaskLists = new TaskLists(this, this.logger);
    this.Invoices = new Invoices(this, this.logger);
  }

  private normaliseRequest(opts: RequestOptions): OptionsWithUri {
    const requestUri = `${this.url}${opts.path}`;
    delete opts.path;

    return {
      ...opts,
      uri: requestUri,
      auth: {
        user: this.key,
        sendImmediately: true,
      },
      json: true,
    };
  }
}
