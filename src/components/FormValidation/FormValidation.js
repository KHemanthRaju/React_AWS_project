import React, { useState } from "react";

const FormValidation = () => {
  const initialFormData = {
    name: "",
    email: "",
    phone: "",
    pincode: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const initialError = {
    name: "",
    email: "",
    phone: "",
    pincode: "",
  };

  const [errors, setErrors] = useState(initialError);

  const validateName = (name) => {
    const nameRegex = /^[A-Za-z]+$/;
    return nameRegex.test(name);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  };

  const validatePincode = (pincode) => {
    const pincodeRegex = /^\d{6}$/;
    return pincodeRegex.test(pincode);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear the error when user starts typing
    setErrors({
      ...errors,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation logic
    const newErrors = {};
    if (!validateName(formData.name)) {
      newErrors.name = "Invalid Name";
    }

    if (!validateEmail(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!validatePhone(formData.phone)) {
      newErrors.phone = "Invalid phone number";
    }

    if (!validatePincode(formData.pincode)) {
      newErrors.pincode = "Invalid pincode";
    }

    // If there are errors, update the state
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // If no errors, proceed with form submission (you can handle this as needed)
      alert("Form submitted successfully!");
      setFormData(initialFormData);
      setErrors(initialError);
    }
  };

  return (
    <div>
      <h2>React Form with Validations</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          {errors.name && <span style={{ color: "red" }}>{errors.name}</span>}
        </div>

        <div>
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
        </div>

        <div>
          <label>Phone:</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
          {errors.phone && <span style={{ color: "red" }}>{errors.phone}</span>}
        </div>

        <div>
          <label>Pincode:</label>
          <input
            type="text"
            name="pincode"
            value={formData.pincode}
            onChange={handleInputChange}
          />
          {errors.pincode && (
            <span style={{ color: "red" }}>{errors.pincode}</span>
          )}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormValidation;
