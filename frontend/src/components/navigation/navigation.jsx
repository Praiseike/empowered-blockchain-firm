import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import navigationLinks from "../../constants/navigation";
import Button from "../button/button";
import MenuItem from "../menu-item/menu-item";
import Logo from "../logo/logo";
import useAuthContext from '../../services/Auth/useAuthContext';
import Profile from '../profile/profile';
import logoutUser from '../../services/Auth/userAuth';
import { FiMenu, FiX } from 'react-icons/fi';

import './navigation.css';



function Navigation() {
  function logout() {
    logoutUser(setUserProfile);
  }
 
  const [ sideBar, setSideBar ] = useState(false);
  const { userProfile,setUserProfile } = useAuthContext();
  const navigate = useNavigate();
 
  function toggleNav(){
    // document.querySelector('.navigation_links_mobile').classList.toggle('hidden')
    setSideBar(!sideBar);
    console.log("clicked button");
  }
  return (
    <nav className="navigation py-6 px-6 w-100 border">

      <div className="navigation__wrapper justify-between sm:md:w-[93%] flex gap-x-10 items-center mx-auto">

        <div className="navbar-brand">
          <Link
            to="/"
            className="navigation__logo text-3xl font-bold leading-none"
          >
            <Logo variation="blue"/>
          </Link>
        </div>
        {/* Navigation sidebar*/}
        <div 
          className={`navigation_links_mobile ease-in-out duration-300 bg-[#ffffff] z-[100] fixed inset-0 w-full h-screen sm:md:hidden
            ${sideBar ? "translate-x-full" : "translate-x-0"}
          `}
          >
          <div className="w-full h-20 bg-[#f3f3f3] flex items-center px-10 justify-between">
            <p className="text-xl">Menu</p>
            <button onClick={() => toggleNav()} className="text-xl p-3 rounded cursor-pointer">
              <FiX/>
            </button>
          </div>
          <ul className="px-10 mt-5">
              <Link className="" to="/">
                  <li className="text-2xl py-1 bg-[#4444ff] rounded px-3 text-white hover:focus:ring focus:ring border-b-1">
                    Home
                  </li>
              </Link>
            {navigationLinks.map(({name, ...otherLinkProps}) => (
              <Link className="" key={name}>
                  <li className="text-2xl my-1 py-1 rounded bg-[#f3f3f3] px-3 hover:focus:ring focus:ring">
                    {name}
                  </li>
              </Link>
            ))}
              <li onClick={() => logout()}
                 className="text-2xl py-1 text-center bg-[#ff5555] mt-10 rounded px-3 text-white hover:focus:ring focus:ring border-b-1">
                  Logout
              </li>
          </ul>
        </div>

        <div className="hidden sm:md:flex navigation__links bg-white items-center sm:md:relative sm:md:w-[100%] justify-between sm:md:flex-row sm:md:flex">
          <div className="nav_items sm:w-100 sm:md:w-auto w-full ">
            
              {/* Navigation Item */}
              <ul className="navigation__item flex flex-col sm:md:flex-row items-center gap-5">
                {navigationLinks.map(({ name, ...otherLinkProps }) => (
                  <MenuItem title={name} key={name} {...otherLinkProps} />
                ))}
              </ul>
              {/* Navigation Action Buttons */}

          </div>
          <div className="buttons border sm:md:w-auto w-full flex justify-around">
              { !userProfile ?
                <div className="navigation_a flex gap-1">
                  <Button variant="transparent" onClick={() => navigate("/login")}>
                    Log in
                  </Button>
                  <Button variant="main" onClick={() => navigate("/register")}>
                    Sign up
                  </Button>
                </div>
                : 
                  <Button variant="transparent" onClick={() => logout()}>
                    <span className="font-semibold">Log out</span>
                  </Button>
              }
          </div>
        </div>

        <div
          className="menuBtn sm:md:hidden cursor-pointer"
          onClick={() => toggleNav()}
        >
          <button className="text-3xl">
            <FiMenu />
          </button>                
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
