import React, { useState } from 'react';

import CourseCard from './components/CourseCard/CourseCard';
import CourseInfo from '../CourseInfo/CourseInfo';

const Courses = (props) => {
	const [isInfoOpen, setIsInfoOpen] = useState(false);
	const [currentCourse, setCurrentCourse] = useState({});

	function toggleButtonClick(id) {
		setIsInfoOpen(!isInfoOpen);
		if (id) {
			setCurrentCourse(props.courses.find((course) => course.id === id) ?? {});
		}
	}

	let listItems;

	if (isInfoOpen) {
		listItems = (
			<CourseInfo
				course={currentCourse}
				buttonEvent={() => toggleButtonClick()}
			></CourseInfo>
		);
	} else {
		listItems = props.courses.map((course) => (
			<CourseCard
				key={course.id}
				course={course}
				buttonEvent={() => toggleButtonClick(course.id)}
			></CourseCard>
		));
	}
	return <ul>{listItems}</ul>;
};

export default Courses;
