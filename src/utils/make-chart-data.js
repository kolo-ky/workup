import {BoardAt} from "../components/boards/boards";
import {groupBy} from "./group";

export const makeChartData = (tasks) => {
  let dataAt = new Map();
  let dateAt = [];
  let chart = [];

  tasks.forEach((task) => {
    BoardAt.forEach((status) => {
      if (!!task[status]) {
        if (!dateAt.includes(task[status])) {
          dateAt.push(task[status]);
        }
      }
    });
  });

  BoardAt.forEach((status) => {
    dataAt.set(status, groupBy(status)(tasks));
  });

  dateAt.reverse().forEach((date) => {
    let dataObj = {
      name: date.slice(5),
      createdAt: 0,
      processAt: 0,
      doneAt: 0
    };
    dataAt.forEach((data, key) => {
      dataObj[key] = data[date] ? data[date].length : 0;
    });
    chart.push(dataObj);
  });

  return chart;
};
