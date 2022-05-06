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
import ManageItem from './Components/ManageItem/ManageItem';
import AddItem from './Components/AddItem/AddItem';
import MyItem from './Components/MyItem/MyItem';
import RequireAuth from './Components/RequireAuth/RequireAuth';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='about' element={<About></About>}></Route>
        <Route path='service' element={<Service></Service>}></Route>
        <Route path='inventory' element={<Inventory></Inventory>}></Route>
        <Route path='/inventory/:carDetailId' element={
          <RequireAuth><CarDetail></CarDetail></RequireAuth>
        }></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='singup' element={<SingUp></SingUp>}></Route>
        <Route path='manageItem' element={<ManageItem></ManageItem>}></Route>
        <Route path='addItem' element={<AddItem></AddItem>}></Route>
        <Route path='myItem' element={<MyItem></MyItem>}></Route>
      </Routes>
      
     
    </div>
  );
}

export default App;
