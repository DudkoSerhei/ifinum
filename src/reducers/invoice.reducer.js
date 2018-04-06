import {
  INVOICES_REQUEST,
  INVOICES_SUCCESS,
  INVOICES_FAILURE,
  INVOICE_CREATE_REQUEST,
  INVOICE_CREATE_SUCCESS,
  INVOICE_CREATE_FAILURE,
  INVOICE_REMOVE_REQUEST,
  INVOICE_REMOVE_SUCCESS,
  INVOICE_REMOVE_FAILURE,
  INVOICE_EDIT_REQUEST,
  INVOICE_EDIT_SUCCESS,
  INVOICE_EDIT_FAILURE,
} from '../actions/invoice.action';
import { InvoiceUtils } from '../utils/invoice.utils';

const INITIAL_STATE = {
  isFetching: false,
  byId: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INVOICES_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case INVOICES_SUCCESS:
      return {
        ...state,
        byId: InvoiceUtils.fromArray('id', action.payload.invoices),
        isFetching: false,
      };
    case INVOICES_FAILURE:
      return {
        ...state,
        isFetching: false,
      };
    case INVOICE_CREATE_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case INVOICE_CREATE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        byId: {
          ...state.byId,
          [action.payload.invoice.id]: action.payload.invoice,
        },
      };
    case INVOICE_CREATE_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error,
      };
    case INVOICE_REMOVE_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case INVOICE_REMOVE_SUCCESS:
      const newState = { ...state.byId };

      delete newState[action.payload.id];

      return {
        ...state,
        isFetching: false,
        byId: {
          ...newState,
        }
      };
    case INVOICE_REMOVE_FAILURE:
      return {
        ...state,
        isFetching: false,
      };
    case INVOICE_EDIT_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case INVOICE_EDIT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        byId: {
          ...state.byId,
          [action.payload.invoice.id]: action.payload.invoice,
        },
      };
    case INVOICE_EDIT_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};