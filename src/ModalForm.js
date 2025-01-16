import React, { useState } from "react";
import "./ModalForm.css"; 

const ModalForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    dob: "",
  });

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const validateForm = () => {
    const { username, email, phone, dob } = formData;

    
    if (!username) {
      alert("Please fill out the username.");
      return;
    }

    
    if (!email) {
      alert("Please fill out the email.");
      return;
    }
    if (!email.includes("@")) {
      alert("Invalid email. Please check your email address.");
      return;
    }

    
    if (!phone) {
      alert("Please fill out the phone number.");
      return;
    }
    if (phone.length !== 10 || isNaN(phone)) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
      return;
    }

    
    if (!dob) {
      alert("Please fill out the date of birth.");
      return;
    }
    if (new Date(dob) > new Date()) {
      alert("Invalid date of birth. Date of birth cannot be in the future.");
      return;
    }

    // Success
    alert("Form submitted successfully!");
    setIsOpen(false); 
  };

  return (
    <div className="modal">
      <button onClick={openModal} className="open-form-button">
        Open Form
      </button>

      {isOpen && (
        <div className="modal-content" onClick={closeModal}>
          <div className="form-container" onClick={(e) => e.stopPropagation()}>
            <h2>Fill Details</h2>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={formData.username}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="phone">Phone Number:</label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <label htmlFor="dob">Date of Birth:</label>
            <input
              type="date"
              id="dob"
              value={formData.dob}
              onChange={handleChange}
              required
            />

            <button
              type="button"
              className="submit-button"
              onClick={validateForm}
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalForm;
