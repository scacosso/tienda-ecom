import React from 'react'
import sl1 from '../images/fall_winter_21.jpg';
import sl2 from '../images/invierno6.jpg';


export default function Carousel() {
    return (
      <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="3000">
            <img src={sl1} className="d-block w-100" alt="Temporada Otoño 2021"/>
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img src={sl2} className="d-block w-100" alt="Envios a todo el pais desde 10 prendas al por mayor"/>
          </div>
        </div>
      </div>
    )
}
