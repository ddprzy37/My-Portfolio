import React, { useRef, useEffect } from 'react';
import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

const Navbar = ({ links }) => {
  const navbarToggleRef = useRef(null);
  const navbarCollapseRef = useRef(null);

  // Function to handle click outside to close menu
  const handleClickOutside = (event) => {
    if (navbarCollapseRef.current && !navbarCollapseRef.current.contains(event.target) &&
        navbarToggleRef.current && !navbarToggleRef.current.contains(event.target)) {
      if (navbarCollapseRef.current.classList.contains('show')) {
        navbarCollapseRef.current.classList.remove('show');
      }
    }
  };

  useEffect(() => {
    // Add event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <BootstrapNavbar bg="dark" variant="dark" expand="lg">
      <Container>
        <BootstrapNavbar.Brand as={Link} to="/">
          My Portfolio
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" ref={navbarToggleRef} />
        <BootstrapNavbar.Collapse id="basic-navbar-nav" ref={navbarCollapseRef}>
          <Nav className="ms-auto">
            {links.map((link, index) => (
              <Nav.Link
                key={index}
                as="div"
                onClick={() => {
                  if (navbarCollapseRef.current.classList.contains('show')) {
                    navbarCollapseRef.current.classList.remove('show');
                  }
                }}
              >
                {link}
              </Nav.Link>
            ))}
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;