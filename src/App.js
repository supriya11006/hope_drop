import React, { useState } from "react";

import DonorForm from "./DonorForm";
import DonorList from "./DonorList";
import "./App.css";

function App() {

  const [showDonors, setShowDonors] = useState(false);

  const viewDonors = () => {
    setShowDonors(true);
  };

  return (

    <div className="container">

      <h1 className="title">
        HOPE DROP
      </h1>

      <DonorForm />

      <br />

      <button className="btn" onClick={viewDonors}>
        Available Donors
      </button>

      <br /><br />

      {
        showDonors && <DonorList />
      }

    </div>
  );
}

export default App;