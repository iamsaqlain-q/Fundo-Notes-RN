import {LABEL_LIST, LONGITUDE, TOGGLE, LATTITUDE} from './actionTypes';

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

export const setLattitude = lattitude => {
  return {
    type: LATTITUDE,
    payload: lattitude,
  };
};

export const setLongitude = longitude => {
  return {
    type: LONGITUDE,
    payload: longitude,
  };
};
