import { SHOW_APPLICATION, HIDE_APPLICATION } from '../actions';

const initialState = {
  showApplication: false
};

const ui = (state = initialState, action) => {
  switch(action.type) {
    case SHOW_APPLICATION:
      return {
        ...state,
        showApplication: true
      };
    case HIDE_APPLICATION:
      return {
        ...state,
        showApplication: false
      };
    default:
      return state;
  }
};

export default ui;
