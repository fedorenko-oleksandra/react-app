import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

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
import { getCourses } from './services';

import styles from './App.module.scss';

function App() {
	// let courses;
	// API.get('/courses/all').then((res) => {
	// 	console.log(res);
	// 	courses = res.data.result;
	// 	console.log(courses);
	// });
	// return courses;
	let courses = [];
	getCourses().then((res) => {
		courses = getCoursesList(res.data.result);
		console.log(courses);
	});
	const location = useLocation();
	const dispatch = useDispatch();

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
					<Route
						path='*'
						element={
							localStorage.getItem('token') ? (
								<Navigate to='courses' />
							) : (
								<Navigate to='registration' />
							)
						}
					/>
				</Routes>
			</div>
		</div>
	);
}

export default App;
