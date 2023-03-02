import { useEffect,React } from "react";
import { Link, useNavigate } from "react-router-dom";
import navigationLinks from "../../constants/navigation";
import Button from "../button/button";
import MenuItem from "../menu-item/menu-item";
import Logo from "../logo/logo";
import useAuthContext from '../../services/Auth/useAuthContext';
import Profile from '../profile/profile';

function Navigation() {
  const navigate = useNavigate();
  const { userProfile } = useAuthContext();
  console.log("Profile from navigation",userProfile);
  return (
    <nav className="navigation py-6 px-6">
      {/* Navigation Wrapper */}
      <div className="navigation__wrapper w-[93%] flex items-center justify-between mx-auto">
        {/* Navigation Links */}
        <div className="navigation__links flex items-center gap-x-10">
          {/* Navigation Logo */}
          <Link
            to="/"
            className="navigation__logo text-3xl font-bold leading-none"
          >
          <Logo variation="blue"/>
          </Link>

          {/* Navigation Item */}
          <ul className="navigation__item flex items-center gap-5">
            {navigationLinks.map(({ name, ...otherLinkProps }) => (
              <MenuItem title={name} key={name} {...otherLinkProps} />
            ))}
          </ul>
        </div>

        {/* Navigation Action Buttons */}
        { !userProfile ?
          <div className="navigation_a flex gap-1">
            <Button variant="transparent" onClick={() => navigate("/login")}>
              Log in
            </Button>
            <Button variant="main" onClick={() => navigate("/register")}>
              Sign in
            </Button>
          </div>
          : <Profile />
        }
      </div>
    </nav>
  );
}

export default Navigation;
