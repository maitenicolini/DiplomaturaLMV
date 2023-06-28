
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from "./componentes/layout/Header";
import Nav from "./Nav";
import Footer from "./Footer";
import HomePage from './paginas/HomePage';
import Ejemplo1 from './paginas/Ejemplo1';
import Ejemplo2 from './paginas/Ejemplo2';
import Ejemplo3 from './paginas/Ejemplo3';
import Ejemplo4 from './paginas/Ejemplo4';
import CargaJson from './paginas/Ejemplo4';
import DatosApi from './paginas/ejemplo5';

function App() {
  return (
    <div className="App">
      {/*<Header></Header>*/}
      <Header/>
      <BrowserRouter>
           <Nav/>
           <Routes>
              <Route path="/" element={<HomePage/>}></Route>
              <Route path='/ejemplo1' element={<Ejemplo1/>}></Route>
              <Route path='/ejemplo2' element={<Ejemplo2/>}></Route>
              <Route path='/ejemplo3' element={<Ejemplo3/>}></Route>
              <Route path='/ejemplo4' element={<CargaJson/>}></Route>
              <Route path='/ejemplo5' element={<DatosApi/>}></Route>
           </Routes>
          
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
