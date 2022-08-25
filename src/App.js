import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { NavBar } from './components/NavBar';
import {ItemListContainer} from './components/ItemListContainer';
import {ItemCount} from './components/ItemCount';
import { useState } from 'react';

function App() {

const [estadoCarrito, setEstadoCarrito] = useState ("Carrito vacio");
const [numeroProductos, setNumeroProductos] = useState(0);

const agregar = (productos)=>{
  console.log('Productos agregados', productos)
  setNumeroProductos(productos);
  setEstadoCarrito(`El carrito tiene ${productos} productos`);
}

console.log('numeroProductos', numeroProductos);

  return (
    <>
    <NavBar/>
    <ItemListContainer saludo={"Bienvenido a SuperEntradas!"}/>
    <p>{estadoCarrito}</p>
    <ItemCount stock={20} initial={0} agregarProducto={agregar}/>
    </>
  );
}

export default App;
