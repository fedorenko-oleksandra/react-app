import React, { useState, useId } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Button, Input } from '../../common';
import { getCourseDuration } from '../../helpers';
import AuthorItem from './components/AuthorItem/AuthorItem';
import { mockedAuthorsList, mockedCoursesList } from '../../constants';

import styles from './CreateCourse.module.scss';

const CreateCourse = () => {
	const title = 'Course Edit/Create page';
	const minLength = 3;
	const navigate = useNavigate();
	const id = useId();

	const [inputs, setInputs] = useState({
		title: '',
		description: '',
		duration: '',
		authors: [],
	});
	const [author, setAuthor] = useState({
		id: '',
		name: '',
	});
	const [listAuthors, setListAuthors] = useState(mockedAuthorsList);
	const [selectedAuthors, setSelectedAuthors] = useState([]);
	const [errors, setErrors] = useState({
		title: '',
		description: '',
		duration: '',
		authors: '',
		author: '',
	});

	const inputChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setInputs((values) => ({ ...values, [name]: value }));
	};

	const authorInputChange = (event) => {
		const value = event.target.value;
		setAuthor({ id: value, name: value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		if (handleValidation()) {
			mockedCoursesList.push({
				...inputs,
				id,
				creationDate: new Date().toDateString(),
			});
			navigate(`/courses`);
		}
	};

	const handleValidation = () => {
		let formIsValid = true;
		let errors = {};

		if (inputs.title === '' || inputs.title.length < minLength) {
			errors.title = 'Title is required.';
			formIsValid = false;
		}
		if (inputs.description === '' || inputs.description.length < minLength) {
			errors.description = 'Description is required.';
			formIsValid = false;
		}
		if (inputs.duration === '') {
			errors.duration = 'Duration is required.';
			formIsValid = false;
		}
		if (inputs.authors.length < 1) {
			errors.authors = 'Authors is required.';
			formIsValid = false;
		}
		setErrors(errors);
		return formIsValid;
	};

	const deleteAuthor = (id) => {
		const deletedAuthor = inputs.authors.find((author) => author.id === id);
		setListAuthors([...listAuthors, deletedAuthor]);
		setSelectedAuthors(selectedAuthors.filter((author) => author.id !== id));
		setInputs({
			...inputs,
			authors: inputs.authors.filter((authorId) => authorId !== id),
		});
	};

	const addAuthor = (id) => {
		const selectedAuthor = listAuthors.find((author) => author.id === id);
		setListAuthors(listAuthors.filter((author) => author.id !== id));
		setSelectedAuthors([...selectedAuthors, selectedAuthor]);
		setInputs({ ...inputs, authors: [...inputs.authors, selectedAuthor.id] });
	};

	const createAuthor = (id) => {
		if (author.name.length < minLength) {
			let errors = {};
			errors.author = 'Authors name should be more 2 symbols.';
			setErrors(errors);
			return;
		}
		setErrors(errors);
		if (!listAuthors.find((author) => author.id === id)) {
			setListAuthors([...listAuthors, author]);
			mockedAuthorsList.push(author);
			setAuthor({
				id: '',
				name: '',
			});
		} else {
			alert(`Author ${author.name} is already added`);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<h1 className={styles.title}>{title}</h1>
			<div className={styles.card_border}>
				<div className={styles.creation_form}>
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
								type='number'
								name='duration'
								placeholder='Duration'
								inputValue={inputs.duration}
								className={styles.input_error}
								handleChange={inputChange}
							></Input>
							<span className={styles.error}>{errors.duration}</span>
						</div>
						<strong>{getCourseDuration(inputs.duration)}</strong>
					</div>
					<div className={styles.authors_holder}>
						<div className={styles.authors_left}>
							<h3 className={styles.creation_subtitle}>Authors</h3>
							<div className={styles.author_add_holder}>
								<Input
									labelText='Author name'
									id='author'
									type='text'
									name='author'
									placeholder='Author'
									inputValue={author.name}
									className={styles.input_error}
									handleChange={authorInputChange}
								></Input>
								<Button
									type='button'
									buttonText='Create Author'
									onClick={() => createAuthor(author.id)}
								></Button>
							</div>
							<span className={styles.error}>{errors.author}</span>
						</div>
						<div className={styles.author_list}>
							<h3 className={styles.creation_subtitle}>Course Authors</h3>
							<span className={styles.error}>{errors.authors}</span>
							<div>
								{selectedAuthors.map((author) => (
									<AuthorItem
										key={author.id}
										author={author.name}
										buttonText={'-'}
										typeButton={'button'}
										buttonEvent={() => deleteAuthor(author.id)}
									></AuthorItem>
								))}
							</div>
						</div>
					</div>
					<h4 className={styles.creation_subtitle}>Authors List</h4>
					<ul className={styles.author_list}>
						{listAuthors.map((author) => (
							<AuthorItem
								key={author.id}
								author={author.name}
								buttonText={'+'}
								typeButton={'button'}
								buttonEvent={() => addAuthor(author.id)}
							></AuthorItem>
						))}
					</ul>
				</div>
			</div>
			<div className={styles.button_holder}>
				<Link to='/courses'>
					<Button type='button' buttonText='Cancel'></Button>
				</Link>
				<Button buttonText='Create Course' type='submit'></Button>
			</div>
		</form>
	);
};

export default CreateCourse;
