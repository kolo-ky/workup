import {format} from 'date-fns';

const fns = {
  dateFormat: `dd.MM.yyyy`,
  getNow: () => {
    return format(new Date(), fns.dateFormat);
  },
};

export {fns};
