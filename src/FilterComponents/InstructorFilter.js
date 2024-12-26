import React from 'react'
import { useState } from 'react';

function InstructorFilter({ courses, selectedInstructors, setSelectedInstructors }) {

  // Handles state of text in the search field.
  const [instructorSearch, setInstructorSearch] = useState('');
  // Controls the open and closing of dropdown menu.
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Handles text field input change
  const handleSearchChange = (e) => {
    setInstructorSearch(e.target.value);
  };

  // Handles instructor selection or deselection
  const handleInstructorSelect = (instructor) => {
    setSelectedInstructors((prevSelectedInstructors) => {
      if (prevSelectedInstructors.includes(instructor)) {
        return prevSelectedInstructors.filter((s) => s !== instructor);
      } else {
        return [...prevSelectedInstructors, instructor];
      }
    });
    setInstructorSearch('');
  };

  // Gets unique instructors from the courses for dropdown menu
  const uniqueInstructors = [...new Set(courses.map((course) => course.instructor))].sort();

  return (
    <div className="SearchFilterContainer">

      <p>Filter by Instructor</p>

      {/* SEARCH BOX */}
      <div className="SearchBox">
        <input
          className='SearchBoxInput'
          type="text"
          placeholder="Murphy"
          maxLength={"4"}
          value={instructorSearch}
          onChange={handleSearchChange}
          onFocus={() => setIsDropdownOpen(true)}
          onBlur={() => setTimeout(() => setIsDropdownOpen(false), 200)} // Delay to allow click selection
        />
      </div>
      {/* SEARCH BOX */}

      {/* DROP DOWN MENU */}
      {isDropdownOpen && ( <div className="DropdownContainer">

          <div className="DropdownList">

            {uniqueInstructors.filter((instructor) =>
              instructor.toLowerCase().includes(instructorSearch.toLowerCase())
              ).map((instructor) => ( 
                
                <div key={instructor} className="DropdownItem"
                  onClick={() => handleInstructorSelect(instructor)}>
                  {instructor} 
                </div>

            ))}

          </div>

      </div>)}
      {/* DROP DOWN MENU */}

      {/* ACTIVE FILTERS */}
      {selectedInstructors.length > 0 && (
        <div className="ActiveFilters">
          {selectedInstructors.map((instructor) => (
            <div
              key={instructor}
              className="ActiveFilterTag"
              onClick={() => handleInstructorSelect(instructor)}
            >
              {instructor} <span style={{ marginLeft: '5px' }}>&#10005;</span>
            </div>
          ))}
        </div>
      )}
      {/* ACTIVE FILTERS */}

    </div>
  );
}

export default InstructorFilter