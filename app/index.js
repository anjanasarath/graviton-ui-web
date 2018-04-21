import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React from 'react';
import ReactDOM from 'react-dom';
import promiseMiddleware from 'redux-promise-middleware';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { ConnectedRouter, routerMiddleware, push } from 'react-router-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { sessionService } from 'redux-react-session';
import createSagaMiddleware from 'redux-saga';
import createHistory from 'history/createBrowserHistory';
import reducers from './src/reducers';
import sagas from './src/sagas';
import Home from './src/containers/home';
import LoginPage from './src/components/loginPage';
import SignUpPage from './src/components/signUp';
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
sessionService.initSessionService(store, { driver: 'COOKIES' });
sagaMiddleware.run(sagas);

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <ConnectedRouter history={history}>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/home" component={Home}/>
          <Route path="/login" component={LoginPage}/>
          <Route path="/signin" component={SignUpPage}/>
        </div>
      </ConnectedRouter>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('app')
)
