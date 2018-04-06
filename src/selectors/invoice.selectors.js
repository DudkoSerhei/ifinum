import { createSelector } from 'reselect';

const invoices = state => state.invoices;
const fetchingStatus = createSelector(invoices, state => state.isFetching);
const byId = createSelector(invoices, state => state.byId);
const all = createSelector(byId, state => Object.values(state));
const numbers = createSelector(all, state => state.map(item => { return item.number }));

const getById = id => createSelector(byId, state => state[id]);

export const InvoicesSelectors = {
  fetchingStatus,
  all,
  numbers,
  getById,
};