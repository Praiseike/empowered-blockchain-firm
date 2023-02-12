import logo from "../../assets/images/logo/blue logo (1).png"
import "./logo.css"
export default function Logo(){
	return (
	    <img 
	      className="logo-component" 
	      src={logo} 
	      alt="company logo"
	    />
	);
}