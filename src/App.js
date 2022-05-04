import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home/Home';
import About from './Components/About/About';
import Service from './Components/Service/Service';
import { Routes, Route, Link } from "react-router-dom";
import Header from './Components/Header/Header';
import Inventory from './Components/Inventory/Inventory'

function App() {
  return (
    <div className="App">
      <h2>this is car warehouse</h2>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='about' element={<About></About>}></Route>
        <Route path='service' element={<Service></Service>}></Route>
        <Route path='inventory' element={<Inventory></Inventory>}></Route>
      </Routes>
      
     
    </div>
  );
}

export default App;
