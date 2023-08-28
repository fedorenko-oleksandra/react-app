import React, { useState } from 'react';

import CourseCard from './components/CourseCard/CourseCard';
import CourseInfo from '../CourseInfo/CourseInfo';
import SearchBar from './components/SearchBar/SearchBar';

const Courses = (props) => {
	const { courses } = props;

	const [isInfoOpen, setIsInfoOpen] = useState(false);
	const [inputValue, setInputValue] = useState('');

	const [currentCourse, setCurrentCourse] = useState({});
	const [coursesList, setCoursesList] = useState(courses);
	const [searchParam] = useState(['id', 'title']);

	function toggleButtonClick(id) {
		setIsInfoOpen(!isInfoOpen);
		if (id) {
			setCurrentCourse(courses.find((course) => course.id === id) ?? {});
		}
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
			{isInfoOpen ? null : (
				<SearchBar
					inputEvent={handleInputChange}
					buttonEvent={handleButtonSearchClick}
					inputValue={inputValue}
				></SearchBar>
			)}

			{isInfoOpen ? (
				<CourseInfo
					course={currentCourse}
					buttonEvent={() => toggleButtonClick()}
				></CourseInfo>
			) : (
				coursesList.map((course) => (
					<CourseCard
						key={course.id}
						course={course}
						buttonEvent={() => toggleButtonClick(course.id)}
					></CourseCard>
				))
			)}
		</ul>
	);
};

export default Courses;
