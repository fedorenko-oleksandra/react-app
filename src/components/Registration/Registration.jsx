import React from 'react';

import { Input, Button } from '../../common';

import styles from './Registration.module.scss';
import { Link } from 'react-router-dom';

const Registration = () => {
	return (
		<div>
			<h1 className={styles.registration_title}>Registration</h1>
			<div className={styles.registration_wrapper}>
				<form className={styles.registration_form}>
					<label htmlFor='name'>Name</label>
					<Input placeholder='Name'></Input>

					<label htmlFor='email'>Email</label>
					<Input placeholder='Email'></Input>

					<label htmlFor='password'>Password</label>
					<Input placeholder='Password'></Input>
				</form>
				<div className={styles.button}>
					<Button buttonText='Registration'></Button>
				</div>

				<div className={styles.input_holder}>
					<span>If you have an account you may </span>

					<Link to='/login'>
						<strong>Login</strong>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Registration;
