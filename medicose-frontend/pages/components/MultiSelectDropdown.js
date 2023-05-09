import React, { useState } from 'react';
import Select from 'react-select';
 
const options = [
   
  { value: 'sunday', label: 'Sunday' },
  { value:'monday' ,label: 'Monday'},
  { value:'tuesday',label: 'Tuesday'},
  { value:'wednesday', label:'Wednesday'},
  { value:'thursday', label: 'Thursday'},
  {value:'friday', label:'Friday'},
  { value:'saturday', label:'Saturday'}
];
 
const MultiSelectDropdown = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
 
  const handleMultiSelectChange = (selectedOptions) => {
    setSelectedOptions(selectedOptions);
  };
 
  return (
    <div>
      <Select
        options={options}
        isMulti
        onChange={handleMultiSelectChange}
        value={selectedOptions}
      />
    </div>
  );
};
 
export default MultiSelectDropdown;