import { mockedAuthorsList } from '../mockedCoursesList';

export const getAuthorsList = (value) => {
	return value
		.map((author) => mockedAuthorsList.find((item) => item.id === author).name)
		.join(', ');
};
