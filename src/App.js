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
import Footer from './Components/Footer/Footer';
import Blog from './Components/Blog/Blog';
import NothingFound from './Components/NothingFound/NothingFound';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='blog' element={<Blog></Blog>}></Route>
        <Route path='service' element={<Service></Service>}></Route>
        <Route path='inventory' element={<Inventory></Inventory>}></Route>
        <Route path='/inventory/:carDetailId' element={
          <RequireAuth><CarDetail></CarDetail></RequireAuth>
        }></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='singup' element={<SingUp></SingUp>}></Route>
        <Route path='manageItem' element={
          <RequireAuth><ManageItem></ManageItem></RequireAuth>
        }></Route>
        <Route path='addItem' element={
          <RequireAuth><AddItem></AddItem></RequireAuth>
        }></Route>
        <Route path='myItem' element={<MyItem></MyItem>}></Route>
        <Route path='*' element={<NothingFound></NothingFound>}></Route>
      </Routes>
      <Footer></Footer>
      
     
    </div>
  );
}

export default App;
