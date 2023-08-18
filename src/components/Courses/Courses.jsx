import React, { useState } from 'react';

import CourseCard from './components/CourseCard/CourseCard';
import CourseInfo from '../CourseInfo/CourseInfo';

const Courses = (props) => {
	const [isInfoOpen, setIsInfoOpen] = useState(false);
	const [currentCourse, setCurrentCourse] = useState('');

	function toggleButtonClick(id) {
		setIsInfoOpen(!isInfoOpen);
		setCurrentCourse(id);
		console.log(currentCourse);
	}

	let listItems;

	if (isInfoOpen) {
		listItems = (
			<CourseInfo
				course={props.courses[0]}
				buttonEvent={toggleButtonClick}
			></CourseInfo>
		);
	} else {
		listItems = props.courses.map((course) => (
			<CourseCard
				key={course.id}
				course={course}
				buttonEvent={(e) => toggleButtonClick(e.target)}
			></CourseCard>
		));
	}
	return <ul>{listItems}</ul>;
};

export default Courses;
