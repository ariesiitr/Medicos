import React, { useState } from 'react';

const cities = [
  'Mumbai',
  'Delhi',
  'Bangalore',
  'Hyderabad',
  'Chennai',
  
];

const CityDropdown = () => {
  const [selectedCity, setSelectedCity] = useState('');

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  }

  return (
    <form>
      <label htmlFor="cityDropdown">Select City:</label>
      <select id="cityDropdown" value={selectedCity} onChange={handleCityChange}>
        <option value="">--Select City--</option>
        {cities.map(city => (
          <option key={city} value={city}>{city}</option>
        ))}
      </select>
      {selectedCity && (
        <p>You have selected: {selectedCity}</p>
      )}
    </form>
  );
};

export default CityDropdown;
