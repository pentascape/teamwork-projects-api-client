import TeamworkResource from '../TeamworkResource';


export default class Projects extends TeamworkResource {
  public fetch(options: ProjectFetchRequestOptions) {
    const {id, ...qs} = options;
    return this.service
      .get({
        path: `/projects/${id}.json`,
        qs,
      })
      .then((response: ProjectFetchResponse) => response.project);
  }

  public create(options: ProjectCreateRequestOptions) {
    return this.service
      .post({
        path: '/projects.json',
        body: {
          project: options,
        },
      })
      .then((response: ProjectCreateResponse) => ({
        id: response.id,
      }));
  }

  public update(options: ProjectUpdateRequestOptions) {
    const {id, ...requestBody} = options;
    return this.service
      .put({
        path: `projects/${id}.json`,
        body: {
          project: requestBody,
        },
      })
      .then((_: StatusResponse) => {
        return {};
      });
  }
}
