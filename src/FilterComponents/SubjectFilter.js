import React from 'react'
import { useState } from 'react'

function SubjectFilter({ courses, setFilteredCourses }) {

  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [subjectSearch, setSubjectSearch] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Handle search input change
  const handleSearchChange = (e) => {
    setSubjectSearch(e.target.value);
  };

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
  const filterCourses = () => {
    if (selectedSubjects.length === 0) {
      setFilteredCourses(courses); // If no subjects selected, show all courses
    } else {
      const filtered = courses.filter((course) =>
        selectedSubjects.includes(course.subject)
      );
      setFilteredCourses(filtered);
    }
  };

  // Run the filter every time selectedSubjects changes
  React.useEffect(() => {
    filterCourses();
  }, [selectedSubjects, courses]);

  // Get unique subjects from the courses
  const uniqueSubjects = [...new Set(courses.map((course) => course.subject))].sort();

  return (
    <div className="SubjectFilterContainer">
      <h3>Filter by Subject</h3>
      <div className="SearchBox">
        <input
          type="text"
          placeholder="Search by subject"
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
              {subject} <span className="RemoveTag">x</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default SubjectFilter