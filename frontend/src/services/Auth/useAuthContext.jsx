import { useContext } from 'react';
import AuthContext  from './AuthContext';

const useAuthContext = () => {
	const user = useContext(AuthContext)
	if(user === undefined ){
		throw new Error("userAuthContext can only be used in an AuthProvider");
	}

	return user;
}

export default useAuthContext;