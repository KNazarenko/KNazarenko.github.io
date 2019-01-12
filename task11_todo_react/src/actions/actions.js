import { OPEN_FORM, CLOSE_FORM, GET_TASKS } from './type';

// New task form open action
export function openForm() {
  console.log('open form');
  return {
    type: OPEN_FORM,
    payload: false
  };
}

// New task form close action
export function closeForm() {
  console.log('close form');
  return {
    type: CLOSE_FORM,
    payload: true
  };
}

export function getTasks() {
  console.log('get tasks');
  return {
    type: GET_TASKS
  };
}
