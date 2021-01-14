import { INITIAL_REQUEST_HOME_START, INITIAL_REQUEST_HOME_SUCCESS } from "./constants";

export const initialRequestHomeStart = (payload) => ({
  type: INITIAL_REQUEST_HOME_START,
  payload,
});
export const initialRequestHomeSuccess = (payload) => ({
  type: INITIAL_REQUEST_HOME_SUCCESS,
  payload,
});
