import './App.css';
import NavBar from './components/NavBar';
import Carousel from './components/Carousel';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import { ToastContainer } from "react-toastify";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Carousel />
      <ItemListContainer nombre="Santiago" />
      <ItemCount />
      <ToastContainer />
    </div>
  );
}

export default App;
