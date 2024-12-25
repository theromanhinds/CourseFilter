import React from 'react';

function WritingFilter({ isWritingSelected, setIsWritingSelected }) {
  
  // Handles checkbox toggle
  const handleCheckboxChange = (e) => {
    const isChecked = e.target.checked;
    setIsWritingSelected(isChecked);
  };

  return (
    <div className="WritingFilterContainer">

      <label>
        <input
          type="checkbox"
          checked={isWritingSelected}
          onChange={handleCheckboxChange}/>
        Writing Course
      </label>

    </div>
  );
}

export default WritingFilter;