import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

import {
	Header,
	Courses,
	EmptyCourseList,
	Login,
	Registration,
	CourseInfo,
	CreateCourse,
} from './components';
import { getCoursesList } from './helpers/index';

import styles from './App.module.scss';

function App() {
	const courses = getCoursesList();
	const location = useLocation();

	const [isLogin, setIsLogin] = useState(false);
	const [userName, setUserName] = useState('');

	useEffect(() => {
		if (localStorage.getItem('token')) {
			setIsLogin(true);
			setUserName(localStorage.getItem('name'));
		} else {
			setIsLogin(false);
			setUserName('');
		}
	}, [location]);

	let courseList;
	if (courses.length > 0) {
		courseList = <Courses courses={courses}></Courses>;
	} else {
		courseList = <EmptyCourseList></EmptyCourseList>;
	}

	return (
		<div className={styles.app_wrapper}>
			<Header name={userName} isLogin={isLogin}></Header>
			<div className={styles.app_container}>
				<Routes>
					<Route exact path='courses' element={courseList} />
					<Route path='courses/:id' element={<CourseInfo />} />
					<Route path='courses/add' element={<CreateCourse />} />

					<Route path='login' element={<Login />} />
					<Route path='registration' element={<Registration />} />
					<Route path='*' element={<Navigate to='registration' />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
