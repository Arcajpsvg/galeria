import {Link} from "react-router-dom";
import logo from "../../../assets/imgs/logo.png"
import "./Nav.css";

function Nav() {
  return (
    <>
      <nav id="nav">
        <ul>
          <li>
            <Link to="/">
                <img id="img-logo" src={logo}></img>
            </Link>
          </li>
          <li>
            <Link to="/paintings">Pinturas</Link>
          </li>
          <li>
            <Link to="/architecture">Arquitectura</Link>
          </li>
          <li>
            <Link to="/events">Events</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contacto</Link>
          </li>
        </ul>
        <ul id="nav-login">
          <li>
            <Link to="/login"><i className="fa fa-user-circle" aria-hidden="true"></i></Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
