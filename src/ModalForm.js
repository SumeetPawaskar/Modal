import React, { useState } from "react";
import "./ModalForm.css";

const ModalForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    dob: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const validateForm = () => {
    const { username, email, phone, dob } = formData;

    if (!username) return alert("Please fill out the username.");
    if (!email) return alert("Please fill out the email.");
    if (!email.includes("@")) return alert("Invalid email. Please check your email address.");
    if (!phone) return alert("Please fill out the phone number.");
    if (phone.length !== 10 || isNaN(phone)) return alert("Invalid phone number. Please enter a 10-digit phone number.");
    if (!dob) return alert("Please fill out the date of birth.");
    if (new Date(dob) > new Date()) return alert("Invalid date of birth. Date of birth cannot be in the future.");

    alert("Form submitted successfully!");
  };

  if (!isOpen) return null;

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Fill Details</h2>
        <form>
          <label>
            Username:
            <input id="username" type="text" value={formData.username} onChange={handleChange} />
          </label>
          <label>
            Email Address:
            <input id="email" type="email" value={formData.email} onChange={handleChange} />
          </label>
          <label>
            Phone Number:
            <input id="phone" type="text" value={formData.phone} onChange={handleChange} />
          </label>
          <label>
            Date of Birth:
            <input id="dob" type="date" value={formData.dob} onChange={handleChange} />
          </label>
          <button type="button" className="submit-button" onClick={validateForm}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalForm;
