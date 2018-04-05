import { combineReducers } from 'redux';
import invoiceReducer from './invoice.reducer';

export const appReducer = combineReducers({
  invoices: invoiceReducer,
});