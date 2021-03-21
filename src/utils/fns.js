import {isThisWeek, isThisMonth, parseISO, format} from 'date-fns';

const fns = {
  dateFormat: `yyyy-MM-dd`,
  getNow: () => {
    return format(new Date(), fns.dateFormat);
  },
  isMonth: (date) => {
    return isThisMonth(parseISO(date));
  }
};

export {fns};
