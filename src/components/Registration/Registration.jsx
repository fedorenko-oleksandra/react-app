import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import API from '../../helpers/services';

import { Input, Button } from '../../common';

import styles from './Registration.module.scss';

const Registration = (props) => {
	const [inputs, setInputs] = useState({
		name: '',
		email: '',
		password: '',
	});
	const [errors, setErrors] = useState({
		name: '',
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
		const response = await API.post('/login', JSON.stringify(formValues));

		const { data } = response;

		if (data.successful === true) {
			navigate('/login');
		} else {
			let errors = {};
			data.errors.forEach((error) => {
				if (error.includes('name')) {
					errors.name = error;
				}
				if (error.includes('email')) {
					errors.email = error;
				}
				if (error.includes('password')) {
					errors.password = error;
				}
			});

			setErrors(errors);
		}
	};

	return (
		<div>
			<h1 className={styles.registration_title}>Registration</h1>
			<div className={styles.registration_wrapper}>
				<form className={styles.registration_form} onSubmit={handleSubmit}>
					<div className={styles.input_holder}>
						<Input
							type='text'
							name='name'
							id='name'
							placeholder='Name'
							labelText='Name'
							inputValue={inputs.name}
							className={styles.input_error}
							handleChange={inputChange}
						></Input>
						<span className={styles.error}>{errors.name}</span>
					</div>

					<div className={styles.input_holder}>
						<Input
							labelText='Email'
							id='email'
							type='text'
							name='email'
							placeholder='Email'
							inputValue={inputs.email}
							handleChange={inputChange}
						></Input>
						<span className={styles.error}>{errors.email}</span>
					</div>

					<div className={styles.input_holder}>
						<Input
							labelText='Password'
							id='password'
							type='text'
							name='password'
							placeholder='Password'
							inputValue={inputs.password}
							handleChange={inputChange}
						></Input>
						<span className={styles.error}>{errors.password}</span>
					</div>

					<div className={styles.button}>
						<Button buttonText='Registration' type='submit'></Button>
					</div>
				</form>

				<div className={styles.link_holder}>
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
