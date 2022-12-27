import {LABEL_LIST} from './actionTypes';

export const labelList = labels => {
  return {
    type: LABEL_LIST,
    payload: labels,
  };
};
