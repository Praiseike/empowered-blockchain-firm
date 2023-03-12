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
    <footer className="bg-[#000]">
      <section className="footer-section py-20">
        <div className="flex items-center px-[3rem] w-full flex-col sm:md:flex-row justify-between">
          <div className="logo-area h-full w-full mb-12 sm:md:w-[20%]">
            <div className="block w-full h-auto">
              <img src={logo} alt="company logo" className="h-full" />
              <div className="flex mt-3 flex-row items-center justify-around">
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
          <div className="flex flex-col text-center md:sm:text-start md:sm:flex-row w-full justify-around">
            <div className="nav-links mb-4 flex flex-col">
              <span className="nav-header text-white">Support</span>
              <a className="nav-link" href="/somewhere">Contact Us</a>
              <a className="nav-link" href="/somewhere">FAQ</a>
              <a className="nav-link" href="/somewhere">Downloads</a>
              <a className="nav-link" href="/somewhere">About Us</a>
              <a className="nav-link" href="/somewhere">Our Services</a>
            </div>
            <div className="nav-links mb-4 flex flex-col">
              <span className="nav-header text-white">Company</span>
              <a className="nav-link" href="/somewhere">About Us</a>
              <a className="nav-link" href="/somewhere">Our Mission</a>
              <a className="nav-link" href="/somewhere">Our Vision</a>
              <a className="nav-link" href="/somewhere">Meet the team</a>
            </div>
            <div className="nav-form">
              <span className="nav-header">Sign up on our news letter</span>
              <Form/>
            </div>
          </div>
        </div>
      </section>
      <hr className="bg-white-200"/>
      <div className="footer-note text-center">
        <p className="text-white text-grey">copyright &copy; Empowered Blockchain Firm 2021 - 2023</p>
      </div>
    </footer>
  );
}



export default Footer;