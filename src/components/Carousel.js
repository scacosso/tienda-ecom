import React from 'react'
import sl1 from './fall_winter_21.jpg';
import sl2 from './invierno6.jpg';

export default function Carousel() {
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <img className="d-block w-100" src={sl1} data-src="holder.js/900x400?theme=social" alt="First slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={sl2} data-src="holder.js/900x400?theme=industrial" alt="Second slide" />
            </div>
          </div>
          <a className="carousel-control-prev" href="/" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="/" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
    )
}
