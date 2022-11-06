import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Import Pages
import Nav from '../src/components/nav/Nav'
import Home from './components/Home/Home'
import Life from './components/pages/life/Life';
import Shop from './components/pages/shop/Shop';
import Profile from './components/pages/profile/Profile';
import Singup from './components/pages/singup/Singup';
function App() {
  return (
    <BrowserRouter>
   <Nav/>
    <Routes>
      
      <Route path='/' index element={<Home/>} />
      <Route path='/life' element={<Life/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/singup' element={<Singup/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
