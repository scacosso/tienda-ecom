import "./App.css";
import { ToastContainer } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import AppRouter from "./routers/AppRouter";
import { StoreProvider } from "./context/CartContext";

export default function App() {
  return (
    <StoreProvider>
      <div className="App">
        <AppRouter />
        <ToastContainer />
      </div>
    </StoreProvider>
  );
}
