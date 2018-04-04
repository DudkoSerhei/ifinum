import {
  INVOICES_REQUEST,
  INVOICES_SUCCESS,
  INVOICES_FAILURE,
} from '../actions/invoice.action';

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
        byId: action.payload.invoices,
        isFetching: false,
      };
    case INVOICES_FAILURE:
      return {
        ...state,
        isFetching: false,
      };
    default:
      return state;
  }
};