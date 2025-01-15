import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Welcome() {
  return (
    <section className="hero-section text-center">
      <div className="container">
        <h1 className="display-4">Welcome To Fooddddie's Restaurant</h1>
        <p className="lead text-white">Explore a world of flavors and indulge in culinary delights.</p>
        <Link className="btn btn-primary btn-lg" to="/reservation">Book a table</Link>
      </div>
    </section>
  );
}

export default Welcome;
