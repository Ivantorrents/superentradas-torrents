import './App.css';
import React from 'react';
import { ItemListContainer } from './components/itemListContainer/ItemListContainer';
import { NavBar } from './components/NavBar';
import { ItemCount } from './components/ItemCount';

function App() {
  const agregarProducto =(count)=>{
    alert(`agregaste ${count} items al carrito`)
  }

  return (
    <>
    <NavBar/>
    <ItemListContainer greeting={"este es un mensaje "}/>
    <ItemCount stock={20} initial={1} agregarProducto={agregarProducto}/>
    </>
  );
}

export default App;