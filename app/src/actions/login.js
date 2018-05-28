import { sessionService } from 'redux-react-session';
import { SOCIAL_LOGIN_SUCCESS, LOGOUT_SUCCESS } from './types';

export const socialLoginSuccess = (provider, userData) => {
  sessionService.saveUser(userData.profile);
  sessionService.saveSession(userData.token);
  return {
    type: SOCIAL_LOGIN_SUCCESS,
    provider: provider,
    user: userData,
  };
}

export const logout = () => {
  sessionService.deleteSession();
  return {
    type: LOGOUT_SUCCESS,
  };
}
