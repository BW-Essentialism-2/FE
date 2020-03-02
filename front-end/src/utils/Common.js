// return user data from  session 
export const getUser = () => {
    const userStr = sessionStorage.getItem('user');
    if (userStr) return JSON.parse(userStr);
    else return null;
  }
  
  // return token from  session 
  export const getToken = () => {
    return sessionStorage.getItem('token') || null;
  }
  
  // remove  token and user from  session
  export const removeUserSession = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
  }
  
  // set token and user from  session 
  export const setUserSession = (token, user) => {
    sessionStorage.setItem('token', token);
    sessionStorage.setItem('user', JSON.stringify(user));
  }