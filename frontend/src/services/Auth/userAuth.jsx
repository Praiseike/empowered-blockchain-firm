import axiosClient from '../axios';
import { useNavigate } from 'react-router-dom';

export default function logoutUser(setUserProfile){
	// check if we still have the user's auth token from the backend
	const token = localStorage.getItem('token');
	// if its there we proceed to logout
	if(token){
		const config = {
			headers: {
				accept: 'application/json',
				authorization: 'Bearer '+token,
			}
		};

		const data = {};

		axiosClient.post('/api/logout',data,config)
			.then(({data}) => {
				if(data.status === 'success'){
					alert(data.message)
					setUserProfile(null);
					localStorage.clear();
				}
			})
			.catch(error => {
				console.log(error.message)
			})

	}else{		
		setUserProfile(null);
		localStorage.clear();
	}

}
