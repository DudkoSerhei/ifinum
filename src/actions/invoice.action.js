import axios from 'axios';
import { parseRawInvoices } from '../services/invoice.service';

export const INVOICES_REQUEST = 'INVOICES_REQUEST';
export const INVOICES_SUCCESS = 'INVOICES_SUCCESS';
export const INVOICES_FAILURE = 'INVOICES_FAILURE';

export const invoicesRequest = () => ({
  type: INVOICES_REQUEST,
});

export const invoicesReceive = invoices => ({
  type: INVOICES_SUCCESS,
  payload: {
    invoices,
  },
});

export const invoicesFailed = error => ({
  type: INVOICES_FAILURE,
  payload: {
    error,
  },
});

export const invoicesFetch = () => (dispatch) => {
  dispatch(invoicesRequest());
  axios.get('http://localhost:9000/invoices')
    .then((response) => {
      dispatch(invoicesReceive(parseRawInvoices(response.data)));
    })
    .catch(error => dispatch(invoicesFailed(error)));
};

export const INVOICE_CREATE_REQUEST = 'INVOICE_CREATE_REQUEST';
export const INVOICE_CREATE_SUCCESS = 'INVOICE_CREATE_SUCCESS';
export const INVOICE_CREATE_FAILURE = 'INVOICE_CREATE_FAILURE';

export const invoiceCreateRequest = () => ({
  type: INVOICE_CREATE_REQUEST,
});

export const invoiceCreateReceive = () => ({
  type: INVOICE_CREATE_SUCCESS,
});

export const invoiceCreateFailed = error => ({
  type: INVOICE_CREATE_FAILURE,
  payload: {
    error,
  },
});

export const invoiceCreateFetch = (invoice) => (dispatch) => {
  dispatch(invoiceCreateRequest());
  axios.post('http://localhost:9000/invoices', invoice)
    .then((response) => {
      dispatch(invoiceCreateReceive(response.data));
    })
    .catch(error => dispatch(invoiceCreateFailed(error)));
};

export const INVOICE_REMOVE_REQUEST = 'INVOICE_REMOVE_REQUEST';
export const INVOICE_REMOVE_SUCCESS = 'INVOICE_REMOVE_SUCCESS';
export const INVOICE_REMOVE_FAILURE = 'INVOICE_REMOVE_FAILURE';

export const invoiceRemoveRequest = () => ({
  type: INVOICE_REMOVE_REQUEST,
});

export const invoiceRemoveReceive = () => ({
  type: INVOICE_REMOVE_SUCCESS,
});

export const invoiceRemoveFailed = () => ({
  type: INVOICE_REMOVE_FAILURE,
});

// export const invoiceRemoveFetch = () => (dispatch) => {
//   dispatch(invoicesRequest());
//   return fetch('http://localhost:9000/invoices')
//     .then((response) => {
//       dispatch(invoicesReceive(response.data));
//     })
//     .catch(error => dispatch(invoicesFailed(error)));
// };

export const INVOICE_EDIT_REQUEST = 'INVOICE_EDIT_REQUEST';
export const INVOICE_EDIT_SUCCESS = 'INVOICE_EDIT_SUCCESS';
export const INVOICE_EDIT_FAILURE = 'INVOICE_EDIT_FAILURE';

export const invoiceEditRequest = () => ({
  type: INVOICE_EDIT_REQUEST,
});

export const invoiceEditReceive = invoice => ({
  type: INVOICE_EDIT_SUCCESS,
  payload: {
    invoice,
  },
});

export const invoiceEditFailed = error => ({
  type: INVOICE_EDIT_FAILURE,
  payload: {
    error,
  },
});

export const invoiceEditFetch = () => (dispatch) => {
  dispatch(invoiceEditRequest());
  return fetch('http://localhost:9000/invoices', {
      method: 'PUT',
    })
    .then((response) => {
      dispatch(invoiceEditReceive(response.data));
    })
    .catch(error => dispatch(invoiceRemoveFailed(error)));
};