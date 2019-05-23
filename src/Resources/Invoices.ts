import {Invoices as InvoicesType, StatusResponse} from '../../types';
import TeamworkResource from '../TeamworkResource';

import InvoicesListRequestOptions = InvoicesType.InvoicesListRequestOptions;
import InvoicesListInCompanyRequestOptions = InvoicesType.InvoicesListInCompanyRequestOptions;
import InvoicesCreateRequestOptions = InvoicesType.InvoicesCreateRequestOptions;
import InvoicesCreateUpdateOptions = InvoicesType.InvoicesCreateUpdateOptions;
import InvoicesAddTimeLogRequestOptions = InvoicesType.InvoicesAddTimeLogRequestOptions;
import InvoicesListResponse = InvoicesType.InvoicesListResponse;
import InvoicesCreateResponse = InvoicesType.InvoicesCreateResponse;
import CurrencyCodesListResponse = InvoicesType.CurrencyCodesListResponse;
import InvoiceFetchResponse = InvoicesType.InvoiceFetchResponse;


export default class Invoices extends TeamworkResource {
  public list(qs: InvoicesListRequestOptions) {
    return this.service
      .get({
        path: '/invoices.json',
        qs,
      })
      .then((response) => {
        return response.invoices;
      })
  }

  public listInProject(projectId: string | number, qs: InvoicesListInCompanyRequestOptions) {
    return this.service
      .get({
        path: `/projects/${projectId}/invoices.json`,
        qs,
      })
      .then((response: InvoicesListResponse) => {
        return response.invoices;
      });
  }

  public listCurrencyCodes() {
    return this.service
      .get({
        path: '/currencycodes.json',
      })
      .then((response: CurrencyCodesListResponse) => {
        return response['currency-codes'];
      })
  }

  public fetch(id: string | number) {
    return this.service
      .get({
        path: `/invoices/${id}.json`,
      })
      .then((response: InvoiceFetchResponse) => {
        return response.invoice;
      })
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

  public update(id: string | number, options: InvoicesCreateUpdateOptions) {
    return this.service
      .put({
        path: `/invoices/${id}.json`,
        body: {
          invoice: options,
        },
      })
      .then((_: StatusResponse) => {
        return {};
      });
  }

  public complete(id: string | number) {
    return this.service
      .put({
        path: `/invoices/${id}/complete.json`,
      })
      .then(() => {
        return {};
      });
  }

  public incomplete(id: string | number) {
    return this.service
      .put({
        path: `/invoices/${id}/uncomplete.json`
      })
      .then((_: StatusResponse) => {
        return {};
      })
  }

  public logTime(id: string | number, logs: InvoicesAddTimeLogRequestOptions) {
    return this.service
      .put({
        path: `/invoices/${id}/lineitems.json`,
        body: {
          lineitems: {
            add: {
              timelogs: logs,
            },
          },
        },
      })
      .then((_: StatusResponse) => {
        return {};
      });
  }

  public delete(id: string | number) {
    return this.service
      .del({
        path: `/invoices/${id}.json`
      })
      .then((_: StatusResponse) => {
        return {};
      })
  }
}
