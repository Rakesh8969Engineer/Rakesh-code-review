import React, { useState } from "react";

const statesData = [
  {
    state: "Andhra Pradesh",
    districts: [
      "Anantapur",
      "Chittoor",
      "East Godavari",
      "Guntur",
      "Krishna",
      "Kurnool",
      "Nellore",
      "Prakasam",
      "Srikakulam",
      "Visakhapatnam",
      "Vizianagaram",
      "West Godavari",
      "YSR Kadapa"
    ]
  },
  {
    state: "Karnataka",
    districts: [
      "Bagalkot",
      "Ballari",
      "Belagavi",
      "Bengaluru Rural",
      "Bengaluru Urban",
      "Bidar",
      "Chamarajanagar",
      "Chikkaballapur",
      "Chikkamagaluru",
      "Chitradurga",
      "Dakshina Kannada",
      "Davanagere",
      "Dharwad",
      "Gadag",
      "Hassan",
      "Haveri",
      "Kalaburagi",
      "Kodagu",
      "Kolar",
      "Koppal",
      "Mandya",
      "Mysuru",
      "Raichur",
      "Ramanagara",
      "Shivamogga",
      "Tumakuru",
      "Udupi",
      "Uttara Kannada",
      "Vijayapura",
      "Yadgir"
    ]
  }
];

const IndianStates = () => {
  const [selectedState, setSelectedState] = useState("");
  const [districts, setDistricts] = useState([]);

  const handleStateChange = (event) => {
    const value = event.target.value;
    setSelectedState(value);
    const selectedStateData = statesData.find(
      (stateData) => stateData.state === value
    );
    setDistricts(selectedStateData ? selectedStateData.districts : []);
  };

  const handleReset = () => {
    setSelectedState("");
    setDistricts([]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Indian States and Districts</h1>
      <select
        value={selectedState}
        onChange={handleStateChange}
        style={{ width: 200, marginBottom: 20 }}
      >
        <option value="">Select a state</option>
        {statesData.map((stateData) => (
          <option key={stateData.state} value={stateData.state}>
            {stateData.state}
          </option>
        ))}
      </select>
      {selectedState ? (
        <div>
          <h2>Districts of {selectedState}</h2>
          <ul>
            {districts.map((district) => (
              <li key={district}>{district}</li>
            ))}
          </ul>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : (
        <p>No state selected</p>
      )}
    </div>
  );
};

export default IndianStates;
