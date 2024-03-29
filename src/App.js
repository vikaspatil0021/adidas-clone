import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { inject } from '@vercel/analytics';

import './App.css';
import AccountLogin from './Components/AuthPages/Account-Login/account-Login';
import AccountRegister from './Components/AuthPages/Account-register/account-register';
import Footer from './Components/Footer/footer';
import Header from './Components/Header/header';
import Main from './Components/main/main';
import Account from './Components/My-Account/account/account';
import MyAccount from './Components/My-Account/myAccount';
import Orders from './Components/My-Account/orders/orders';
import Stock from './Components/Stock/stock';
import ProductPage from './Components/productPage/productPage';
import Cart from './Components/cart/cart';
import WishList from './Components/wishList/WishList';
import Search from './Components/Search/Search';
import PageNotFound from './Components/PageNotFound/pageNotFound';
import Delivery from './Components/delivery/Delivery';

inject();


function App() {
  const [re, setRe] = useState(0)

  const changeRe = () => {
    setRe(Math.random());
    console.log('ok');
  }

  useEffect(() => {    
    window.onpageshow = (event) => {
      if (event.persisted) {
        window.location.reload();
      }
    };
 }, []);

  return (
    <div className="App">
      <Header changeRe={changeRe} />
      <div id='top-width' className='top-width'>

        <Router>
          <Routes>
          <Route path='*' element={<PageNotFound />} />
            <Route path="/" exact element={<Main />} />
            <Route path="/account-login" exact element={<AccountLogin changeRe={changeRe} />} />
            <Route path="/account-register" exact element={<AccountRegister changeRe={changeRe} />} />
            <Route path="/cart" exact element={<Cart />} />
            <Route path="/delivery" exact element={<Delivery />} />

            <Route path="/wishlist" exact element={<WishList />} />
            <Route path="/search" exact element={<Search />} />

            <Route path="/:gender/:category/:productId" exact element={<ProductPage />} />

            <Route path="/:gender" exact element={<Stock />} >
              <Route path='All' element={<Stock />} />
              <Route path='Footwear' element={<Stock />} />
              <Route path='Clothing' element={<Stock />} />
              <Route path='Accessories' element={<Stock />} />

            </Route>

            
            <Route path="/my-account" exact element={<MyAccount />}>
              <Route path='order-history' element={<Orders />} />
              <Route path='profile' element={<Account changeRe={changeRe} />} />
              <Route path='address-book' element={<Account changeRe={changeRe} />} />

            </Route>




          </Routes>
        </Router>
      </div>
      <Footer changeRe={changeRe} />

    </div>
  );
}

export default App;