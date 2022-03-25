import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Home = () => {
  let [data,setData] = useState([])
  useEffect(()=>{
    getCats()
  },[])

  const getCats= async()=>{
    try {
      // try to do this, but we need  to send a valid token
      // devise-axios package
      let res = await axios.get('/api/cats')
      setData(res.data)
    } catch (error) {
      setData(error)
    }
  }
  return (
    <div>
      <h1>Home</h1>
       <p>{JSON.stringify(data)}</p>
    </div>
  );
};
export default Home;
