import { getCourseDuration, formatCreationDate, getAuthorsList } from './index';
import { mockedCoursesList } from '../constants';

export const getCoursesList = () => {
	return mockedCoursesList.map((course) => {
		return {
			...course,
			duration: getCourseDuration(course.duration),
			creationDate: formatCreationDate(course.creationDate),
			authors: getAuthorsList(course.authors),
		};
	});
};
