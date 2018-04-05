import { createSelector } from 'reselect';

const invoices = state => state.invoices;
const fetchingStatus = createSelector(invoices, state => state.isFetching);
const byId = createSelector(invoices, state => state.byId);
const all = createSelector(byId, state => Object.values(state));

export const InvoicesSelectors = {
  fetchingStatus,
  all,
};