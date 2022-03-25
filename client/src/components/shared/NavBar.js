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
  return (
    <div style={{display:'flex', justifyContent:'space-between'}}>
      <div>
        <Link to="/">Home</Link>
        <Link to="/home">HomeClass</Link>
      </div>
      <div>{renderRightNav()}</div>
    </div>
  );
};
export default Navbar;
