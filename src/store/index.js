import { createStore } from 'redux';
//configureStore method of the @reduxjs/toolkit

import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';
import { coursesInitialState } from './courses/reducer.js';

const appInitialState = {
	courses: coursesInitialState,
};
const store = createStore(rootReducer, appInitialState, composeWithDevTools());

export default store;
