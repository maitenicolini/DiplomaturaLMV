import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./layaout/Header";
import Footer from "./layaout/Footer";
import Nav from "./layaout/Nav";

import HomePage from "./pages/HomePage";
import ContactoPage from "./pages/ContactoPage";
import GaleriaPage from "./pages/GaleriaPage";
import NOsotrosPage from "./pages/NOsotrosPage";
import ServiciosPage from "./pages/ServiciosPage";

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />

      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/nosotros' element={<NOsotrosPage />}></Route>
          <Route path='/servicios' element={<ServiciosPage />}></Route>
          <Route path='/galeria' element={<GaleriaPage />}></Route>
          <Route path='/contacto' element={<ContactoPage />}></Route>
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
