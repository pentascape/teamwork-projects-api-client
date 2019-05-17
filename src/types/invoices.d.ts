

interface InvoicesListRequestOptions {
  projectId: number;
  type?: 'all' | 'completed' | 'active';
  page?: number;
}


interface InvoicesCreateUpdateOptions {
  description?: string;
  "time-cost"?: string;
  "fixed-cost"?: string;
  number?: string;
  "po-number"?: string;
  "display-date": string;
  "currency-code"?: string;
}


interface InvoicesCreateRequestOptions extends InvoicesCreateUpdateOptions {
  projectId: number;
  number: string;
  "display-date": string;
}


interface InvoicesUpdateRequestOptions extends InvoicesCreateUpdateOptions {
  id: number;
}


interface InvoicesUpdateCompleteRequestOptions {
  id: number;
}


interface InvoicesAddTimeLogRequestOptions {
  id: number;
  timeLogId: number;
}


interface InvoicesInvoiceResponse {
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


interface InvoicesListResponse {
  invoices: InvoicesInvoiceResponse[];
}


interface InvoicesCreateResponse extends StatusResponse {
  id: number;
}
