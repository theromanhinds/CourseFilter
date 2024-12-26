import React from 'react'
import { useState } from 'react';

function DayFilter({ courses, setSelectedDays }) {
    
    const [activeDays, setActiveDays] = useState([]);
  
    // Handles day selection or deselection
    const handleDaySelect = (day) => {
      setSelectedDays((prevSelectedDays) => {
        if (prevSelectedDays.includes(day)) {
          return prevSelectedDays.filter((d) => d !== day);
        } else {
          return [...prevSelectedDays, day];
        }
      });
  
    setActiveDays((prev) => 
    prev.includes(day)
        ? prev.filter((d) => d !== day)  // Deselect if already active
        : [...prev, day]                 // Select if not active
    );

    };

// Get unique day options and sort them alphabetically
// TODO: Remove the blank day option from the drowndown menu
const uniqueDays = [
    ...new Set(courses.map((course) => course.days)),
].sort();

return (
    <div className="TagFilterContainer">

    <p>Filter by Day</p>
    
    {/* UNIQUE DIST */}
    {uniqueDays.length > 0 && (
        <div className="ActiveFilters">
        {uniqueDays.map((day) => (
            <div
            key={day}
            className={`ActiveFilterTag ${activeDays.includes(day) ? 'active' : ''}`}
            onClick={() => handleDaySelect(day)} // Deselect the filter when clicked
            >
            {day}
            </div>
        ))}
        </div>
    )}
    {/* UNIQUE DIST */}

    </div>
);
}

export default DayFilter