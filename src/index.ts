import {OptionsWithUri} from 'request-promise';
import request from 'request-promise-native';

import Invoices from './Resources/Invoices';
import Projects from './Resources/Projects';
import TaskLists from './Resources/TaskLists';


export default class implements Teamwork {
  public Projects: Projects;
  public TaskLists: TaskLists;
  public Invoices: Invoices;

  private readonly url: string;
  private readonly key: string;

  constructor(options: TeamworkOptions) {
    const urlComponents = [
      `https://${options.urlPrefix}`,
      options.region,
      'teamwork.com',
    ];

    this.url = urlComponents.filter((e) => e).join('.');
    this.key = options.apiKey;

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
    this.Projects = new Projects(this);
    this.TaskLists = new TaskLists(this);
    this.Invoices = new Invoices(this);
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
