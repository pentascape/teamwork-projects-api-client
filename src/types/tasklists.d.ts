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


  export interface TaskListsCreateRequestOptions {
    projectId: number;
    name: string;
    private: boolean;
    pinned: boolean;
    "milestone-id": string;
    description: string;
    "todo-list-template-id": string;
  }


  export interface TaskListsUpdateRequestOptions {
    id: string;
    name: string;
    "milestone-id": string;
    description: string;
    private: string;
    "grant-access-to": string;
  }


  export interface TaskListsListResponse extends StatusResponse {
    tasklists: [
      {
        name: string;
        pinned: boolean;
        "milestone-id": string;
        description: string;
        "uncompleted-count": number;
        id: string;
        complete: boolean;
        private: boolean;
        isTemplate: boolean;
        position: number;
        status: string;
        projectId: string;
        projectName: string;
        DLM: null;
      }
    ]
  }


  export interface TaskListsFetchResponse extends StatusResponse {
    "todo-list": {
      projectid: string;
      name: string;
      description: string;
      "milestone-id": string;
      "uncompleted-count": string;
      complete: boolean;
      private: string;
      "overdue-count": string;
      "project-name": string;
      pinned: boolean;
      id: string;
      position: string;
      "completed-count": string;
    };
  }


  export interface TaskListsCreateResponse extends StatusResponse {
    TASKLISTID: string;
  }
}
