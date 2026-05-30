import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function DonorForm() {

  const [formData, setFormData] = useState({

    name: "",
    age: "",
    blood_group: "",
    phone: "",
    city: ""
  });

  // INPUT CHANGE
  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value
    });
  };

  // FORM SUBMIT
  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await axios.post(

        "https://blooddonation.pythonanywhere.com/add_donor",

        formData
      );

      alert(response.data.message);

      // CLEAR FORM AFTER SUBMIT
      setFormData({

        name: "",
        age: "",
        blood_group: "",
        phone: "",
        city: ""
      });

    } catch (error) {

      console.log(error);
    }
  };

  return (

    <div className="form-container">

      <form className="donor-form" onSubmit={handleSubmit}>

        <h2>Add Donor</h2>

        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="age"
          placeholder="Enter Age"
          value={formData.age}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="blood_group"
          placeholder="Blood Group"
          value={formData.blood_group}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
          required
        />

        <button type="submit">
          Add Donor
        </button>

      </form>

    </div>
  );
}

export default DonorForm;