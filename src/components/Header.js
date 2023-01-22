import "../App.css";
import { Link } from "react-router-dom";
const Header = () =>{
    return(
        <div className='header'>
        <ul className='listStyle'>
        <li><Link to = "/home">Home</Link></li>
        <li><Link to = "/about">About us</Link></li>
        <li><Link to = "/contact">Contact us</Link></li>
        <li><Link to = "/services">Services</Link></li>
        </ul>
    </div>
   )
}

export default Header;