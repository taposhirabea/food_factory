import logo from './logo.svg';
import './App.css';

import Home from './pages/HomePage';
import About from './pages/AboutPage';
import Contact from './pages/ContactPage';
import Products from './pages/ProductsPage';
import SingleProduct from './pages/SingleProductPage';
import Cart from './pages/CartPage';
import Default from './pages/Default';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import SideCart from './components/SideCart';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Navbar/>
    <Sidebar/>
    <SideCart/>
    <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path='/about' element={<About/>} />
          <Route exact path="/contact" element={<Contact/>} />
          <Route exact path="/products" element={<Products/>} />
          <Route exact path="/products/:id" element={<SingleProduct />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route path="*" element={<Default />} />

      </Routes>
      <Footer/>
    </>
  );
}

export default App;
