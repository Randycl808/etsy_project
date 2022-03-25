import logo from './logo.svg';
import './App.css';
import Navbar from './components/shared/NavBar';
import { Routes, Route, useParams} from 'react-router-dom';
import Home from './components/shared/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import NoMatch from './components/shared/NoMatch';
import HomeClass from './components/shared/HomeClass';

function App() {
  return (
    <div>
      <Navbar />
      <>
       <Routes>
         <Route path='/' element={<Home />}/>
         <Route path='/home' element={<HomeClass yo={'yoyo'} />}/>
         <Route path='/login' element={<Login />}/>
         <Route path='/register' element={<Register />}/>
         <Route path='*' element={<NoMatch />}/>
       </Routes>
      </>
      <p>Footer for all pages</p>
    </div>
  );
}

export default App;
