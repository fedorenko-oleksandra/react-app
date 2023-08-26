import React from 'react';

import styles from './Input.module.scss';

const Input = (props) => {
	return (
		<input
			type={props.type}
			name={props.name}
			className={styles.input}
			placeholder={props.placeholder}
			onChange={props.handleChange}
			value={props.inputValue}
		/>
	);
};

export default Input;
