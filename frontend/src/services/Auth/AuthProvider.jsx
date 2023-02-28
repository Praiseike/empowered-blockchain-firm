import { useState, useEffect } from 'react';

import { getUser } from './auth.js';

import AuthContext from './AuthContext';

export const AuthProvider = ({children}) => {
	const [ user, setUser ] = useState(null);
	useEffect(() => {
		async function checkLogin() {
			let currentUser = getUser();
			if(currentUser === undefined){
				localStorage.setItem('user','');
				currentUser = '';
			}
			setUser(currentUser);
		}

		checkLogin();
	},[]);
	console.log("Provider context: ",user);
	return(
		<AuthContext.Provider value={{user,setUser}}>{children}</AuthContext.Provider>
	);
}