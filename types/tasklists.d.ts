import {StatusResponse} from "./index";

export namespace TaskLists {
  export interface TaskListsListRequestOptions {
    projectId: number;
    "responsible-party-id"?: string;
    getOverdueCount?: boolean;
    status?: string;
    showMilestones?: boolean;
    getCompletedCount?: boolean;
    filter?: string;
  }


  export interface TaskListsFetchOptions {
    id: number;
  }


  interface TaskListsCreateUpdateSharedRequestOptions {
    name?: string;
    "milestone-id"?: string;
    description?: string;
    private?: boolean;
    "grant-access-to"?: string;
  }


  export interface TaskListsCreateRequestOptions extends TaskListsCreateUpdateSharedRequestOptions {
    projectId: number;
    name: string;
    pinned?: boolean;
  }


  export interface TaskListsUpdateRequestOptions extends TaskListsCreateUpdateSharedRequestOptions {
    id: string;
  }


  interface TaskListsResponseItemShared {
    name: string;
    pinned: boolean;
    "milestone-id": string;
    description: string;
    "uncompleted-count": number;
    id: string;
    complete: boolean;
    private: boolean;
    position: number;
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
