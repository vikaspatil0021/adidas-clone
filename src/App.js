import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Footer from './Components/Footer/footer';
import Header from './Components/Header/header';
import Main from './Components/main/main';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='top-width'>

      <Router>
        <Routes>
        <Route path="/" exact element={<Main />} />
        </Routes>
      </Router>
      </div>
      <Footer />
      
    </div>
  );
}

export default App;