import React, { useState } from 'react';

import CourseCard from './components/CourseCard/CourseCard';
import CourseInfo from '../CourseInfo/CourseInfo';
import SearchBar from './components/SearchBar/SearchBar';

const Courses = (props) => {
	const { courses } = props;

	const [isInfoOpen, setIsInfoOpen] = useState(false);
	const [inputValue, setInputValue] = useState('');

	const [currentCourse, setCurrentCourse] = useState({});
	const [coursesList, setCoursesList] = useState([]);
	const [searchParam] = useState(['id', 'title']);

	function toggleButtonClick(id) {
		setIsInfoOpen(!isInfoOpen);
		if (id) {
			setCurrentCourse(courses.find((course) => course.id === id) ?? {});
		}
	}

	function handleInputChange(e) {
		setInputValue(e.target.value);
		const filteredCourses = courses.find((course) =>
			searchParam.some((searchItem) =>
				course[searchItem].toLowerCase().includes(inputValue.toLowerCase())
			)
		);
		setCoursesList(filteredCourses);
		console.log(coursesList);
	}

	// let listItems;

	// if (isInfoOpen) {
	// 	listItems = (
	// 		<CourseInfo
	// 			course={currentCourse}
	// 			buttonEvent={() => toggleButtonClick()}
	// 		></CourseInfo>
	// 	);
	// } else {
	// 	listItems = courses.map((course) => (
	// 		<CourseCard
	// 			key={course.id}
	// 			course={course}
	// 			buttonEvent={() => toggleButtonClick(course.id)}
	// 		></CourseCard>
	// 	));
	// }
	return (
		<ul>
			<SearchBar
				inputEvent={handleInputChange}
				inputValue={inputValue}
			></SearchBar>
			{isInfoOpen ? (
				<CourseInfo
					course={currentCourse}
					buttonEvent={() => toggleButtonClick()}
				></CourseInfo>
			) : (
				courses.map((course) => (
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
