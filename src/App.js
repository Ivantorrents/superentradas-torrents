import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { NavBar } from './components/NavBar';
import {ItemListContainer} from './components/ItemListContainer';

function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer saludo={"Bienvenido a SuperEntradas!"}/>
    </>
  );
}

export default App;
