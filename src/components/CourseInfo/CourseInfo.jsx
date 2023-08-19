import React from 'react';

import Button from '../../common/Button/Button';

import styles from './CourseInfo.module.scss';

const CourseInfo = (props) => {
	const { id, title, description, authors, duration, creationDate } =
		props.course;

	return (
		<div>
			<h1 className={styles.title}>{title}</h1>
			<div className={styles.card_border}>
				<h3>Description:</h3>
				<div className={styles.course_info}>
					<p className={styles.content_left}>{description}</p>

					<div className={styles.content_right}>
						<ul className={styles.info_wrapper}>
							<li>
								<strong>ID: </strong>
								<span>{id}</span>
							</li>
							<li>
								<strong>Duration: </strong>
								{duration}
							</li>
							<li>
								<strong>Created: </strong>
								{creationDate}
							</li>
							<li className={styles.word_wrap}>
								<strong>Authors: </strong>
								<span>{authors}</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className={styles.button_holder}>
				<Button buttonText='Back' onClick={props.buttonEvent}></Button>
			</div>
		</div>
	);
};

export default CourseInfo;
