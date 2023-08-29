import React from 'react';

import { Button } from '../../../../common';

import styles from './AuthorItem.module.scss';

const AuthorItem = (props) => {
	return (
		<div className={styles.author}>
			<span className={styles.name}>{props.author}</span>

			<Button
				buttonText={props.buttonText}
				type={props.typeButton}
				onClick={props.buttonEvent}
			></Button>
		</div>
	);
};

export default AuthorItem;
