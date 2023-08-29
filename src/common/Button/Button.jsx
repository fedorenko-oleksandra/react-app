import React from 'react';
import styles from './Button.module.scss';

const Button = (props) => {
	return (
		<button className={styles.button} onClick={props.onClick} type={props.type}>
			{props.buttonText}
		</button>
	);
};

export default Button;
