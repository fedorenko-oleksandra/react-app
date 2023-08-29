import { mockedAuthorsList } from '../constants';

export const getAuthorsList = (value) => {
	return value
		.map((author) => mockedAuthorsList.find((item) => item.id === author).name)
		.join(', ');
};
