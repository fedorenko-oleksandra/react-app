import React from 'react';

import { Input, Button } from '../../common';

import styles from './Login.module.scss';
import { Link } from 'react-router-dom';

const Login = () => {
	return (
		<div>
			<h1 className={styles.registration_title}>Login</h1>
			<div className={styles.registration_wrapper}>
				<form className={styles.registration_form}>
					<label htmlFor='email'>Email</label>
					<Input placeholder='Email'></Input>

					<label htmlFor='password'>Password</label>
					<Input placeholder='Password'></Input>
				</form>
				<div className={styles.button}>
					<Button buttonText='Login'></Button>
				</div>

				<div className={styles.input_holder}>
					<span>If you don't have an account you may </span>

					<Link to='/registration'>
						<strong>Registration</strong>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Login;
