import React from 'react';
import ReactDOM from 'react-dom';
import promiseMiddleware from 'redux-promise-middleware';
import { Provider } from 'react-redux';
import { routerMiddleware } from 'react-router-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { sessionService } from 'redux-react-session';
import createSagaMiddleware from 'redux-saga';
import createHistory from 'history/createBrowserHistory';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Routes from './src/routes';
import reducers from './src/reducers';
import sagas from './src/sagas';
import styles from './index.css';

const history = createHistory();
const middleware = routerMiddleware(history);
const sagaMiddleware = createSagaMiddleware({});

const store = createStore(
  reducers,
  undefined,
  compose(applyMiddleware(sagaMiddleware, promiseMiddleware(), middleware))
);

// "to initialise application with existing browser session..."
//sessionService.initSessionService(store, { refreshOnCheckAuth: false, redirectPath: '/login', driver: 'COOKIES' });
sagaMiddleware.run(sagas);

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <Routes history={history} />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('app')
)
