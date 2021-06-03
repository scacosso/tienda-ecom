import './App.css';
import NavBar from './components/NavBar';
import Carousel from './components/Carousel';
import ItemListContainer from "./components/ItemListContainer"

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Carousel />
      <ItemListContainer nombre="Santiago" />
    </div>
  );
}

export default App;
