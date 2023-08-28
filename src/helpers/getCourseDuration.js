export const getCourseDuration = (duration) => {
	if (duration < 60) {
		return `${duration}min`;
	} else if (duration % 60 === 0) {
		return `${Math.floor((duration / 60) * 100) / 100}h`;
	} else {
		return `${(Math.floor((duration / 60) * 100) / 100 + 'min')
			.split('.')
			.join('h ')}`;
	}
};
