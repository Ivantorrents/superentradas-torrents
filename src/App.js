import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { NavBar } from './components/NavBar'
import { ItemListContainer } from './components/itemListContainer/ItemListContainer';

import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './components/context/cartContext';
import { CartContainer } from './components/cartContainer/CartContainer';
import { PaginaFirebase } from './components/PaginaFirebase/PaginaFirebase';


export function App() {

  /*const agregarProducto = (contador) =>{
      alert(`Agregaste ${contador} productos al carrito`)
  }*/

  return(
    <>
    <CartProvider>
      <BrowserRouter>
        <div className="App">
            <div>
                <NavBar/>
                <Routes>
                  <Route path='/' element={<ItemListContainer />}/>
                  <Route path="/category/:categoryId" element={<ItemListContainer />}/>
                  <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>
                  <Route path="/cart" element={<CartContainer/>}/>
                  <Route path='*' element={<ItemListContainer />}/>
                  <Route path="/firebase" element = {<PaginaFirebase/>}/>
                </Routes>
            </div>
        </div>
      </BrowserRouter>
    </CartProvider>
    </>
    
  );

}

export default App;