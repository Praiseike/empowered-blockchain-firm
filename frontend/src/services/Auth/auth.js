export const getUser = () => {
	return JSON.parse(localStorage.getItem('user'));
};
