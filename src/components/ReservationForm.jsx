import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function ReservationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    people: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://sheet.best/api/sheets/fded5555-ba08-4e0e-908c-9b6b47fc356c", formData)
      .then((response) => {
        
        console.log(response);
        setFormData({
          name: '',
          email: '',
          phone: '',
          date: '',
          time: '',
          people: '',
          message: '',
        });
        alert('Reservation Successful!');
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Reservation Failed!');
      });
  };

  return (
    <section id="reservation" className="reservation-section">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-md-8 offset-md-2 text-center">
            <h2 className="text-primary">Book A Table</h2>
            <p className="mb-5">Restaurant reservation table is created where users can book online restaurant tables on their own.</p>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="col-lg-4 col-md-6 form-group">
              <input type="text" name="name" className="form-control" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="col-lg-4 col-md-6 form-group">
              <input type="email" name="email" className="form-control" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="col-lg-4 col-md-6 form-group">
              <input type="tel" name="phone" className="form-control" placeholder="Your Phone" value={formData.phone} onChange={handleChange} required />
            </div>
            <div className="col-lg-4 col-md-6 form-group">
              <input type="date" name="date" className="form-control" value={formData.date} onChange={handleChange} required />
            </div>
            <div className="col-lg-4 col-md-6 form-group">
              <input type="time" name="time" className="form-control" value={formData.time} onChange={handleChange} required />
            </div>
            <div className="col-lg-4 col-md-6 form-group">
              <input type="number" name="people" className="form-control" placeholder="No. of people" value={formData.people} onChange={handleChange} required />
            </div>
          </div>
          <div className="form-group">
            <textarea name="message" className="form-control" placeholder="Message" value={formData.message} onChange={handleChange}></textarea>
          </div>
          <button type="submit" className="btn btn-primary float-right mt-3">Book a Table</button>
        </form>
      </div>
    </section>
  );
}

export default ReservationForm;
