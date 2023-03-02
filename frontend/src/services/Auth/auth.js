export const getUser = () => {
	const data = JSON.parse(localStorage.getItem('user'))
	console.log("get user was called with data",data);
	return data;
};

