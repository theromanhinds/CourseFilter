import React, { useState, useEffect } from 'react';

function SubjectFilter({ courses, selectedSubjects, setSelectedSubjects, setFilteredCourses }) {
  const [subjectSearch, setSubjectSearch] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Handle search input change
  const handleSearchChange = (e) => {
    setSubjectSearch(e.target.value.toUpperCase());
  };

  // Handle subject selection or deselection
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

  // Filter courses based on selected subjects
  useEffect(() => {
    if (selectedSubjects.length === 0) {
      setFilteredCourses(courses); // If no subjects selected, show all courses
    } else {
      const filtered = courses.filter((course) =>
        selectedSubjects.includes(course.subject)
      );
      setFilteredCourses(filtered);
    }
  }, [selectedSubjects, courses, setFilteredCourses]);

  // Get unique subjects from the courses
  const uniqueSubjects = [...new Set(courses.map((course) => course.subject))].sort();

  return (
    <div className="SubjectFilterContainer">
      <h3>Filter by Subject</h3>
      <div className="SearchBox">
        <input
          type="text"
          placeholder="MATH"
          value={subjectSearch}
          onChange={handleSearchChange}
          onFocus={() => setIsDropdownOpen(true)}
          onBlur={() => setTimeout(() => setIsDropdownOpen(false), 200)} // Delay to allow click selection
        />
      </div>
      {isDropdownOpen && (
        <div className="DropdownContainer">
          <div className="DropdownList">
            {uniqueSubjects
              .filter((subject) =>
                subject.toLowerCase().includes(subjectSearch.toLowerCase())
              )
              .map((subject) => (
                <div
                  key={subject}
                  className="DropdownItem"
                  onClick={() => handleSubjectSelect(subject)}
                >
                  {subject}
                </div>
              ))}
          </div>
        </div>
      )}

      {/* Show active subject filters */}
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
    </div>
  );
}

export default SubjectFilter;