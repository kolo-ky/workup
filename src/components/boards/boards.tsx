// components
import {Backlog} from "./backlog";
import {Process} from "./process";
import {Done} from "./done";
import {Trash} from "./trash";

export default [
  {
    id: 0,
    component: Backlog,
    title: `Бэклог`
  },
  {
    id: 1,
    component: Process,
    title: `В процессе`
  },
  {
    id: 2,
    component: Done,
    title: `Готово`
  },
  {
    id: 3,
    component: Trash,
    title: `Корзина`
  }
];
