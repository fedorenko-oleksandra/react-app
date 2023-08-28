import React from 'react';

import Button from '../../common/Button/Button';

import styles from './EmptyCourseList.module.scss';

const EmptyCourseList = () => {
	const title = 'Your list is empty';
	const message = 'Please use ’Add New Course’ button to add your first course';

	return (
		<div className={styles.empty_list_wrapper}>
			<h1 className={styles.title}>{title}</h1>
			<p className={styles.message}>{message}</p>
			<Button buttonText='Add new course'></Button>
		</div>
	);
};

export default EmptyCourseList;
