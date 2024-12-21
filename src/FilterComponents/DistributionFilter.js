import React, { useState, useEffect } from 'react';

function DistributionFilter({ courses, selectedDistributions, setSelectedDistributions, setFilteredCourses }) {
  const [distributionSearch, setDistributionSearch] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Handle search input change
  const handleSearchChange = (e) => {
    setDistributionSearch(e.target.value);
  };

  // Handle distribution selection or deselection
  const handleDistributionSelect = (distribution) => {
    setSelectedDistributions((prevSelectedDistributions) => {
      if (prevSelectedDistributions.includes(distribution)) {
        return prevSelectedDistributions.filter((d) => d !== distribution);
      } else {
        return [...prevSelectedDistributions, distribution];
      }
    });

    // Clear the search input field when a distribution is selected
    setDistributionSearch('');
  };

  // Filter courses based on selected distributions
  useEffect(() => {
    let filteredCourses = [...courses];

    // Filter by Distribution if any filter is applied
    if (selectedDistributions.length > 0) {
      filteredCourses = filteredCourses.filter((course) =>
        selectedDistributions.includes(course.distSimple)
      );
    }

    setFilteredCourses(filteredCourses);
  }, [selectedDistributions, courses, setFilteredCourses]);

  // Get unique distribution options and sort them alphabetically
  const uniqueDistributions = [
    ...new Set(courses.map((course) => course.distSimple)),
  ].sort();

  return (
    <div className="DistSimpleFilterContainer">
      <p>Filter by Distribution</p>
      <div className="SearchBox">
        <input
          type="text"
          placeholder="NS"
          value={distributionSearch}
          onChange={handleSearchChange}
          onFocus={() => setIsDropdownOpen(true)}
          onBlur={() => setTimeout(() => setIsDropdownOpen(false), 200)} // Delay to allow click selection
        />
      </div>

      {isDropdownOpen && (
        <div className="DropdownContainer">
          <div className="DropdownList">
            {uniqueDistributions
              .filter((distribution) =>
                distribution.toLowerCase().includes(distributionSearch.toLowerCase())
              )
              .map((distribution) => (
                <div
                  key={distribution}
                  className="DropdownItem"
                  onClick={() => handleDistributionSelect(distribution)}
                >
                  {distribution}
                </div>
              ))}
          </div>
        </div>
      )}

      {/* Show active Distribution filters */}
      {selectedDistributions.length > 0 && (
        <div className="ActiveFilters">
          {selectedDistributions.map((distribution) => (
            <div
              key={distribution}
              className="ActiveFilterTag"
              onClick={() => handleDistributionSelect(distribution)} // Deselect the filter when clicked
            >
              {distribution} <span style={{ marginLeft: '5px' }}>&#10005;</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DistributionFilter;