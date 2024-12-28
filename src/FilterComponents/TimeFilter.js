import React from 'react'
import { useState } from 'react';

function TimeFilter({ courses, selectedTimes, setSelectedTimes }) {
    
  // Handles state of text in the search field.
  const [timeSearch, setTimeSearch] = useState('');
  // Controls the open and closing of dropdown menu.
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Handles text field input change
  const handleSearchChange = (e) => {
    setTimeSearch(e.target.value);
  };

  // Handles time selection or deselection
  const handleTimeSelect = (time) => {
    setSelectedTimes((prevSelectedTimes) => {
      if (prevSelectedTimes.includes(time)) {
        return prevSelectedTimes.filter((s) => s !== time);
      } else {
        return [...prevSelectedTimes, time];
      }
    });
    setTimeSearch('');
  };
   
  // Gets unique times from the courses for dropdown menu
  const uniqueTimes = [
    ...new Set(
      courses
        .map((course) => course.times)
        .filter((time) => time) // Exclude null/undefined times
    )
  ];
  
  // Helper function to convert time to 24-hour format
  function to24Hour(time) {
    if (!time) return 0;  // Safeguard for null/undefined
    let [hour, minute] = time.match(/\d+/g);
    const period = time.slice(-2);
    
    hour = parseInt(hour);
    minute = parseInt(minute);
  
    if (period === 'pm' && hour !== 12) hour += 12;
    if (period === 'am' && hour === 12) hour = 0;
  
    return hour * 60 + minute;  // Convert to total minutes
  }
  
  // Custom sort for unique times (checks start and end times)
  const sortedTimes = uniqueTimes.sort((a, b) => {
    const [startA, endA] = a.split('-');
    const [startB, endB] = b.split('-');
  
    const startComparison = to24Hour(startA) - to24Hour(startB);
    
    // If start times are equal, compare end times
    if (startComparison === 0) {
      return to24Hour(endA) - to24Hour(endB);
    }
  
    return startComparison;
  });
   
     return (
       <div className="SearchFilterContainer">
   
         <p>Filter by Time</p>
   
         {/* SEARCH BOX */}
         <div className="SearchBox">
           <input
             className='SearchBoxInput'
             type="text"
             placeholder="8:00am"
             maxLength={"4"}
             value={timeSearch}
             onChange={handleSearchChange}
             onFocus={() => setIsDropdownOpen(true)}
             onBlur={() => setTimeout(() => setIsDropdownOpen(false), 200)} // Delay to allow click selection
           />
         </div>
         {/* SEARCH BOX */}
   
         {/* DROP DOWN MENU */}
         {isDropdownOpen && ( <div className="DropdownContainer">
   
             <div className="DropdownList">
   
               {sortedTimes.filter((time) =>
                 time.includes(timeSearch)
                 ).map((time) => ( 
                   
                   <div key={time} className="DropdownItem"
                     onClick={() => handleTimeSelect(time)}>
                     {time} 
                   </div>
   
               ))}
   
             </div>
   
         </div>)}
         {/* DROP DOWN MENU */}
   
         {/* ACTIVE FILTERS */}
         {selectedTimes.length > 0 && (
           <div className="ActiveFilters">
             {selectedTimes.map((time) => (
               <div
                 key={time}
                 className="ActiveFilterTag"
                 onClick={() => handleTimeSelect(time)}
               >
                 {time} <span style={{ marginLeft: '5px' }}>&#10005;</span>
               </div>
             ))}
           </div>
         )}
         {/* ACTIVE FILTERS */}
   
       </div>
     );
   }

export default TimeFilter