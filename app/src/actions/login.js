export const socialLoginSuccess = (provider, userData) => {
  console.log(provider +", "+ userData.profile.email);
  return {
    type: "SOCIAL_LOGIN_SUCCESS",
    provider: provider,
    user: userData,
  };
}

export const logout = () => {
  console.log("Successfully logged out!");
  return {
    type: "LOGOUT_SUCCESS",
  };
}
