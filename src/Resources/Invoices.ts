import TeamworkResource from '../TeamworkResource';
import {Invoices as InvoicesType, StatusResponse} from '../types';

import InvoicesListRequestOptions = InvoicesType.InvoicesListRequestOptions;
import InvoicesCreateRequestOptions = InvoicesType.InvoicesCreateRequestOptions;
import InvoicesUpdateRequestOptions = InvoicesType.InvoicesUpdateRequestOptions;
import InvoicesUpdateCompleteRequestOptions = InvoicesType.InvoicesUpdateCompleteRequestOptions;
import InvoicesAddTimeLogRequestOptions = InvoicesType.InvoicesAddTimeLogRequestOptions;
import InvoicesListResponse = InvoicesType.InvoicesListResponse;
import InvoicesCreateResponse = InvoicesType.InvoicesCreateResponse;


export default class Invoices extends TeamworkResource {
  public list(options: InvoicesListRequestOptions) {
    const { projectId, ...qs } = options;

    return this.service
      .get({
        path: `/projects/${projectId}/invoices.json`,
        qs,
      })
      .then((response: InvoicesListResponse) => {
        return response.invoices;
      });
  }

  public create(options: InvoicesCreateRequestOptions) {
    const {projectId, ...body} = options;

    return this.service
      .post({
        path: `/projects/${projectId}/invoices.json`,
        body: {
          invoice: body,
        },
      })
      .then((response: InvoicesCreateResponse) => {
        return {
          id: response.id,
        };
      });
  }

  public update(options: InvoicesUpdateRequestOptions) {
    const { id, ...body } = options;

    return this.service
      .put({
        path: `/invoices/${id}.json`,
        body: {
          invoice: body,
        },
      })
      .then((_: StatusResponse) => {
        return {};
      });
  }

  public complete(options: InvoicesUpdateCompleteRequestOptions) {
    const { id } = options;

    return this.service
      .put({
        path: `/invoices/${id}/complete.json`,
      })
      .then(() => {
        return {};
      });
  }

  public logTime(options: InvoicesAddTimeLogRequestOptions) {
    const { id, timeLogId } = options;

    return this.service
      .put({
        path: `/invoices/${id}/lineitems.json`,
        body: {
          lineitems: {
            add: {
              timelogs: timeLogId,
            },
          },
        },
      })
      .then((_: StatusResponse) => {
        return {};
      });
  }
}
