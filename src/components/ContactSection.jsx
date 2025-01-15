import React from 'react';
import { Phone, Mail, MapPin } from 'react-feather';
import 'bootstrap/dist/css/bootstrap.min.css';

function ContactSection() {
  return (
    <section id="contact" className="contact-section text-center">
      <div className="container">
        <div className="contact-heading">
          <h1>CONTACT INFO</h1>
        </div>
        <div className="row justify-content-around">
          <div className="col-lg-4 col-md-6">
            <div className="contact-info">
              <h1>Contact</h1>
              <p><Phone /> 12345-67890</p>
              <li><Mail /> <a href="mailto:armaankakkar704@gmail.com">armaankakkar704@gmail.com</a></li>
              <li><MapPin /> <a href="https://www.google.co.in/maps/place/India/@19.6900952,61.0245166,4z/data=!3m1!4b1!4m6!3m5!1s0x30635ff06b92b791:0xd78c4fa1854213a6!8m2!3d20.593684!4d78.96288!16zL20vMDNyazA?entry=ttu">India</a></li>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="contact-info">
              <h1>Opening Times</h1>
              <p>Monday—Thursday: 08:00 — 22:00</p>
              <p>Friday—Saturday: 09:00 — 23:00</p>
              <p>Sunday: 10:00 — 17:00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


export default ContactSection;
