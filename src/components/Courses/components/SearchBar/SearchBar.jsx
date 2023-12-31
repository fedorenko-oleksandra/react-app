import React from 'react';

import { Button, Input } from '../../../../common';

import styles from './SearchBar.module.scss';

const SearchBar = (props) => {
	return (
		<div className={styles.search_bar_wrapper}>
			<Input
				name='search'
				type='search'
				placeholder='Input text'
				inputValue={props.inputValue}
				handleChange={props.inputEvent}
			></Input>
			<Button buttonText='Search' onClick={props.buttonEvent}></Button>
		</div>
	);
};

export default SearchBar;
