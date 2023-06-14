import {Link} from "react-router-dom";

function Nav() {
  return (
    <>
      <nav id="nav">
        <ul>
          <li>
            <Link to="/">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/00/Logo_museum_2017.png"></img>
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
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
