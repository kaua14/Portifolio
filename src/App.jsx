import React from 'react';
import './App.css';
import Home from './Components/Home.jsx';
import About from './Components/AboutMe.jsx';
import Language from './Components/Languages.jsx';
import Header from './Components/Header.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
           <Route path="/language" element={<Language />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

