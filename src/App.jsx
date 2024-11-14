import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Accardeon from './components/Accardeon/Accardeon';
import Card from './components/Card/Card';
import CardOne from './components/Card/Card';
import { Catalog } from './components/Catalog/Catalog';
import { Home } from './components/Home/Home';
import { CardOneProduct } from './components/CardOneComponent/CardOneComponent';

function App() {


  return (
    <>
      <Header />


      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/:id' element={<CardOneProduct />}></Route>
      </Routes>
    </>
  )
}

export default App
