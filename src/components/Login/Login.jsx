import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { Input, Button } from '../../common';

import styles from './Login.module.scss';

const Login = () => {
	const [inputs, setInputs] = useState({
		email: '',
		password: '',
	});

	const [errors, setErrors] = useState({
		email: '',
		password: '',
	});

	const navigate = useNavigate();

	const inputChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setInputs((values) => ({ ...values, [name]: value }));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		if (handleValidation()) {
			uploadMultiple(inputs);
		}
	};

	const handleValidation = () => {
		let formIsValid = true;
		let errors = {};

		if (inputs.name === '') {
			errors.name = 'Name is required.';
			formIsValid = false;
		}
		if (inputs.email === '') {
			errors.email = 'Email is required.';
			formIsValid = false;
		}
		if (inputs.password === '') {
			errors.password = 'Password is required.';
			formIsValid = false;
		}
		setErrors(errors);
		return formIsValid;
	};

	const uploadMultiple = async (formValues) => {
		const response = await fetch('http://localhost:4000/login', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(formValues),
		});
		const result = await response.json();

		if (result.successful === true) {
			navigate('/courses');
		} else {
			alert(result.errors);
		}
	};

	return (
		<div>
			<h1 className={styles.login_title}>Login</h1>
			<div className={styles.login_wrapper}>
				<form className={styles.login_form} onSubmit={handleSubmit}>
					<div className={styles.input_holder}>
						<label htmlFor='email'>Email</label>
						<Input
							type='text'
							name='email'
							placeholder='Email'
							inputValue={inputs.email}
							handleChange={inputChange}
						></Input>
						<span className={styles.error}>{errors.email}</span>
					</div>

					<div className={styles.input_holder}>
						<label htmlFor='password'>Password</label>
						<Input
							type='text'
							name='password'
							placeholder='Password'
							inputValue={inputs.password}
							handleChange={inputChange}
						></Input>
						<span className={styles.error}>{errors.password}</span>
					</div>

					<div className={styles.button}>
						<Button buttonText='Login' type='submit'></Button>
					</div>
				</form>

				<div className={styles.link_holder}>
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
