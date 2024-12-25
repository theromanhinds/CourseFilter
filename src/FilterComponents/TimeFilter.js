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
     const uniqueTimes = [...new Set(courses.map((course) => course.times))].sort();
   
     return (
       <div className="TimeFilterContainer">
   
         <p>Filter by Time</p>
   
         {/* SEARCH BOX */}
         <div className="SearchBox">
           <input
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
   
               {uniqueTimes.filter((time) =>
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