import {LABEL_LIST} from './actionTypes';
import {TOGGLE} from './actionTypes';

const initialState = {labels_list: [], toggle: true};

export default function (state = initialState, action) {
  switch (action.type) {
    case LABEL_LIST: {
      return {...state, labels_list: action.payload};
    }
    case TOGGLE: {
      return {...state, toggle: !state.toggle};
    }
  }

  return state;
}
