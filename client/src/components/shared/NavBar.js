import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
const NavBar = () => {
  const auth = useContext(AuthContext);
  //   const {user} = useContext(AuthContext);
  //    if(user) => logout
  //    if(!user) => login/register
  const renderRightNav = () => {
    if (auth.user) {
      return <button type="button" className="btn btn-outline-info waves-effect" onClick={auth.handleLogout}>Logout</button>;
    }
    return (
      <Nav>
        <div className="navP flex-parent">
      <div className="nav1 flex-child">
        <Nav.Link type="button" className="nav btn btn-outline-info waves-effect text-white" href="/login">Login</Nav.Link>
        </div>
        <div className="nav1 flex-child">
          <Nav.Link type="button" className="nav btn btn-outline-info waves-effect text-white" href="/register ">Register</Nav.Link>
          </div>
          </div>
        </Nav>
    );
  };

  const renderLeft = () => {
    if (auth.user) {
      return (
        <Navbar>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Products
              </Nav.Link>
              <Nav.Link as={Link} to="/find">
                Search Products
              </Nav.Link>
              <Nav.Link as={Link} to="/categories">
                Categories
              </Nav.Link>
              <NavDropdown title="More" id="collasible-nav-dropdown">
                <NavDropdown.Item as={Link} to="/sellers">
                  Sellers
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/charts">
                  Charts
                </NavDropdown.Item>
                
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      );
    }
  };
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <Container>
        <Navbar.Brand href="/">Etsy</Navbar.Brand>
        {renderLeft()}

        <Link to="/login"></Link>
        {renderRightNav()}
      </Container>
    </Navbar>
  );
};
export default NavBar;
