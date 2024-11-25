import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './Customer.css'; // Import the custom CSS
import { FaEdit } from "react-icons/fa"; // Import edit icon from react-icons

const Customer = () => {
  const { id } = useParams(); // Get the customer ID from the URL
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    contactNumber: "",
    idType: "NIC", // default ID type
    idValue: "",
    email: "",
    address: "",
    remark: "",
  });

  useEffect(() => {
    const fetchCustomerData = async () => {
      const customerData = {
        name: "MERN",
        contactNumber: "0112345678",
        idType: "NIC",
        idValue: "2001234567V",
        email: "mern2@gmail.com",
        address: "Colombo",
        remark: "Regular Customer",
      };
      setFormData(customerData);
    };
    fetchCustomerData();
  }, [id]);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    console.log("Form Data Saved:", formData);
    handleCloseModal();
  };

  return (
    <div className="customer-container">
      {/* Heading and Subheading */}
      <h1>Edit Customer Profile</h1>
      <h2>Customer Details</h2>

      {/* Customer Summary */}
      <div className="customer-summary">
        <p>Case ID: {id}</p>
        <p>Name: MERN</p>
        <p>Arrears Amount: $1000</p>
        <p>Contact Number: 0112345678</p>
        <div className="details-bullets">
          <span onClick={handleShowModal}>•</span>
          <span onClick={handleShowModal}>•</span>
          <span onClick={handleShowModal}>•</span>
        </div>
      </div>

      {/* Modal with Edit Icon and Input Fields */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <FaEdit
              className="edit-icon"
              onClick={() => console.log("Edit clicked")} // Optional Edit functionality
            />
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <h2>Customer Details</h2>
            <div className="modal-form">
              <div className="form-group">
                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Contact Number:</label>
                <input
                  type="text"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>NIC/PP/Driving License:</label>
                <select
                  name="idType"
                  value={formData.idType}
                  onChange={handleChange}
                >
                  <option value="NIC">NIC</option>
                  <option value="PP">Passport</option>
                  <option value="DL">Driving License</option>
                </select>
                <input
                  type="text"
                  name="idValue"
                  value={formData.idValue}
                  onChange={handleChange}
                  placeholder="Enter ID Value"
                />
              </div>
              <div className="form-group">
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Address:</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Remark:</label>
                <input
                  type="text"
                  name="remark"
                  value={formData.remark}
                  onChange={handleChange}
                />
              </div>
            </div>
            <button className="save-btn" onClick={handleSave}>
              Save Changes
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Customer;
