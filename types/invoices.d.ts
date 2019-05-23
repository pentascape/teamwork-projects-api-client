import {StatusResponse} from "./index";

export namespace Invoices {
  export interface InvoicesListRequestOptions {
    page?: number;
    type?: 'all' | 'completed' | 'active';
  }


  export interface InvoicesListInCompanyRequestOptions {
    type?: 'all' | 'completed' | 'active';
    page?: number;
  }


  export interface InvoicesCreateUpdateOptions {
    description?: string;
    "time-cost"?: string;
    "fixed-cost"?: string;
    number?: string;
    "po-number"?: string;
    "display-date": string;
    "currency-code"?: string;
  }


  export interface InvoicesCreateRequestOptions extends InvoicesCreateUpdateOptions {
    projectId: number;
    number: string;
    "display-date": string;
  }


  export interface InvoicesAddTimeLogRequestOptions {
    timeLogId: number;
  }


  export interface InvoicesInvoiceResponseItem {
    "project-id": string;
    "exported-by-user-id": string;
    "created-by-user-firstname": string;
    description: string;
    "time-cost": string;
    "fixed-cost": string;
    status: string;
    "date-created": string;
    "exported-by-user-lastname": string;
    "company-id": string;
    number: string;
    "exported-by-user-firstname": string;
    "po-number": string;
    "project-name": string;
    "display-date": string;
    "exported-date": string;
    "created-by-user-id": string;
    "update-by-user-id": string;
    "created-by-user-lastname": string;
    "company-name": string;
    id: string;
    "date-updated": string;
    "edited-by-user-lastname": string;
    "edited-by-user-firstname": string;
    "currency-code": string;
  }


  export interface InvoicesListResponse {
    invoices: InvoicesInvoiceResponseItem[];
  }


  export interface CurrencyCodesListResponse extends StatusResponse {
    'currency-codes': [
      {
        name: string;
        code: string;
      }
    ];
  }


  export interface InvoiceFetchResponse extends StatusResponse {
    invoice: {
      'exported-by-user-id': string;
      'project-id': string;
      'created-by-user-firstname': string;
      'fixed-cost': string;
      status: string;
      'date-created': string;
      'exported-by-user-lastname': string;
      'line-items': [{
        minutes: string;
        'date-logged-utc': string;
        rate: string;
        'decimal-hours': string;
        description: string;
        'user-first-name': string;
        billable: string;
        'task-name': string;
        'user-id': string;
        'task-id': string;
        id: string;
        date: string;
        cost: string;
        'user-last-name': string;
        hours: string;
      }];
      number: string;
      'po-number': string;
      'exported-by-user-firstname': string;
      expenses: [{
        'invoice-id': string;
        name: string;
        'created-by-user-firstname': string;
        'created-by-user-id': string;
        description: string;
        'created-by-user-lastname': string;
        date: string;
        id: string;
        cost: string;
      }];
      'update-by-user-id': string;
      'created-by-user-id': string;
      id: string;
      'company-name': string;
      'edited-by-user-firstname': string;
      'total-time-decimal': string;
      'total-cost': string;
      description: string;
      'company-id': string;
      'exported-date': string;
      'display-date': string;
      'project-name': string;
      'total-time': string;
      'created-by-user-lastname': string;
      'date-updated': string;
      'edited-by-user-lastname': string;
      'currency-code': string;
    }
  }


  export interface InvoicesCreateResponse extends StatusResponse {
    id: number;
  }
}
