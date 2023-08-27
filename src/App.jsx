import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import {
	Header,
	Courses,
	EmptyCourseList,
	Login,
	Registration,
	CourseInfo,
} from './components';
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
		<BrowserRouter>
			<div className={styles.app_wrapper}>
				<Header></Header>
				<div className={styles.app_container}>
					<Routes>
						<Route exact path='courses' element={courseList} />
						<Route path='courses/:id' element={<CourseInfo />} />

						<Route path='login' element={<Login />} />
						<Route path='registration' element={<Registration />} />
						<Route path='*' element={<Navigate to='registration' />} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
