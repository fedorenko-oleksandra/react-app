import React from 'react';

import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import EmptyCourseList from './components/EmptyCourseList/EmptyCourseList';
import { getCoursesList } from './helpers/index';

import styles from './App.module.scss';

function App() {
	const courses = getCoursesList();

	let courseList;
	if (courses.length > 0) {
		courseList = <Courses courses={courses}></Courses>;
	} else {
		courseList = <EmptyCourseList></EmptyCourseList>;
	}

	return (
		<div className={styles.app_wrapper}>
			<Header></Header>
			<div className={styles.app_container}>{courseList}</div>
		</div>
	);
}

export default App;
