
import { Link } from 'react-router-dom';
import Navbar from './UI/Navbar'; // Adjust the import path if needed

const Nav = () => {
  return (
    <Navbar
      links={[
        <Link key={1} className="nav-link text-light" to="/">
          Home
        </Link>,
        <Link key={2} className="nav-link text-light" to="/about">
          About Us
        </Link>,
        <Link key={3} className="nav-link text-light" to="/portfolio">
          My Portfolio
        </Link>,
      ]}
    />
  );
};

export default Nav;
