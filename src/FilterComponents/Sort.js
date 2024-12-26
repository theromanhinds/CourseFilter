import React from 'react'
import ToggleSwitch from './ToggleSwitch';

function Sort({ sortOption, setSortOption }) {
    
      // Handle sort option change
      const handleSortChange = (e) => {
        setSortOption(e.target.checked);
      };

  return (

    <div className="ToggleFilterContainer">
      
      Sort by Title

      <ToggleSwitch checked={sortOption}
          handleCheckboxChange={handleSortChange}/>

    </div>
    
  )
}

export default Sort