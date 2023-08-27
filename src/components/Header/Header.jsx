import React from 'react';
import { Link } from 'react-router-dom';

import Logo from './components/Logo';
import { Button } from '../../common';

import styles from './Header.module.scss';

const Header = (props) => {
	function logOut() {
		localStorage.clear();
	}

	return (
		<div className={styles.header}>
			<div className={styles.header_wrapper}>
				<Link to='/'>
					<Logo></Logo>
				</Link>
				{props.isLogin ? (
					<div className={styles.user_wrapper}>
						<strong>{props.name}</strong>
						<Link to='/login'>
							<Button buttonText='Logout' onClick={() => logOut()}></Button>
						</Link>
					</div>
				) : null}
			</div>
		</div>
	);
};

export default Header;
