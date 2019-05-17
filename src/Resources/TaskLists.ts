import TeamworkResource from '../TeamworkResource';


export default class TaskLists extends TeamworkResource {
  public list(options: TaskListsListRequestOptions) {
    const {projectId, ...qs} = options;

    return this.service
      .get({
        path: `/projects/${projectId}.tasklists.json`,
        qs,
      })
      .then((response: TaskListsListResponse) => {
        return response.tasklists.map((taskList) => ({
          id: taskList.id,
          name: taskList.name,
          project: taskList.projectId,
        }));
      });
  }

  public fetch(options: TaskListsFetchOptions) {
    const {id} = options;

    return this.service
      .get({
        path: `/tasklists/${id}.json`,
      })
      .then((response: TaskListsFetchResponse) => {
        return response['todo-list'];
      });
  }

  public create(options: TaskListsCreateRequestOptions) {
    const {projectId, ...body} = options;

    return this.service
      .post({
        path: `/projects/${projectId}/tasklists.json`,
        body,
      })
      .then((response: TaskListsCreateResponse) => ({
        id: response.TASKLISTID,
      }));
  }

  public update(options: TaskListsUpdateRequestOptions) {
    const {id, ...body} = options;

    return this.service
      .put({
        path: `/tasklists/${id}.json`,
        body,
      })
      .then((_: StatusResponse) => {
        return {};
      });
  }
}

