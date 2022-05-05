import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home/Home';
import About from './Components/About/About';
import Service from './Components/Service/Service';
import { Routes, Route, Link } from "react-router-dom";
import Header from './Components/Header/Header';
import Inventory from './Components/Inventory/Inventory'
import CarDetail from './Components/CarDetail/CarDetail';
import Login from './Components/Login/Login';
import SingUp from './SingUp/SingUp';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='about' element={<About></About>}></Route>
        <Route path='service' element={<Service></Service>}></Route>
        <Route path='inventory' element={<Inventory></Inventory>}></Route>
        <Route path='/inventory/:carDetailId' element={<CarDetail></CarDetail>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='singup' element={<SingUp></SingUp>}></Route>
      </Routes>
      
     
    </div>
  );
}

export default App;
