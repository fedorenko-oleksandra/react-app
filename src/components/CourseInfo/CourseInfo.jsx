import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getCourseById } from '../../helpers/getCourseById';

import { Button } from '../../common';

import styles from './CourseInfo.module.scss';

const CourseInfo = () => {
	const { id } = useParams();

	const [course, setCourse] = useState({});

	useEffect(() => {
		setCourse(getCourseById(id));
	}, [id]);

	return (
		<div>
			<h1 className={styles.title}>{course.title}</h1>
			<div className={styles.card_border}>
				<h3>Description:</h3>
				<div className={styles.course_info}>
					<p className={styles.content_left}>{course.description}</p>

					<div className={styles.content_right}>
						<ul className={styles.info_wrapper}>
							<li>
								<strong>ID: </strong>
								<span>{id}</span>
							</li>
							<li>
								<strong>Duration: </strong>
								{course.duration}
							</li>
							<li>
								<strong>Created: </strong>
								{course.creationDate}
							</li>
							<li className={styles.word_wrap}>
								<strong>Authors: </strong>
								<span>{course.authors}</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className={styles.button_holder}>
				<Link to='/courses'>
					<Button buttonText='Back'></Button>
				</Link>
			</div>
		</div>
	);
};

export default CourseInfo;
