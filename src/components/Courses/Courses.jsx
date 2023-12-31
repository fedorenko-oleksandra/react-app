import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';
import { Button } from '../../common';

import styles from './Courses.module.scss';

const Courses = (props) => {
	const { courses } = props;

	const [inputValue, setInputValue] = useState('');
	const [coursesList, setCoursesList] = useState(courses);
	const [searchParam] = useState(['id', 'title']);

	const navigate = useNavigate();

	function toggleButtonClick(id) {
		navigate(`/courses/${id}`);
	}

	function handleInputChange(e) {
		setInputValue(e.target.value);

		handleButtonSearchClick();

		if (e.target.value === '') {
			setCoursesList(courses);
		}
	}

	function handleButtonSearchClick() {
		const filteredCourses = courses.filter((course) =>
			searchParam.some((searchItem) =>
				course[searchItem].toLowerCase().includes(inputValue.toLowerCase())
			)
		);

		setCoursesList(filteredCourses);
	}

	return (
		<ul>
			<div className={styles.search_bar}>
				<SearchBar
					inputEvent={handleInputChange}
					buttonEvent={handleButtonSearchClick}
					inputValue={inputValue}
				></SearchBar>
				<Link to='/courses/add'>
					<Button buttonText='Add new course'></Button>
				</Link>
			</div>

			{coursesList.map((course) => (
				<CourseCard
					key={course.id}
					course={course}
					buttonEvent={() => toggleButtonClick(course.id)}
				></CourseCard>
			))}
		</ul>
	);
};

export default Courses;
