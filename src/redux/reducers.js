import {LABEL_LIST, LATTITUDE, LONGITUDE} from './actionTypes';
import {TOGGLE} from './actionTypes';

const initialState = {
  labels_list: [],
  toggle: true,
  lattitude: '',
  longitude: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LABEL_LIST: {
      return {...state, labels_list: action.payload};
    }
    case LATTITUDE: {
      return {...state, lattitude: action.payload};
    }
    case LONGITUDE: {
      return {...state, longitude: action.payload};
    }
    case TOGGLE: {
      return {...state, toggle: !state.toggle};
    }
  }

  return state;
}
