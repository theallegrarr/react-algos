import { combineReducers } from 'redux';

import traverse from './traverse';

const rootReducer = combineReducers({
  traverse: traverse,
});

export default rootReducer;