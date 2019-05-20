import TeamworkResource from '../TeamworkResource';
import {StatusResponse, TaskLists as TaskListsType} from '../types';

import TaskListsListRequestOptions = TaskListsType.TaskListsListRequestOptions;
import TaskListsListResponse = TaskListsType.TaskListsListResponse;
import TaskListsFetchOptions = TaskListsType.TaskListsFetchOptions;
import TaskListsFetchResponse = TaskListsType.TaskListsFetchResponse;
import TaskListsCreateRequestOptions = TaskListsType.TaskListsCreateRequestOptions;
import TaskListsCreateResponse = TaskListsType.TaskListsCreateResponse;
import TaskListsUpdateRequestOptions = TaskListsType.TaskListsUpdateRequestOptions;


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

