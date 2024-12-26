import React from 'react'
import ToggleSwitch from './ToggleSwitch';

function FavoriteFilter({ isFavoriteSelected, setIsFavoriteSelected }) {
  
    // Handles checkbox toggle
    const handleCheckboxChange = (e) => {
      const isChecked = e.target.checked;
      setIsFavoriteSelected(isChecked);
    };
  
    return (
      <div className="ToggleFilterContainer">
      
      Favorites (coming soon!)

      <ToggleSwitch checked={isFavoriteSelected}
          handleCheckboxChange={handleCheckboxChange}/>

    </div>
    );
  }

export default FavoriteFilter