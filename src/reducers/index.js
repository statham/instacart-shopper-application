import { combineReducers } from 'redux';
import { sessionReducer } from 'redux-react-session';
import ui from './ui';

const rootReducer = combineReducers({
  session: sessionReducer,
  ui
});

export default rootReducer;
