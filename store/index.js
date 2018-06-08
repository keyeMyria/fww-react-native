import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import users from './users';
import plans from './plans';

const reducer = combineReducers({
  //auth,
  users,
  plans,
  // places,
  // groups,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk)
)

export default store
