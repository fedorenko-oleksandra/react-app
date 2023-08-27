import React from 'react';
import { Link } from 'react-router-dom';

import Logo from './components/Logo';
import { Button } from '../../common';

import styles from './Header.module.scss';

const Header = () => {
	function logOut() {
		localStorage.removeItem('token');
	}

	return (
		<div className={styles.header}>
			<div className={styles.header_wrapper}>
				<Link to='#'>
					<Logo></Logo>
				</Link>
				<Link to='/login'>
					<Button buttonText='Logout' buttonEvent={() => logOut()}></Button>
				</Link>
			</div>
		</div>
	);
};

export default Header;
