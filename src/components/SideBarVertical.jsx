import { Button, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/logo/Spotify_Logo.png";
const SideBarVertical = () => {
  return (
    <Navbar
      expand="lg"
      variant="light"
      fixed="left"
      className="navbar-expand-md navbar-white bg-navbar  justify-content-between px-4"
      id="sidebar"
    >
      <div className="nav-container">
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="Spotify_Logo" width="131" height="40" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNavAltMarkup" aria-label="Toggle navigation" />
        <Navbar.Collapse id="navbarNavAltMarkup">
          <Nav>
            <ul>
              <Nav.Item>
                <Nav.Link as={Link} to="/">
                  <i className="fas fa-home fa-lg"></i>&nbsp; Home
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/your-library">
                  <i className="fas fa-book-open fa-lg"></i>&nbsp; Your Library
                </Nav.Link>
              </Nav.Item>
            </ul>
          </Nav>
        </Navbar.Collapse>
      </div>

      <div className="nav-btn">
        <Button variant="primary" className="signup-btn" type="button">
          Sign Up
        </Button>
        <Button variant="secondary" className="login-btn" type="button">
          Login
        </Button>
        <a href="#">Cookie Policy</a>|<a href="#">Privacy</a>
      </div>
    </Navbar>
  );
};
export default SideBarVertical;
