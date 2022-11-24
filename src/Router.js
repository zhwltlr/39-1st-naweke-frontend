import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './pages/Nav/Nav';
import Login from './pages/UserAccount/Login/Login';
import Main from './pages/Main/Main';
import Cart from './pages/Cart/Cart';
import Detail from './pages/Detail/Detail';
import SignUp from './pages/UserAccount/SignUp/SignUp';
import Footer from './pages/Footer/Footer';
import Payment from './pages/Payment/Payment';
// import Footer from './pages/Footer/Footer';
import ProductDetail from './pages/Productdetail/ProductDetail';
// import SignUp from './pages/UserAccount/SignUp/SignUp';
// import Footer from './pages/Footer/Footer';
import Maintheme from './pages/Maintheme/Maintheme';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route path="/main" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/products/:id" element={<Detail />} />
        <Route path="/" element={<Main />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/products" element={<Maintheme />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
