import React from 'react'
import Sort from './FilterComponents/Sort';
import SubjectFilter from './FilterComponents/SubjectFilter';

function Filter({ courses, sortOption, setSortOption, setFilteredCourses }) {
      
  return (
    <div className='FilterContainer'>
        <div className='FilterOptionsContainer'>
            <Sort sortOption={sortOption} setSortOption={setSortOption}/>
            <SubjectFilter courses={courses} setFilteredCourses={setFilteredCourses}/>
    </div>
    </div>
  )
}

export default Filter