import { combineReducers } from 'redux';
import { memoryData } from '../Memories/memory-data.js';
import { userData } from '../Users/user-data.js';

// let appState = { memoriesList: memoryData, usersList: userData };

const memoriesReducer = (state, action) => {
  return memoryData;
};

const usersReducer = (state, action) => {
  return userData;
};

const rootReducer = combineReducers({
  memoriesList: memoriesReducer,
  usersList: usersReducer,
});

export default rootReducer;