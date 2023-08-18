export const formatCreationDate = (value) => {
	if (!value) return null;
	let date = new Date(value).toLocaleDateString('en-GB');
	return date.split('/').join('.');
};
