import { getCourseDuration, formatCreationDate, getAuthorsList } from './index';

export const getCoursesList = (courses) => {
	return courses.map((course) => {
		return {
			...course,
			duration: getCourseDuration(course.duration),
			creationDate: formatCreationDate(course.creationDate),
			authors: course.authors,
		};
	});
};
