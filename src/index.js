import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { loadState, saveState } from './local-storage';
import { appReducer } from './reducers/app.reducer';
import App from './modules/app/components/app.component';

const initialState = loadState();
const store = createStore(appReducer, initialState);

store.subscribe(() => {
  saveState({
    invoices: store.getState().invoices
  });
});

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);