import React from 'react';
import { Link } from 'react-router-dom';

import Logo from './components/Logo';
import { Button } from '../../common';

import styles from './Header.module.scss';

const Header = () => {
	return (
		<div className={styles.header}>
			<div className={styles.header_wrapper}>
				<Link to='#'>
					<Logo></Logo>
				</Link>
				<Button buttonText='Logout'></Button>
			</div>
		</div>
	);
};

export default Header;
