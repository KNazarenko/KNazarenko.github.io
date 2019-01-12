import { GET_TASKS } from './../actions/type';

const initialState = {
  items: [
    {
      ID: 1,
      name: 'Task01',
      project: 'Project1',
      priority: 2,
      description: 'to make some coffee'
    },
    {
      ID: 2,
      name: 'Task02',
      project: 'Project1',
      priority: 3,
      description: 'to go for a walk'
    },
    {
      ID: 3,
      name: 'Task03',
      project: 'Project2',
      priority: 1,
      description: 'to buy a car'
    }
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_TASKS:
      return {
        ...state
      };
    default:
      return state;
  }
}
