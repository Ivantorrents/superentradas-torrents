import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { NavBar } from './components/NavBar'
import { ItemListContainer } from './components/itemListContainer/ItemListContainer';
import { ItemCount } from './components/itemCount/ItemCount';


export function App() {

  const agregarProducto = (contador) =>{
      alert(`Agregaste ${contador} productos al carrito`)
  }

  return(
    <>
    <NavBar/>
    <ItemListContainer saludo={"Bienvenido a SuperEntradas!"}/>
    <ItemCount stock={20} initial={1} agregarProducto={agregarProducto} />
    </>
  );

}

export default App;