import {StatusResponse} from "./index";

export namespace Projects {
  export interface ProjectFetchRequestOptions {
    id: string;
    includePeople: boolean;
    projectOwnerIds: string;
    projectHealth: string;
    includeProjectOwner: boolean;
    userId: string;
  }


  export interface ProjectCreateUpdateRequestOptions {
    name?: string;
    description?: string;
    startDate?: string;
    endDate?: string;
    companyId?: string;
    newCompany?: string;
    "category-id"?: string;
    "harvest-timers-enabled"?: string;
    tags?: string;
    replyByEmailEnabled?: string;
    privacyEnabled?: string;
  }


  export interface ProjectCreateRequestOptions extends ProjectCreateUpdateRequestOptions {
    name: string;
  }


  export interface ProjectUpdateRequestOptions extends ProjectCreateUpdateRequestOptions {
    id: number;
    status?: string;
    "use-tasks"?: string;
    "use-messages"?: string;
    "use-time"?: string;
    "use-riskregister"?: string;
    "use-billing"?: string;
    "use-milestones"?: string;
    "use-files"?: string;
    "use-notebook"?: string;
    "use-links"?: string;
    defaultPrivacy?: string;
  }


  export interface ProjectFetchRatesRequestOptions {
    id: string;
    page: number;
    pageSize: number;
  }


  export interface ProjectSetRatesRequestOptions {
    id: number;
    'project-default': number;
    users: {
      [userId: string]: {
        rate: number;
      }
    };
  }


  export interface ProjectFetchResponse extends StatusResponse {
    project: {
      replyByEmailEnabled: boolean;
      starred: boolean;
      "show-announcement": boolean;
      "harvest-timers-enabled": boolean;
      subStatus: string;
      status: string;
      defaultPrivacy: string;
      integrations: {
        xero: {
          countrycode: string;
          enabled: boolean;
          connected: string;
          organisation: string;
          basecurrency: string;
        },
        microsoftConnectors: {
          enabled: false
        },
        onedrivebusiness: {
          enabled: false
        }
      },
      "created-on": string;
      filesAutoNewVersion: boolean;
      category: {
        name: string;
        id: string;
        color: string;
      },
      tags: [],
      "overview-start-page": string;
      logo: string;
      startDate: string;
      id: string;
      "last-changed-on": string;
      type: string;
      endDate: string;
      company: {
        name: string;
        id: string;
      },
      "tasks-start-page": string;
      "active-pages": {
        links: string;
        tasks: string;
        time: string;
        billing: string;
        notebooks: string;
        files: string;
        comments: string;
        riskRegister: string;
        milestones: string;
        messages: string;
      },
      name: string;
      privacyEnabled: boolean;
      description: string;
      logoFromCompany: boolean;
      directFileUploadsEnabled: boolean;
      "start-page": string;
      skipWeekends: boolean;
      notifyeveryone: boolean;
      boardData: {}
    };
  }


  export interface ProjectCreateResponse extends StatusResponse {
    id: string;
  }


  export interface ProjectFetchRatesResponse extends StatusResponse {
    rates: {
      users: {
        [userId: number]: {
          source: string;
          rate: string;
        };
      };
      'account-default': string;
      'project-default': string;
    };
  }
}
