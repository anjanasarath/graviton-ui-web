import { combineReducers } from 'redux';
import { sessionReducer } from 'redux-react-session';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  router: routerReducer,
  session: sessionReducer
});
