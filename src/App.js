import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { NavBar } from './components/NavBar'
import { ItemListContainer } from './components/itemListContainer/ItemListContainer';
import { ItemCount } from './components/itemCount/ItemCount';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


export function App() {

  /*const agregarProducto = (contador) =>{
      alert(`Agregaste ${contador} productos al carrito`)
  }*/

  return(
    <>
    {
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<ItemListContainer/>} />
      <Route path='/category/:categoryId' element={<ItemListContainer/>} />
      <Route path='/item/:itemId' element={<ItemDetailContainer/>} />
    </Routes>
    </BrowserRouter>
    /*
    <NavBar/>
    <ItemListContainer saludo={"Bienvenido a SuperEntradas!"}/>
    <ItemCount stock={20} initial={1} agregarProducto={agregarProducto} />
    */}
    <ItemDetailContainer/>
    </>
  );

}

export default App;