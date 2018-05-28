import { SOCIAL_LOGIN_SUCCESS, LOGOUT_SUCCESS } from '../actions/types';
import { createReducer } from '../utils/reducer';

const socialLoginSuccess = (state, action) => {
  console.log("Successful login: "+ action.user.profile.email);
  return state;
}
const logout = (state, action) =>{
  console.log("Logged out successfully: "+ action.type);
  return state;
}

//handlers
const handlers = {
  SOCIAL_LOGIN_SUCCESS: socialLoginSuccess,
  LOGOUT_SUCCESS: logout
};

export default createReducer({}, handlers);
