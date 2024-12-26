import React from 'react';
import ToggleSwitch from './ToggleSwitch';

function WritingFilter({ isWritingSelected, setIsWritingSelected }) {
  
  // Handles checkbox toggle
  const handleCheckboxChange = (e) => {
    const isChecked = e.target.checked;
    setIsWritingSelected(isChecked);
  };

  return (
    <div className="ToggleFilterContainer">
      
      Writing Course

      <ToggleSwitch checked={isWritingSelected}
          handleCheckboxChange={handleCheckboxChange}/>

    </div>
  );
}

export default WritingFilter;