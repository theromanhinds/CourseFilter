import React from 'react'

function FYSeminarFilter({ isFYSSelected, setIsFYSSelected }) {
  
    // Handles checkbox toggle
    const handleCheckboxChange = (e) => {
      const isChecked = e.target.checked;
      setIsFYSSelected(isChecked);
    };
  
    return (
      <div className="WritingFilterContainer">
  
        <label>
          <input
            type="checkbox"
            checked={isFYSSelected}
            onChange={handleCheckboxChange}/>
          First Year Seminar
        </label>
  
      </div>
    );
  }

export default FYSeminarFilter