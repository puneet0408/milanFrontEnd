import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Import Pages
import Nav from '../src/components/nav/Nav'
import Banner from '../src/components/banner/Banner'
import Life from './components/pages/life/Life';
import Shop from './components/pages/shop/Shop';
import Profile from './components/pages/profile/Profile';
function App() {
  return (
    <BrowserRouter>
   <Nav/>
    <Routes>
      
      <Route path='/' index element={<Banner/>} />
      <Route path='/life' element={<Life/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/profile' element={<Profile/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
