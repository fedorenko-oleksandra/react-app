import React from 'react';

import Logo from './components/Logo';
import Button from '../../common/Button/Button';

import styles from './Header.module.scss';

const Header = () => {
	return (
		<div className={styles.header}>
			<div className={styles.header_wrapper}>
				<a>
					<Logo></Logo>
				</a>
				<Button buttonText='Login'></Button>
			</div>
		</div>
	);
};

export default Header;
