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
  return fetch('http://localhost:9000/invoices')
    .then((response) => {
      dispatch(invoicesReceive(response.data));
    })
    .catch(error => dispatch(invoicesFailed(error)));
};