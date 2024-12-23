import React from 'react'
import Sort from './Sort';
import SubjectFilter from './SubjectFilter';
import DistributionFilter from './DistributionFilter';
import WritingFilter from './WritingFilter';

function Filter({ courses, sortOption, setSortOption, setFilteredCourses, selectedSubjects, setSelectedSubjects, selectedDistributions, setSelectedDistributions, isWritingSelected, setIsWritingSelected }) {
      
  return (
    <div className='FilterContainer'>
        <div className='FilterOptionsContainer'>
            <Sort sortOption={sortOption} setSortOption={setSortOption}/>
            <SubjectFilter courses={courses} setFilteredCourses={setFilteredCourses} selectedSubjects={selectedSubjects} setSelectedSubjects={setSelectedSubjects} />
            <DistributionFilter courses={courses} setFilteredCourses={setFilteredCourses} selectedDistributions={selectedDistributions} setSelectedDistributions={setSelectedDistributions}/>
            <WritingFilter courses={courses} setFilteredCourses={setFilteredCourses} isWritingSelected={isWritingSelected} setIsWritingSelected={setIsWritingSelected}/>
      </div>
    </div>
  )
}

export default Filter