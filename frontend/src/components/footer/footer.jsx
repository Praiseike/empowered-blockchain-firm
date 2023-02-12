import {useState,React} from "react";
import logo from '../../assets/images/logo/white-logo.png';
import {
  BsTelegram,
  BsTwitter,
  BsWhatsapp,
  BsFacebook
} from "react-icons/bs";
import './footer.css';


const Form = () => {

  const [email,setEmail] = useState("");
  interface FormDataType {email:string};
  const response: FormDataType = {email:""};

  const onSubmit = (event) => {
    event.preventDefault();
    response.email = email;
    // later add route to submit form
    // and actual submit code

  }

  const onChange = (event) => {
    setEmail(event.target.value);
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="email" placeholder="enter your email address" className="focus:outline-none" onChange={onChange} required/>
        <button className="px-5 py-1.5 bg-gradient-to-r from-blue to-blue-700 text-white rounded mt-4">submit</button>
      </form>
    </div>
  );
}



const Footer = () => {
  const iconStyle = {color: "white",fontSize: "30px"};
  return ( 
    <footer className="bg-[#000] pt-20">
      <section className="footer-section">
        <div className="grid-container">
          <div className="logo-area">
            <div className="logo-container">
              <img src={logo} alt="company logo" className="w-14 h-full" />
              <div className="socials">
                <div className="socials-link">
                  <BsWhatsapp className="text-white" style={iconStyle}/>
                </div>
                <div className="socials-link">
                  <BsTelegram style={iconStyle}/>
                </div>
                <div className="socials-link">
                  <BsTwitter style={iconStyle}/>
                </div>
                <div className="socials-link">
                  <BsFacebook style={iconStyle}/>
                </div>
              </div>
            </div>
          </div>
          <div className="nav-area">
            <div className="nav-links">
              <span className="nav-header">Support</span>
              <a className="nav-link" href="/somewhere">Contact Us</a>
              <a className="nav-link" href="/somewhere">FAQ</a>
              <a className="nav-link" href="/somewhere">Downloads</a>
              <a className="nav-link" href="/somewhere">About Us</a>
              <a className="nav-link" href="/somewhere">Our Services</a>
            </div>
            <div className="nav-links">
              <span className="nav-header">Company</span>
              <a className="nav-link" href="/somewhere">About Us</a>
              <a className="nav-link" href="/somewhere">Our Mission</a>
              <a className="nav-link" href="/somewhere">Our Vision</a>
              <a className="nav-link" href="/somewhere">Meet the team</a>
            </div>
            <div className="nav-form">
              <span className="nav-header">Sign up on our news letter></span>
              <Form/>
            </div>
          </div>
        </div>
      </section>
      <div className="footer-note text-center">
        <p className="text-white">copyright &copy; Empowered Blockchain Firm 2021 - 2023</p>
      </div>
    </footer>
  );
}




export default Footer;