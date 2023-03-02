import React from 'react';
import './navigation.css';

import Notification from '../notification/notification';
import Profile from '../../../../components/profile/profile';

const Navigation = () => {
	return (
		<>
			<div className="navbar shadow container">
				<h2 className="brand">Dashboard</h2>
				<div className="menu-items">
					<Notification/>
					<Profile />
				</div>
			</div>
		</>
	);
};


export default Navigation;