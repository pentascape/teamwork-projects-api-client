import {StatusResponse, TaskLists as TaskListsType} from '../../types';
import TeamworkResource from '../TeamworkResource';

import TaskListsListRequestOptions = TaskListsType.TaskListsListRequestOptions;
import ProjectTaskListsListRequestOptions = TaskListsType.ProjectTaskListsListRequestOptions;
import TaskListsListResponse = TaskListsType.TaskListsListResponse;
import TaskListsFetchResponse = TaskListsType.TaskListsFetchResponse;
import TaskListsCreateRequestOptions = TaskListsType.TaskListsCreateRequestOptions;
import TaskListsCreateResponse = TaskListsType.TaskListsCreateResponse;
import TaskListsUpdateRequestOptions = TaskListsType.TaskListsUpdateRequestOptions;
import TaskListsReorderRequestOptions = TaskListsType.TaskListsReorderRequestOptions;
import TaskListsCopyRequestOptions = TaskListsType.TaskListsCopyRequestOptions;
import TaskListsMoveRequestOptions = TaskListsType.TaskListsMoveRequestOptions;


export default class TaskLists extends TeamworkResource {
  public list(qs?: TaskListsListRequestOptions) {
    return this.service
      .get({
        path: `/tasklists.json`,
        qs
      })
      .then((response: TaskListsListResponse) => {
        return response.tasklists;
      });
  }

  public listInProject(projectId: string | number, qs?: ProjectTaskListsListRequestOptions) {
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

  public listTemplates() {
    return this.service
      .get({
        path: '/tasklists/templates.json'
      })
      .then((response) => {
        return response.tasklists;
      });
  }

  public fetch(id: string | number) {
    return this.service
      .get({
        path: `/tasklists/${id}.json`,
      })
      .then((response: TaskListsFetchResponse) => {
        return response['todo-list'];
      });
  }

  public create(projectId: string | number, properties: TaskListsCreateRequestOptions) {
    return this.service
      .post({
        path: `/projects/${projectId}/tasklists.json`,
        body: {
          'todo-list': properties,
        },
      })
      .then((response: TaskListsCreateResponse) => ({
        id: response.TASKLISTID,
      }));
  }

  public update(id: string | number, properties: TaskListsUpdateRequestOptions) {
    return this.service
      .put({
        path: `/tasklists/${id}.json`,
        body: {
          'todo-list': properties,
        },
      })
      .then((_: StatusResponse) => {
        return {};
      });
  }

  public reorder(projectId: string | number, body: TaskListsReorderRequestOptions) {
    return this.service
      .put({
        path: `/projects/${projectId}/tasklists/reorder.json`,
        body: body,
      })
      .then((_: StatusResponse) => {
        return {};
      });
  }

  public copy(id: string | number, options: TaskListsCopyRequestOptions) {
    return this.service
      .put({
        path: `/tasklist/${id}/copy.json`,
        body: options,
      })
      .then((_: StatusResponse) => {
        return {};
      })
  }

  public move(id: string | number, options: TaskListsMoveRequestOptions) {
    return this.service
      .put({
        path: `/tasklist/${id}/move.json`,
        body: options,
      })
      .then((_: StatusResponse) => {
        return {};
      })
  }

  public delete(id: string | number) {
    return this.service
      .del({
        path: `/tasklists/${id}.json`,
      })
      .then((_: StatusResponse) => {
        return {};
      })
  }
}

