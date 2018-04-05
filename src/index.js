import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { loadState, saveState } from './local-storage';
import { appReducer } from './reducers/app.reducer';
import App from './modules/app/components/app.component';

const composeEnhancers = typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) :
  compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));
const initialState = loadState();
const store = createStore(appReducer, initialState, enhancer);

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