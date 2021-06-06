import React from 'react'
import campera from '../images/campera.jpg'

export default function() {
    function restar(event){
        if (clicks>=1){
            setClicks(clicks-1);
            }
        };
  
    function aumentar(event){
        setClicks(clicks+ 1);
        };

    const [clicks, setClicks] = React.useState(0);

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
            <div>
                <button className="col-10 m-1 btn btn-primary rounded-lg" >Add to Cart</button>
            </div>
            </div>
        </div>
    </div>

  )
}

