import { mockedAuthorsList } from '../constants';

export const getAuthorsList = (value) => {
	if (typeof value === 'string') {
		return mockedAuthorsList.find((item) => item.id === value).name;
	} else {
		return mockedAuthorsList.find((item) => item.id === value).name;
	}
};
