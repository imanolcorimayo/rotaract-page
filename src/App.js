import './App.css';


// Importamos los componentes

import NavBar from './components/nav-bar/NavBar';
import Inicio from './components/Inicio/Inicio';
import Comederos from './components/Comederos/Comederos.jsx';
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <header >
        <NavBar id="idNavBar"></NavBar>
        <Inicio></Inicio>
      </header>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sed accusantium sequi ut quaerat assumenda distinctio officia amet! Ab dolore ducimus quia beatae amet adipisci, perferendis porro aperiam dolor cupiditate.</p>
      <h2>Hola Mundo</h2>
      <Comederos></Comederos>

      <Footer></Footer>

    </div>
  );
}

export default App;
