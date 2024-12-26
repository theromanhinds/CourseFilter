import React, { useState } from 'react';

function SubjectFilter({ courses, selectedSubjects, setSelectedSubjects }) {

  // Handles state of text in the search field.
  const [subjectSearch, setSubjectSearch] = useState('');
  // Controls the open and closing of dropdown menu.
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Handles text field input change
  const handleSearchChange = (e) => {
    setSubjectSearch(e.target.value.toUpperCase());
  };

  // Handles subject selection or deselection
  const handleSubjectSelect = (subject) => {
    setSelectedSubjects((prevSelectedSubjects) => {
      if (prevSelectedSubjects.includes(subject)) {
        return prevSelectedSubjects.filter((s) => s !== subject);
      } else {
        return [...prevSelectedSubjects, subject];
      }
    });
    setSubjectSearch('');
  };

  // Gets unique subjects from the courses for dropdown menu
  const uniqueSubjects = [...new Set(courses.map((course) => course.subject))].sort();

  return (
    <div className="SearchFilterContainer">

      <p>Filter by Subject</p>

      {/* SEARCH BOX */}
      <div className="SearchBox">
        <input
          className='SearchBoxInput'
          type="text"
          placeholder="MATH"
          maxLength={"4"}
          value={subjectSearch}
          onChange={handleSearchChange}
          onFocus={() => setIsDropdownOpen(true)}
          onBlur={() => setTimeout(() => setIsDropdownOpen(false), 200)} // Delay to allow click selection
        />
      </div>
      {/* SEARCH BOX */}

      {/* DROP DOWN MENU */}
      {isDropdownOpen && ( <div className="DropdownContainer">

          <div className="DropdownList">

            {uniqueSubjects.filter((subject) =>
              subject.toLowerCase().includes(subjectSearch.toLowerCase())
              ).map((subject) => ( 
                
                <div key={subject} className="DropdownItem"
                  onClick={() => handleSubjectSelect(subject)}>
                  {subject} 
                </div>

            ))}

          </div>

      </div>)}
      {/* DROP DOWN MENU */}

      {/* ACTIVE FILTERS */}
      {selectedSubjects.length > 0 && (
        <div className="ActiveFilters">
          {selectedSubjects.map((subject) => (
            <div
              key={subject}
              className="ActiveFilterTag"
              onClick={() => handleSubjectSelect(subject)}
            >
              {subject} <span style={{ marginLeft: '5px' }}>&#10005;</span>
            </div>
          ))}
        </div>
      )}
      {/* ACTIVE FILTERS */}

    </div>
  );
}

export default SubjectFilter;