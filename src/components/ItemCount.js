import React from 'react'
import campera from '../images/campera.jpg'
import { injectStyle } from "react-toastify/dist/inject-style";
import { toast } from "react-toastify";


export default function ItemCount() {
    const stock = 6;
    function restar(event){
        if (clicks>1){
            setClicks(clicks-1);
            }
        };
  
    function aumentar(event){
        
        if (clicks<stock)
        setClicks(clicks+ 1);
        };
    
    function addToCart(){
        if (typeof window !== "undefined") {
            injectStyle();
        }
        toast("✔️Agregaste item al carrito");
    };


    const [clicks, setClicks] = React.useState(1);

  return (
    <div className="row justify-content-center p-5">
        <div className="col-3 card m-2">
            <div>
                <img className="w-50" src={campera} alt="Campera Adidas"></img>
            </div>
            <div className="card-body">
                <h4 className="card-title">Campera Adidas</h4>
                <h5 className="font-weight-lighter">$2500</h5>
            <div className="row justify-content-center">
                <button className="col-2 m-1 btn btn-danger rounded-lg" onClick={restar}>-</button>
                <span className="col-2 m-1 border border-secondary rounded-lg">{clicks}</span>
                <button className="col-2 m-1 btn btn-success rounded-lg" onClick={aumentar}>+</button>
            </div>
            <small>Stock: {stock}</small>
            <div>
                <button className="col-10 m-1 btn btn-primary rounded-lg" onClick={addToCart}>Add to Cart</button>
            </div>
            </div>
        </div>
    </div>

  )
}

