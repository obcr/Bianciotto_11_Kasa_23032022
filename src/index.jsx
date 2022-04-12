import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./styles/index.scss"
import Home from './pages/Home'
import About from './pages/About'
import Accommodation from './pages/Accommodation'
import NotFound from './pages/NotFound'
import Header from './components/Header';
import Footer from './components/Footer';




ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
<Header/>
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/About/" element={<About/>}/>
        <Route path="/Accommodation/:id" element={<Accommodation/>}/>
        <Route path="*" element={<NotFound/>} />
    </Routes>
<Footer/>

    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);





