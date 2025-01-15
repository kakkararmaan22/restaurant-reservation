import React from 'react';
import menuItem1 from '../img/menu-item-1.png';
import menuItem2 from '../img/menu-item-2.png';
import heroImage from '../img/hero-img.png';
import 'bootstrap/dist/css/bootstrap.min.css';

function CarouselSection() {
  return (
    <section id="menu">
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" data-interval="2500">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={menuItem1} className="rounded mx-auto d-block" alt="Food 1" />
          </div>
          <div className="carousel-item">
            <img src={menuItem2} className="rounded mx-auto d-block" alt="Food 2" />
          </div>
          <div className="carousel-item">
            <img src={heroImage} className="rounded mx-auto d-block" alt="Food 3" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </section>
  );
}

export default CarouselSection;
