import { OPEN_FORM, CLOSE_FORM } from './../actions/type';

const initialState = { closeNewTaskForm: true, someState: 'Hello' };

export default function(state = initialState, action) {
  switch (action.type) {
    case OPEN_FORM:
      console.log(77);
      return { ...state, closeNewTaskForm: action.payload };
    case CLOSE_FORM:
      return { ...state, closeNewTaskForm: action.payload };
    default:
      return state;
  }
}
