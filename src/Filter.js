import React from 'react'
import Sort from './FilterComponents/Sort';
import SubjectFilter from './FilterComponents/SubjectFilter';
import DistributionFilter from './FilterComponents/DistributionFilter';

function Filter({ courses, sortOption, setSortOption, setFilteredCourses, selectedSubjects, setSelectedSubjects, selectedDistributions, setSelectedDistributions }) {
      
  return (
    <div className='FilterContainer'>
        <div className='FilterOptionsContainer'>
            <Sort sortOption={sortOption} setSortOption={setSortOption}/>
            <SubjectFilter courses={courses} setFilteredCourses={setFilteredCourses} selectedSubjects={selectedSubjects} setSelectedSubjects={setSelectedSubjects} />
            <DistributionFilter courses={courses} setFilteredCourses={setFilteredCourses} selectedDistributions={selectedDistributions} setSelectedDistributions={setSelectedDistributions}/>
      </div>
    </div>
  )
}

export default Filter