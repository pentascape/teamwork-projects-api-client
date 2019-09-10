import {StatusResponse} from "./index";

export namespace TaskLists {
  export interface TaskListsListRequestOptions {
    status?: 'all' | 'active' | 'completed';
    page?: string;
    pageSize?: string;
    showDeleted?: boolean;
    includeArchivedProjects?: boolean;
  }


  export interface ProjectTaskListsListRequestOptions {
    "responsible-party-id"?: string;
    getOverdueCount?: boolean;
    status?: string;
    showMilestones?: boolean;
    getCompletedCount?: boolean;
    filter?: string;
  }


  interface TaskListsUpdateRequestOptions {
    name?: string;
    "milestone-id"?: string;
    description?: string;
    private?: boolean;
    "grant-access-to"?: string;
  }


  export interface TaskListsCreateRequestOptions extends TaskListsUpdateRequestOptions {
    name: string;
    pinned?: boolean;
  }


  export interface TaskListsReorderRequestOptions {
    "todo-lists": [
      {
        "id": string | number;
      }
    ]
  }


  export interface TaskListsCopyRequestOptions {
    projectId: number;
    includeCompletedTasks: number;
  }


  export interface TaskListsMoveRequestOptions {
    projectId: number;
  }


  interface TaskListsResponseItemShared {
    id: string;
    name: string;
    description: string;
    position: number;
    pinned: boolean;
    "milestone-id": string;
    "uncompleted-count": number;
    complete: boolean;
    private: boolean;
  }


  interface TaskListsListResponseItem extends TaskListsResponseItemShared {
    isTemplate: boolean;
    status: string;
    projectId: string;
    projectName: string;
    DLM: null;
  }


  interface TaskListsFetchResponseItem extends TaskListsResponseItemShared {
    projectid: string;
    "overdue-count": string;
    "project-name": string;
    pinned: boolean;
    "completed-count": string;
  }


  export interface TaskListsListResponse extends StatusResponse {
    tasklists: TaskListsListResponseItem[];
  }


  export interface TaskListsFetchResponse extends StatusResponse {
    "todo-list": TaskListsFetchResponseItem;
  }


  export interface TaskListsCreateResponse extends StatusResponse {
    TASKLISTID: string;
  }
}
