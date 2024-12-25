import React from 'react'

function FavoriteFilter({ isFavoriteSelected, setIsFavoriteSelected }) {
  
    // Handles checkbox toggle
    const handleCheckboxChange = (e) => {
      const isChecked = e.target.checked;
      setIsFavoriteSelected(isChecked);
    };
  
    return (
      <div className="WritingFilterContainer">
  
        <label>
          <input
            type="checkbox"
            checked={isFavoriteSelected}
            onChange={handleCheckboxChange}/>
          Favorites
        </label>
  
      </div>
    );
  }

export default FavoriteFilter