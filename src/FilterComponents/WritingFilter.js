import React from 'react';

function WritingFilter({ isWritingSelected, setIsWritingSelected, setFilteredCourses, courses }) {
  const handleCheckboxChange = (e) => {
    const isChecked = e.target.checked;
    setIsWritingSelected(isChecked);

    // Apply filters after selection
    let filtered = [...courses];
    if (isChecked) {
      filtered = filtered.filter(course => course.writing === 'W');
    }
    setFilteredCourses(filtered);  // Update the filtered list
  };

  return (
    <div className="WritingFilterContainer">
      <label>
        <input
          type="checkbox"
          checked={isWritingSelected}
          onChange={handleCheckboxChange}
        />
        Writing Course
      </label>
    </div>
  );
}

export default WritingFilter;