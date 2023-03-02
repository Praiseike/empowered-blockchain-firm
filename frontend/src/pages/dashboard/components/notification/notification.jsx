import { SlBell } from 'react-icons/sl';
import Dropdown from '../../../../components/dropdown/dropdown';
import { useState } from 'react';

import './notification.css';


function Notifications({data}){
	return (
		<div className="notification-panel shadow">
			<h2 className="header">Notifications</h2>
			{ data ? 
				data.map((notification,index) => {
					return <p>{notification.message}</p>
				})
				:<p>No notifications yet</p>	
			}
		</div>
	);
}

const testData = [
	{
		message: "something will happend soon",
		time: "11pm"
	},
	{
		message: "something had already happend",
		time: "1am"
	}

]

function Notification() {
	const [ notifications, setNotifications ] = useState({});
	const [ showNotification, setShowNotification ] = useState(false);
	const [ dropDown, setDropDown ] = useState(false);

	return (
		<>
			<div>
				<SlBell 
					className="cursor-pointer fill-gray-700"
					onClick={() => setShowNotification(!showNotification)}
				/>
			</div>
			{ showNotification ?
				<Notifications />
				: null
			}
		</>
	);
}

export default Notification;