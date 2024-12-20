import React from 'react'
import { useState, useEffect } from 'react';

function Filter({ handleSortChange, sortOption }) {
      
  return (
    <div className='FilterContainer'>
        <div className='FilterOptionsContainer'>
            <div className='SortingContainer'>
                <h3>Sort</h3>
                {['subject-numeric', 'course-alphabetical', 'start-time'].map(value => (
                    <div key={value}>
                        <label>
                            <input type="radio" name="sort" value={value} checked={sortOption === value} onChange={handleSortChange} />
                            {value === 'subject-numeric' ? 'By Subject' : value === 'course-alphabetical' ? 'By Title' : 'By Time'}
                        </label>
                    </div>
                ))}
            </div>

    </div>
    </div>
  )
}

export default Filter