import React, { useState } from "react";

const stateOptions = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Lakshadweep",
  "Delhi",
  "Puducherry"
];

const StateDropdown = () => {
  const [selectedState, setSelectedState] = useState("");

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
  };

  return (
    
      
      <select id="state" value={selectedState} onChange={handleStateChange}>
        <option value="">Choose your state</option>
        {stateOptions.map((state) => (
          <option key={state} value={state}>
            {state}
          </option>
        ))}
      </select>
      
   
  );
};

export default StateDropdown;