import * as type from '../types';

const initialState = {
    visited: [],
    current: null,
    children: [],
    found: false,
    steps: 0,
}

export default function traverse(state = initialState, action) {
    switch (action.type) {
      case type.NEXT_SUCCESS:
        return {
            ...state,
            visited: action.payload.visited,
            current: action.payload.current,
            children: action.payload.children,
            found: action.payload.found,
            steps: state.steps + 1,
        }
      default:
        return state
    }
  }