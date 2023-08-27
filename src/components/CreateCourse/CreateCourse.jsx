import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Button, Input } from '../../common';

import styles from './CreateCourse.module.scss';

const CreateCourse = () => {
	const title = 'Course Edit/Create page';
	const [inputs, setInputs] = useState({
		title: '',
		description: '',
		duration: '',
		author: '',
	});
	const [errors, setErrors] = useState({
		title: '',
		description: '',
		duration: '',
		author: '',
	});

	const inputChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setInputs((values) => ({ ...values, [name]: value }));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		if (handleValidation()) {
			console.logs(inputs);
		}
	};

	const handleValidation = () => {
		let formIsValid = true;
		let errors = {};

		if (inputs.title === '') {
			errors.title = 'Title is required.';
			formIsValid = false;
		}
		if (inputs.description === '') {
			errors.description = 'Description is required.';
			formIsValid = false;
		}
		setErrors(errors);
		return formIsValid;
	};

	return (
		<div>
			<h1 className={styles.title}>{title}</h1>
			<div className={styles.card_border}>
				<form className={styles.creation_form} onSubmit={handleSubmit}>
					<h3 className={styles.creation_subtitle}>Main Info</h3>
					<div className={styles.input_holder}>
						<Input
							labelText='Title'
							id='title'
							type='text'
							name='title'
							placeholder='Title'
							inputValue={inputs.title}
							className={styles.input_error}
							handleChange={inputChange}
						></Input>
						<span className={styles.error}>{errors.title}</span>
					</div>
					<div className={styles.input_holder}>
						<label htmlFor='description'>Description</label>
						<textarea
							rows='10'
							type='text'
							name='description'
							placeholder='Description'
							value={inputs.description}
							className={styles.input_error}
							onChange={inputChange}
						></textarea>
						<span className={styles.error}>{errors.description}</span>
					</div>
					<h3 className={styles.creation_subtitle}>Duration</h3>
					<div className={styles.duration_holder}>
						<div className={styles.input_holder}>
							<Input
								labelText='Duration'
								id='duration'
								type='text'
								name='duration'
								placeholder='duration'
								inputValue={inputs.duration}
								className={styles.input_error}
								handleChange={inputChange}
							></Input>
							<span className={styles.error}>{errors.duration}</span>
						</div>
						<strong>lalala</strong>
					</div>
					<div>
						<div>
							<h3 className={styles.creation_subtitle}>Authors</h3>
							<div>
								<Input
									labelText='Author name'
									id='author'
									type='text'
									name='author'
									placeholder='author'
									inputValue={inputs.author}
									className={styles.input_error}
									handleChange={inputChange}
								></Input>
								<Button buttonText='Create Author'></Button>
							</div>
						</div>
						<div>
							<h3 className={styles.creation_subtitle}>Course Authors</h3>
						</div>
					</div>
					<h4 className={styles.creation_subtitle}>Authors List</h4>
				</form>
				{/* <div className={styles.course_info}>
					<p className={styles.content_left}>{course.description}</p>

					<div className={styles.content_right}>
						<ul className={styles.info_wrapper}>
							<li>
								<strong>ID: </strong>
								<span>{id}</span>
							</li>
							<li>
								<strong>Duration: </strong>
								{course.duration}
							</li>
							<li>
								<strong>Created: </strong>
								{course.creationDate}
							</li>
							<li className={styles.word_wrap}>
								<strong>Authors: </strong>
								<span>{course.authors}</span>
							</li>
						</ul>
					</div>
				</div> */}
			</div>
			<div className={styles.button_holder}>
				<Link to='/courses'>
					<Button buttonText='Cancel'></Button>
				</Link>
				<Link to='/courses'>
					<Button buttonText='Create Course'></Button>
				</Link>
			</div>
		</div>
	);
};

export default CreateCourse;
