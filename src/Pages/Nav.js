import '../App.css';
import {Link} from 'react-router-dom'


function Nav() {
  return (
    <nav>
        <h3>* Insert Logo Here * </h3>
        <Link className="nav-links" to="/">Home</Link>
        <Link className="nav-links" to="/about">About</Link>
        <Link className="nav-links" to="/profile">Profile</Link>
    </nav>
  );
}

export default Nav;
