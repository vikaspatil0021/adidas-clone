import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Footer from './Components/Footer/footer';
import Header from './Components/Header/header';
import Main from './Components/main/main';

function App() {
  const [re,setRe] = useState(0)

  const changeRe =  () =>{
    setRe(Math.random());
    console.log('ok');
  }
  
  return (
    <div className="App">
      <Header changeRe={changeRe} />
      <div className='top-width'>

      <Router>
        <Routes>
        <Route path="/" exact element={<Main />} />
        </Routes>
      </Router>
      </div>
      <Footer changeRe={changeRe} />
      
    </div>
  );
}

export default App;