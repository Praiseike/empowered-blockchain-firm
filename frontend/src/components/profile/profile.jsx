import './profile.css';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import useAuthContext from '../../services/Auth/useAuthContext';

import { AiOutlineCaretDown } from "react-icons/ai";


function ProfileDropDown({userProfile}){
	return (
		<div className="shadow-lg profile-dropdown py-xl">
			{/*<p>{user.email}</p>*/}
		</div>
	);
}

function Profile(){
	const navigate = useNavigate();
	const { userProfile } = useAuthContext()
	console.log('Profile component: ',userProfile);
	return (
		<>
			<div className="profile">
				<div className="profile-info">
					<span className="profile-name"></span>
				</div>
				<div className="flex items-center">			
					<div className="avatar">
						<img 
							// src="https://xsgames.co/randomusers/avatar.php?g=male"
							src="https://api.multiavatar.com/stefan.svg"
							alt="profile avatar"
						/>
					</div>
					<AiOutlineCaretDown className="text-xss mt-0.5 fill-gray-700"/>
				</div>
			</div>
			<ProfileDropDown user={userProfile}/>
		</>
	);

}

export default Profile;