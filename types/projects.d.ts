import {StatusResponse} from "./index";

export namespace Projects {
  export interface ProjectListRequestOptions {
    status?: string;
    updatedAfterDate?: string;
    orderby?: string;
    createdAfterDate?: string;
    createdAfterTime?: string;
    catId?: number;
    includePeople?: boolean;
    includeProjectOwner?: boolean;
    page?: string;
    pageSize?: number;
    orderMode?: string;
    onlyStarredProjects?: boolean;
    companyId?: string;
    projectOwnerIds?: string;
    searchTerm?: string;
    getDeleted?: boolean;
    includeTags?: boolean;
    userId?: string;
    updatedAfterDateTime?: string;
  }


  export interface ProjectFetchRequestOptions {
    includePeople?: boolean;
    projectOwnerIds?: string;
    projectHealth?: string;
    includeProjectOwner?: boolean;
    userId?: string;
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
    page?: number;
    pageSize?: number;
  }


  export interface ProjectSetRatesRequestOptions {
    'project-default'?: number;
    users?: {
      [userId: string]: {
        rate: number;
      }
    };
  }


  export interface ProjectStatsRequestOptions {
    'responsible-party-ids'?: string;
    onlymyprojects?: boolean;
    forStarredProjects?: boolean;
    onlyMyEvents?: boolean;
    getPermissions?: boolean;
    eventsInNext?: number;
  }


  export interface ProjectToggleFeaturesRequestOptions {
    'use-tasks': string;
    'use-messages': string;
    'use-time': string;
    'use-riskregister': string;
    'use-billing': string;
    'use-milestones': string;
    'use-files': string;
    'use-notebook': string;
    'use-links': string;
  }


  interface ProjectResponseItemShared {
    tags: [];
    id: string;
    name: string;
    logo: string;
    status: string;
    endDate: string;
    starred: boolean;
    startDate: string;
    description: string;
    'start-page': string;
    'created-on': string;
    notifyeveryone: boolean;
    'last-changed-on': string;
    'show-announcement': boolean;
    'harvest-timers-enabled': boolean;
  }


  interface ProjectListResponseItem extends ProjectResponseItemShared {
    boardData: {};
    subStatus: string;
    announcement: string;
    defaultPrivacy: string;
    privacyEnabled: boolean;
    isProjectAdmin: boolean;
    announcementHTML: string;
    'tasks-start-page': string;
    filesAutoNewVersion: boolean;
    replyByEmailEnabled: boolean;
    'overview-start-page': string;
    company: {
      'is-owner': string;
      id: string;
      name: string;
    };
    category: {
      color: string;
      id: string;
      name: string;
    };
    defaults: {
      privacy: string;
    };
    integrations: {
      xero: {
        basecurrency: string;
        countrycode: string;
        enabled: boolean;
        connected: string;
        organisation: string;
      };
      sharepoint: {
        account: string;
        foldername: string;
        enabled: boolean;
        folder: string;
      };
      microsoftConnectors: {
        enabled: boolean;
      };
      onedrivebusiness: {
        account: string;
        foldername: string;
        enabled: boolean;
        folder: string;
      };
    };
  }


  interface ProjectAlternateListResponseItem extends ProjectResponseItemShared {
    company: {
      id: string;
      name: string;
      'is-owner': string;
    };
    announcement: string;
    isProjectAdmin: boolean;
    category: {
      id: string;
      name: string;
    };
  }


  interface ProjectFetchResponseItem extends ProjectResponseItemShared {
    type: string;
    boardData: {};
    subStatus: string;
    skipWeekends: boolean;
    defaultPrivacy: string;
    privacyEnabled: boolean;
    logoFromCompany: boolean;
    "tasks-start-page": string;
    filesAutoNewVersion: boolean;
    replyByEmailEnabled: boolean;
    'overview-start-page': string;
    directFileUploadsEnabled: boolean;
    company: {
      name: string;
      id: string;
    };
    category: {
      color: string;
      id: string;
      name: string;
    };
    integrations: {
      xero: {
        countrycode: string;
        enabled: boolean;
        connected: string;
        organisation: string;
        basecurrency: string;
      };
      microsoftConnectors: {
        enabled: false
      };
      onedrivebusiness: {
        enabled: false
      };
    };
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
  }


  export interface ProjectListResponse extends StatusResponse {
    projects: ProjectListResponseItem[];
  }


  export interface ProjectListInCompanyResponse extends StatusResponse {
    projects: ProjectAlternateListResponseItem[];
  }


  export interface ProjectListStarredResponse extends StatusResponse {
    projects: ProjectAlternateListResponseItem[];
  }


  export interface ProjectFetchResponse extends StatusResponse {
    project: ProjectFetchResponseItem;
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


  export interface ProjectGetStatsResponse extends StatusResponse {
    stats: {
      tasks: {
        nodate: string;
        today: string;
        late: string;
        complete: string;
        upcoming: string;
        active: string;
      };
      columns: {
        count: string;
      };
      billing: {
        completed: string;
        active: string;
      };
      events: {
        today: string;
        count: string;
        hasEvents: boolean;
      };
      milestones: {
        today: string;
        late: string;
        complete: string;
        upcoming: string;
        active: string;
      };
    };
  }
}
