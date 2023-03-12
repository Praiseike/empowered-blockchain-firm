import React, { useState } from 'react';
import './navigation.css';
import { Link } from 'react-router-dom';
import Notification from '../notification/notification';
import Profile from '../../../../components/profile/profile';
import {
	AiOutlineHome,
	AiOutlineCalendar,
	AiOutlineFolder,
	AiOutlineHdd,
	AiOutlineUsergroupAdd,
	AiOutlineBell,
	AiOutlineMenu,
	AiMenu
} from 'react-icons/ai';


import {
	MdOutlineSignalCellularAlt,

} from 'react-icons/md';


const links = [
	{
		name: "Dashboard",
		route: '#',
		icon: <AiOutlineHome />
	},
	{
		name: "Team",
		route: '#',
		icon: <AiOutlineUsergroupAdd/>
	},
	{
		name: "Projects",
		route: '#',
		icon: <AiOutlineFolder />
	},
	{
		name: "Calender",
		route: '#',
		icon: <AiOutlineCalendar />
	},
	{
		name: "Documents",
		route: '#',
		icon: <AiOutlineHdd />
	},
	{
		name: "Reports",
		route: '#',
		icon: <MdOutlineSignalCellularAlt />
	},
];

const Navigation = () => {

	const [menu,setMenu] = useState(false);
	const toggleMenu = () => {
		setMenu(!menu);
	}
	return (
		<section className="h-screen min-h-full flex justify-end items-start overflow-y-hidden">
			<nav className={`h-screen fixed top-0 left-0 w-64 bg-gray-800 ease-in-out duration-1000
		      	${ menu ? "-translate-x-full" : "translate-x-0"}
			`}>
				<div className="flex shadow items-center h-[4.5rem] px-5 text-white text-xl bg-gray-900">
					Dashboard
				</div>
				<div className="px-3 w-full">
					<ul className="mt-5 text-lg">
						{ 
							links.map((item,index) => {
								return (
									<Link to="#" key={index}>
										<li className="w-full px-2 flex flex-row text-gray-400 items-center space-x-2 hover:bg-gray-900 rounded-lg py-2">
											<span className="text-3xl text-gray-500">{item.icon}</span>
											<span>{item.name}</span>
										</li>
									</Link>
								)
							})
						}
					</ul>
				</div>
			</nav>
			 <div className={`h-screen overflow-y-hiddeen text-center ease-in-out duration-1000
			 	${menu ? "w-full" : "w-[calc(100%-16rem)]"}
			 `}

			  id="content">
			 	<header className="bg-white h-[4.4rem] shadow px-10 flex flex-row items-center justify-between">
				    <button
				    	onClick = {toggleMenu}
				      className="text-lg font-bold uppercase text-[black]">
				      <AiOutlineMenu/>
				    </button>

					<div className="flex flex-row items-center space-x-5">
						<div className="text-xl">						
							<AiOutlineBell className="text-2xl"/>
						</div>
						<div className="h-10 w-10 rounded-[50%] overflow-hidden">
							<img 
								className="h-full w-full"
								// src="https://xsgames.co/randomusers/avatar.php?g=male"
								src="https://api.multiavatar.com/stefan.svg"
								// src="https://api.dicebear.com/5.x/adventurer/svg"
								alt="profile avatar"
							/>

						</div>
					</div>	 		
			 	</header>
			</div>
		</section>

	);
}


export default Navigation;