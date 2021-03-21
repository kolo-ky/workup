export const groupBy = (key) => {
  return function group(array) {
    return array.reduce((acc, obj) => {
      const property = obj[key];
      acc[property] = acc[property] || [];
      if (property) {
        acc[property].push(obj);
      }
      return acc;
    }, {});
  };
};
