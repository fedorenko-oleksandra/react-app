import React from 'react';

import { Button, Input } from '../../../../common';

import styles from './SearchBar.module.scss';

const SearchBar = (props) => {
	return (
		<div className={styles.search_bar}>
			<div className={styles.search_bar_wrapper}>
				<Input
					placeholder='Input text'
					inputValue={props.inputValue}
					handleChange={props.inputEvent}
				></Input>
				<Button buttonText='Search' onClick={props.buttonEvent}></Button>
			</div>
			<Button buttonText='Add new course'></Button>
		</div>
	);
};

export default SearchBar;
