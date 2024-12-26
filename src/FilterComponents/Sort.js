import React from 'react'

function Sort({ sortOption, setSortOption }) {
    
      // Handle sort option change
      const handleSortChange = (e) => {
        setSortOption(e.target.value);  // Update the sortOption state
      };

  return (
    <div className='SortingContainer'>
        <p>Sort</p>
        {['subject-numeric', 'course-alphabetical'].map(value => (
            <div className='SortOption' key={value}>
                <label>
                    <input type="radio" 
                    name="sort" value={value} 
                    checked={sortOption === value} 
                    onChange={handleSortChange} />
                    {value === 'subject-numeric' ? 
                    'By Subject' : 'By Title'}
                </label>
            </div>
        ))}
    </div>
  )
}

export default Sort