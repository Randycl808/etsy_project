import "./App.css";
import Navbar from "./components/shared/NavBar";
import { Routes, Route, useParams } from "react-router-dom";
import Login from "./components/shared/Login";
import Register from "./components/shared/Register";
import NoMatch from "./components/shared/NoMatch";
import FetchUser from "./components/shared/FetchUser";
import ProtectedRoute from "./components/shared/ProtectRoute";
import Products from "./components/auth/Products";
import Categories from "./components/auth/Categories";
import FindProduct from "./components/auth/FindProduct";
import Sellers from "./components/auth/Sellers";
import Charts from "./components/auth/Charts";

// Fetch user: it is going to see if the user is logged in(valid user)
function App() {
  return (
    <div>
      <Navbar />
      {/* When our app first mounts FetchUser Runs */}
      <FetchUser>
        <>
          <Routes>
            {/* Unprotected */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* protected in routes inside of here you need to logged in*/}
            {/* else you go to login page*/}
            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<Products />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/find_product" element={<FindProduct />} />
              <Route path="/sellers" element={<Sellers />} />
              <Route path="/charts" element={<Charts />} />
            </Route>
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </>
      </FetchUser>
      <footer>
      <div className="footer3">
      <div className="footer1">
        <p>Etsy is powered by 100% organic energy</p>
      </div>
      
      </div>
    </footer>
    </div>
  );
}

export default App;
