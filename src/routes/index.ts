const routes = (path: string): string => {
  const to: object = {
    home: '/',
    login: '/login-screen',
    auth: '/auth',
    profile: '/profile'
  };

  return to[path];
};

export {routes};
