import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./styles/index.scss"
import Home from './pages/Home'
import About from './pages/About'
import Accommodation from './pages/Accommodation'
import Error from './components/Error'




ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
      
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/About/" element={<About/>}/>
        <Route path="/Accommodation/:id" element={<Accommodation/>}/>
        <Route path="*" element={<Error/>} />
    </Routes>

    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);





