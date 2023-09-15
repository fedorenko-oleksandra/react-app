import * as types from './types.js';

export const coursesInitialState = [];

export const coursesReducer = (state = coursesInitialState, action) => {
	switch (action.type) {
		// in this case we need to return
		case types.SAVE_COURSES:
			return action.payload;

		case types.ADD_COURSE:
			return [...state, action.payload];

		case types.DELETE_COURSE:
			return [...state.filter((course) => course.id !== action.payload.id)];

		default:
			return state;
	}
};
