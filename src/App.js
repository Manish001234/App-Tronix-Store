import './App.css';
import Home from './components/Home';
import Product from './components/mobile';
import About from "./components/About"
import {Route ,Routes} from "react-router-dom"
import Navbar from './components/Navbar';
import { Laptop } from './components/laptop';
import Ipad from './components/Ipad';
import MobileDisplay from './components/mobileDisplay';
import LapDisplay from './components/lapDisplay';
import IpadDisplay from './components/IpadDisplay';
import Cart from "./components/cart";
import Checkout from './components/Checkout';
import { Payment } from './components/Payment';


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/About' element={<About/>} />

      <Route path='/Product' element={<Product/>} />
      <Route path='/Product/:id' element={<MobileDisplay/>} />

      <Route path='/Navbar' element={<Navbar/>} />
      <Route path='/laptop' element={<Laptop/>} />
      <Route path='/laptop/:id' element={<LapDisplay/>} />

      <Route path='/Ipad' element={<Ipad/>} />
      <Route path='/Ipad/:id' element={<IpadDisplay/>} />

      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/Payment" element={<Payment/>} />
   



      


    </Routes> 
    </>
  );
}

export default App;
