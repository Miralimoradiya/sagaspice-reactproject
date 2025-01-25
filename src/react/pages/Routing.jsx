import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../Componets/Header'; 
import Index from './Index';   
import Footer from '../Componets/Footer';
import About from './About';   
import Contact from './Contact'; 
import Account from './Account';
import Login from "./Login"
import Cart from "./Cart"
import ListPage from './Productlist/ListPage';
import Blog from "./Blog/Blog"
import ProductDetail from "./Productlist/ProductDetail"
import BlogDetail from './Blog/BlogDetail';

const Routing = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/account" element={<Account />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/listpage" element={<ListPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/productdetail" element={<ProductDetail />} />
        <Route path="/blogdetail" element={<BlogDetail />} />

      </Routes>
      <Footer />
    </Router>
  );
};

export default Routing;