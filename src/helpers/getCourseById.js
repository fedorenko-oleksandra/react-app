import { getCourseDuration, formatCreationDate, getAuthorsList } from './index';
import { mockedCoursesList } from '../constants';

export const getCourseById = (id) => {
	const course = mockedCoursesList.find((course) => course.id === id);
	return {
		...course,
		duration: getCourseDuration(course.duration),
		creationDate: formatCreationDate(course.creationDate),
		authors: getAuthorsList(course.authors),
	};
};
