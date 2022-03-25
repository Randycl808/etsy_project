import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Home = () => {
  let auth = useContext(AuthContext);
  if (!auth.user) {
    return (
      <p>
        TODO: SHOULD NOT ABLE TO COME, NOT LOGGED IN HERE, REDIRECT TO LOGIN
      </p>
    );
  }

  return (
    <div>
      <h1>Home</h1>
      <p> hello {auth.user.email}</p>
      <p>{JSON.stringify(auth)}</p>
      <p>things for debugging</p>
    </div>
  );
};
export default Home;
