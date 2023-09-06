import React from 'react';

import styles from './CourseCard.module.scss';

import { Button } from '../../../../common';

const CourseCard = (props) => {
	const { title, description, authors, duration, creationDate } = props.course;

	return (
		<div className={styles.card_border}>
			<h1 className={styles.title}>{title}</h1>
			<div className={styles.course_card}>
				<p className={styles.content_left}>{description}</p>
				<div className={styles.content_right}>
					<ul className={styles.info_wrapper}>
						<li className={styles.word_wrap}>
							{/* <strong>Authors: </strong>
							<span>{authors}</span> */}
						</li>
						<li>
							<strong>Duration: </strong>
							{duration}
						</li>
						<li>
							<strong>Created: </strong>
							{creationDate}
						</li>
					</ul>
					<Button buttonText='Show Course' onClick={props.buttonEvent}></Button>
				</div>
			</div>
		</div>
	);
};

export default CourseCard;
