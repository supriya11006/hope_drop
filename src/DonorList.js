import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function DonorList() {

  const [donors, setDonors] = useState([]);

  useEffect(() => {
    fetchDonors();
  }, []);

  // FETCH DONORS
  const fetchDonors = async () => {

    try {

      const response = await axios.get(
        "http://blooddonation.pythonanywhere.com/donors"
      );

      setDonors(response.data);

    } catch (error) {

      console.log(error);
    }
  };

  // DELETE DONOR
  const deleteDonor = async (id) => {

    try {

      await axios.delete(
        `http://blooddonation.pythonanywhere.com/delete_donor/${id}`
      );

      alert("Donor Deleted Successfully");

      fetchDonors();

    } catch (error) {

      console.log(error);
    }
  };

  return (

    <div className="table-container">

      <h2 className="donor-title">
        Available Donors
      </h2>

      <table>

        <thead>

          <tr>

            <th>S.No</th>
            <th>Name</th>
            <th>Age</th>
            <th>Blood Group</th>
            <th>Phone</th>
            <th>City</th>
            <th>Action</th>

          </tr>

        </thead>

        <tbody>

          {
            donors.map((donor, index) => (

              <tr key={donor.id}>

                <td>{index + 1}</td>
                <td>{donor.name}</td>
                <td>{donor.age}</td>
                <td>{donor.blood_group}</td>
                <td>{donor.phone}</td>
                <td>{donor.city}</td>

                <td>

                  <button
                    className="delete-btn"
                    onClick={() => deleteDonor(donor.id)}
                  >
                    Delete
                  </button>

                </td>

              </tr>
            ))
          }

        </tbody>

      </table>

    </div>
  );
}

export default DonorList;