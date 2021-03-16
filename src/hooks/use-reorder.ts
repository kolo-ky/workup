import {addSnapshotAction, moveTaskAction, reorderTaskAction} from "../store/actions/tasks";
import {fetchSnapshot} from "../store/async-actions/tasks";
import {useDispatch} from "react-redux";

export const useReorder = () => {
  const dispatch = useDispatch();

  function withLocalState (newTask, callback = undefined) {
    dispatch(moveTaskAction(newTask));
    dispatch(reorderTaskAction(newTask));

    if (callback) {
      callback();
    }
  }

  function sendSnapShot (tasks, newTask) {
    dispatch(addSnapshotAction(JSON.parse(JSON.stringify([...tasks, newTask]))));
    dispatch(fetchSnapshot());
  }

  return {
    withLocalState,
    sendSnapShot
  }
};
