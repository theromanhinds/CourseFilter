import React from 'react';
import '../Filters.css';

function ToggleSwitch ({ checked, handleCheckboxChange }) {

  return (
    <label className="ToggleSwitch">
      <input
        type="checkbox"
        checked={checked}
        onChange={handleCheckboxChange}
      />
      <span className="Slider"></span>
    </label>
  );
};

export default ToggleSwitch;
