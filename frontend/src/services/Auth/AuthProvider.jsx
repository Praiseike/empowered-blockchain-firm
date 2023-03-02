import { useState, useEffect } from 'react';

import { getUser } from './auth.js';

import AuthContext from './AuthContext';

export const AuthProvider = ({children}) => {
	const [ userProfile, setUserProfile ] = useState(null);
	useEffect(() => {
			const currentUser = getUser();
			setUserProfile(currentUser);
	},[]);
	return(
		<AuthContext.Provider value={{ userProfile,setUserProfile }}>{children}</AuthContext.Provider>
	);
}