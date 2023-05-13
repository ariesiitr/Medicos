export const Authenticate = (name, id, authToken) => {
    if (typeof window === 'undefined') return null;
  
    localStorage.setItem('name', name);
    localStorage.setItem('id', id);
    localStorage.setItem('authToken', authToken);
  };

  export const isAuthenticated = () => {
    if (typeof window === 'undefined') return false;
    const token = localStorage.getItem('authToken');
    return token ? true : false;
  };