import React from 'react'
import ToggleSwitch from './ToggleSwitch';

function FYSeminarFilter({ isFYSSelected, setIsFYSSelected }) {
  
    // Handles checkbox toggle
    const handleCheckboxChange = (e) => {
      const isChecked = e.target.checked;
      setIsFYSSelected(isChecked);
    };
  
    return (
      <div className="ToggleFilterContainer">
      
      FY Seminar

      <ToggleSwitch checked={isFYSSelected}
          handleCheckboxChange={handleCheckboxChange}/>

    </div>
    );
  }

export default FYSeminarFilter