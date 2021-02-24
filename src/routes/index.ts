const routes = (path: string): string => {
  const to: object = {
    home: '/',
    login: '/login',
    auth: '/auth',
    profile: '/profile'
  };

  return to[path];
};

export {routes};
