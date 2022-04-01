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
      return <button onClick={auth.handleLogout}>Logout</button>;
    }
    return (
      <Nav>
        <Nav.Link href="/login">Login</Nav.Link>
        <Nav.Link href="/register">Register</Nav.Link>
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
              <Nav.Link href="/">Products</Nav.Link>
              <Nav.Link href="/find">Search Products</Nav.Link>
              <Nav.Link href="/categories">Categories</Nav.Link>
              <NavDropdown title="More" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/sellers">Sellers</NavDropdown.Item>
                <NavDropdown.Item href="/charts">Charts</NavDropdown.Item>
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
