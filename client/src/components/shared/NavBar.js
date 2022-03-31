import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
  const auth = useContext(AuthContext);
  //   const {user} = useContext(AuthContext);
  //    if(user) => logout
  //    if(!user) => login/register
  const renderRightNav = () => {
    if (auth.user) {
      return <button onClick={auth.handleLogout}>Logout</button>;
    }
    return (
      <>
        <Link to="/login">login</Link>
        <Link to="/register">register</Link>
      </>
    );
  };

  const renderLeft = () => {
    if (auth.user) {
      return (
        <>
          <Link to="/">Products</Link>
          <Link to="/find">Search Products</Link>
          <Link to="/categories">Product Categories</Link>
          <Link to="/sellers">Sellers</Link>
          <Link to="/charts">Chart</Link>
        </>
      );
    }
  };
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div>
        <Link to="/login"></Link>
        {renderLeft()}

      </div>
      <div>{renderRightNav()}</div>
    </div>
  );
};
export default Navbar;
