import React from 'react';

import styles from './Input.module.scss';

const Input = (props) => {
	return (
		<div>
			<label htmlFor={props.name}>{props.labelText}</label>
			<input
				type={props.type}
				name={props.name}
				id={props.name}
				className={styles.input}
				placeholder={props.placeholder}
				onChange={props.handleChange}
				value={props.inputValue}
			/>
		</div>
	);
};

export default Input;
