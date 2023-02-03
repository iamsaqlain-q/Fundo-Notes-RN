import {LABEL_LIST} from './actionTypes';
import {TOGGLE} from './actionTypes';

export const labelList = labels => {
  return {
    type: LABEL_LIST,
    payload: labels,
  };
};

export const toggleLang = toggle => {
  return {
    type: TOGGLE,
    payload: toggle,
  };
};
