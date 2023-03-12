import './profile.css';
import {useState} from 'react';
import {useNavigate, Link} from 'react-router-dom';
import useAuthContext from '../../services/Auth/useAuthContext';
import logoutUser from '../../services/Auth/userAuth';


import { AiOutlineCaretDown } from "react-icons/ai";


const options = [
	{
		name: 'Dashboard',
		route: '/dashboard'
	},
	{
		name: 'My Courses',
		route: '/dashboard/courses'
	},
]

function ProfileDropDown({user}){
	const [userProfile, setUserProfile] = user;
	function logout() {
		logoutUser(setUserProfile)
	}

	return (
		<div className="shadow profile-dropdown bg-white w-[18rem] rounded absolute top-20 p-4">
			{/*<p>{user.email}</p>*/}
			<hr className="my-2"/>
			<ul className="profile-dropdown-list">
				{
					options.map((item,index) => {
						return (
							<li key={index} className="dropdown-list-item my-2">
								<Link to={item.route} >{item.name}</Link>									
							</li>
						);
					})
				}
				<li className="dropdown-list-item">
					<span 
						style={{color: "red"}}
						onClick={logout}
					>
						Log Out
					</span>
					</li>
			</ul>

		</div>
	);
}

function Profile(){
	const navigate = useNavigate();
	const { userProfile,setUserProfile } = useAuthContext()
	const [ showDropdown, setShowDropdown ] = useState(false);
	return (
		<>
			<div>
				<div className="profile" onClick={() => setShowDropdown(!showDropdown)}>
					<div className="profile-info">
						<span className="profile-name">{userProfile.name}</span>
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
					{showDropdown?
						<ProfileDropDown user={[userProfile,setUserProfile]}/>
						:
						null
					}
			</div>
		</>
	);

}

export default Profile;