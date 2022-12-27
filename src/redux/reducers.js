import {LABEL_LIST} from './actionTypes';

const initialState = {labels_list: []};

export default function (state = initialState, action) {
  switch (action.type) {
    case LABEL_LIST: {
      return {...state, labels_list: action.payload};
    }
  }

  return state;
}
