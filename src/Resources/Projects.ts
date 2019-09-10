import {Projects as ProjectsType, StatusResponse} from '../../types';
import TeamworkResource from '../TeamworkResource';

import ProjectFetchRequestOptions = ProjectsType.ProjectFetchRequestOptions;
import ProjectFetchResponse = ProjectsType.ProjectFetchResponse;
import ProjectCreateRequestOptions = ProjectsType.ProjectCreateRequestOptions;
import ProjectCreateResponse = ProjectsType.ProjectCreateResponse;
import ProjectUpdateRequestOptions = ProjectsType.ProjectUpdateRequestOptions;
import ProjectSetRatesRequestOptions = ProjectsType.ProjectSetRatesRequestOptions;
import ProjectFetchRatesRequestOptions = ProjectsType.ProjectFetchRatesRequestOptions;
import ProjectFetchRatesResponse = ProjectsType.ProjectFetchRatesResponse;
import ProjectListRequestOptions = ProjectsType.ProjectListRequestOptions;
import ProjectListResponse = ProjectsType.ProjectListResponse;
import ProjectListInCompanyResponse = ProjectsType.ProjectListInCompanyResponse;
import ProjectListStarredResponse = ProjectsType.ProjectListStarredResponse;
import ProjectStatsRequestOptions = ProjectsType.ProjectStatsRequestOptions;
import ProjectGetStatsResponse = ProjectsType.ProjectGetStatsResponse;
import ProjectToggleFeaturesRequestOptions = ProjectsType.ProjectToggleFeaturesRequestOptions;


export default class Projects extends TeamworkResource {
  public list(qs?: ProjectListRequestOptions) {
    return this.service
      .get({
        path: '/projects.json',
        qs,
      })
      .then((response: ProjectListResponse) => {
        return response.projects;
      });
  }

  public listInCompany(companyId: string | number, qs?: {includePeople?: boolean}) {
    return this.service
      .get({
        path: `/companies/${companyId}/projects.json`,
        qs,
      })
      .then((result: ProjectListInCompanyResponse) => {
        return result.projects;
      });
  }

  public listStarred() {
    this.service
      .get({
        path: '/projects/starred.json'
      })
      .then((response: ProjectListStarredResponse) => {
        return response.projects;
      })
  }

  public fetch(id: string | number, qs?: ProjectFetchRequestOptions) {
    return this.service
      .get({
        path: `/projects/${id}.json`,
        qs,
      })
      .then((response: ProjectFetchResponse) => response.project);
  }

  public create(properties: ProjectCreateRequestOptions) {
    return this.service
      .post({
        path: '/projects.json',
        body: {
          project: properties,
        },
      })
      .then((response: ProjectCreateResponse) => ({
        id: response.id,
      }));
  }

  public update(id: string | number, properties: ProjectUpdateRequestOptions) {
    return this.service
      .put({
        path: `projects/${id}.json`,
        body: {
          project: properties,
        },
      })
      .then((_: StatusResponse) => {
        return {};
      });
  }

  public getRates(id: string | number, qs?: ProjectFetchRatesRequestOptions) {
    return this.service
      .get({
        path: `/projects/${id}/rates.json`,
        qs,
      })
      .then((response: ProjectFetchRatesResponse) => {
        return {
          rates: response.rates,
        };
      });
  }

  public setRates(id: string | number, rates: ProjectSetRatesRequestOptions) {
    return this.service
      .post({
        path: `/projects/${id}/rates.json`,
        body: {
          rates: rates,
        },
      })
      .then((_: StatusResponse) => {
        return {};
      });
  }

  public getStats(id: string | number, qs?: ProjectStatsRequestOptions) {
    return this.service
      .get({
        path: `/projects/${id}/stats.json`,
        qs
      })
      .then((response: ProjectGetStatsResponse) => {
        return response.stats;
      })
  }

  public toggleFeatures(id: string | number, options: ProjectToggleFeaturesRequestOptions) {
    return this.service
      .put({
        path: `/projects/${id}.json`,
        body: {
          project: options
        },
      })
      .then((_: StatusResponse) => {
        return {};
      })
  }

  public star(id: string | number) {
    return this.service
      .put({
        path: `/projects/${id}/star.json`,
      })
      .then((_: StatusResponse) => {
        return {};
      });
  }

  public unstar(id: string | number) {
    return this.service
      .put({
        path: `/projects/${id}/unstar.json`,
      })
      .then((_: StatusResponse) => {
        return {};
      });
  }

  public delete(id: string | number) {
    return this.service
      .del({
        path: `/projects/${id}.json`,
      })
      .then((_: StatusResponse) => {
        return {};
      });
  }
}
