import { combineReducers } from 'redux';
import { memoryData } from '../Memories/memory-data.js';
import { userData } from '../Users/user-data.js';

const memoriesReducer = (state, action) => {
  // action(s) will go here to modify memoryData state
  return memoryData;
};

const usersReducer = (state, action) => {
  // action(s) will go here to modify userData state
  return userData;
};

// The App's state
const rootReducer = combineReducers({
  memoriesList: memoriesReducer,
  usersList: usersReducer,
});

export default rootReducer;