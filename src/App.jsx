import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js'
import NavbarHtml from './components/navbarHtml';
import Carrusel from './components/Carrusel';
import ItemListContainer from './components/ItemListContainer'



function App() {
  return (
    <div>
      <NavbarHtml/>
      <Carrusel/>
      <ItemListContainer greeting='Bienvenidos a AN Celulares' texto='Otra prop'/>


    </div>
  )
}
export default App