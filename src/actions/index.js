import firebase from 'firebase';
import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS } from './types';
//action creator file!
export const emailChanged = text => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};
export const passwordChanged = text => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};
//the function action creator is returning
export const loginUser = ({ email, password }) => {
  return dispatch => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
      });
  };
};
