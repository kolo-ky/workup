const routes = (path: string): string => {
  const to: object = {
    home: '/',
    login: '/login',
    auth: '/auth',
    profile: '/profile',
    registration: `/registration`
  };

  return to[path];
};

export {routes};
