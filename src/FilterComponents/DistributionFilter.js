import React, { useState } from 'react';

function DistributionFilter({ courses, setSelectedDistributions }) {

  const [activeDistributions, setActiveDistributions] = useState([]);

  // Handles distribution selection or deselection
  const handleDistributionSelect = (distribution) => {
    setSelectedDistributions((prevSelectedDistributions) => {
      if (prevSelectedDistributions.includes(distribution)) {
        return prevSelectedDistributions.filter((d) => d !== distribution);
      } else {
        return [...prevSelectedDistributions, distribution];
      }
    });

    setActiveDistributions((prev) => 
      prev.includes(distribution)
        ? prev.filter((d) => d !== distribution)  // Deselect if already active
        : [...prev, distribution]                 // Select if not active
    );

  };

  // Get unique distribution options and sort them alphabetically
  // TODO: Remove the blank distribution option from the drowndown menu
  // const uniqueDistributions = [
  //   ...new Set(courses.map((course) => course.distSimple)),
  // ].sort();

  const uniqueDistributions = ['HU', 'NS', 'SS'];

  return (
    <div className="TagFilterContainer">

      <p>Filter by Distribution</p>
      
      {/* UNIQUE DIST */}
      {uniqueDistributions.length > 0 && (
        <div className="ActiveFilters">
          {uniqueDistributions.map((distribution) => (
            <div
              key={distribution}
              className={`ActiveFilterTag ${activeDistributions.includes(distribution) ? 'active' : ''}`}
              onClick={() => handleDistributionSelect(distribution)} // Deselect the filter when clicked
            >
              {distribution}
            </div>
          ))}
        </div>
      )}
      {/* UNIQUE DIST */}

    </div>
  );
}

export default DistributionFilter;