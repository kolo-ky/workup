export const userStorage = {
  keys: {
    id: {
      name: `id`,
      defaultValue: 0
    },
    email: {
      name: `email`,
      defaultValue: ``
    }
  },
  putUser: (params) => {
    Object.keys(userStorage.keys).forEach((key) => {
      if (params[userStorage.keys[key].name]) {
        localStorage.setItem(userStorage.keys[key].name, params[userStorage.keys[key].name]);
      }
    });
  },
  getUser: () => {
    const user = {};

    Object.keys(userStorage.keys).forEach((key) => {
      let data = localStorage.getItem(userStorage.keys[key].name);

      if (data) {
        user[userStorage.keys[key].name] = data;
      } else {
        user[userStorage.keys[key].name] = userStorage.keys[key].defaultValue;
      }
    });

    return user;
  },
  removeUser: () => {
    Object.keys(userStorage.keys).forEach((key) => {
      localStorage.removeItem(userStorage.keys[key].name);
    });
  },
  getUserItem: (key) => {
    return localStorage.getItem(userStorage.keys[key].name);
  }
};
