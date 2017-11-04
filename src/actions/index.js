import { sessionService } from 'redux-react-session';

export const SHOW_APPLICATION = "SHOW_APPLICATION";
export const showApplication = () => {
  return {
    type: SHOW_APPLICATION
  };
}

export const HIDE_APPLICATION = "HIDE_APPLICATION";
export const hideApplication = () => {
  return {
    type: HIDE_APPLICATION
  };
}

export const SUBMIT_APPLICATION = "SUBMIT_APPLICATION";
export const submitApplication = (data) => {
  sessionService.saveUser(data.email);
  return {
    type: SUBMIT_APPLICATION,
    data: data
  };
}
