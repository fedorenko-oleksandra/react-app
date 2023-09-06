import API from './helpers/services';

export const getCourses = () => {
	return API.get('/courses/all');
};

export const getCourse = async (id) => {
	return await API.get(`/courses/${id}`);
};

export const addCourse = async () => {
	return await API.get('courses/add');
};

export const deleteCourse = async () => {
	return await API.get('/courses/all');
};

export const getAuthors = async () => {
	return await API.get('/authors/all');
};
