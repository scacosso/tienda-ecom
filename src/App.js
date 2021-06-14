import './App.css';
import NavBar from './components/NavBar';

import ItemListContainer from './components/ItemListContainer';
import Carousel from './components/Carousel'
import { ToastContainer } from "react-toastify";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Carousel />
      <div className="row justify-content-center">
      <ItemListContainer />
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
