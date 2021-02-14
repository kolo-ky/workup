// components
import Backlog from "./backlog/backlog";
import Process from "./process/process";
import Done from "./done/done";
import Trash from "./trash/trash";

export default [
  {
    id: 0,
    component: Backlog,
    title: 'Бэклог'
  },
  {
    id: 1,
    component: Process,
    title: 'В процессе'
  },
  {
    id: 2,
    component: Done,
    title: 'Готово'
  },
  {
    id: 3,
    component: Trash,
    title: 'Корзина'
  }
];
