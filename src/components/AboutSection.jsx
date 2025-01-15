import React from 'react';
import aboutImage from '../img/events-3.jpg'; 

function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h2 className="section-heading">Why Choose Us?</h2>
            <p className="text-muted">Booking a table is not only convenient but also an effortless process that ensures your dining experience is seamless and enjoyable from start to finish! Whether you're planning a romantic dinner for two or a gathering with friends and family, we've got you covered.</p>
          </div>
          <div className="col-lg-6">
            <img src={aboutImage} className="img-fluid" alt="About" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
