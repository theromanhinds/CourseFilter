import React from 'react'
import Sort from './FilterComponents/Sort';
import SubjectFilter from './FilterComponents/SubjectFilter';
import DistributionFilter from './FilterComponents/DistributionFilter';
import WritingFilter from './FilterComponents/WritingFilter';

function Filter({ courses, sortOption, setSortOption, filteredCourses, setFilteredCourses, selectedSubjects, setSelectedSubjects, selectedDistributions, setSelectedDistributions, isWritingSelected, setIsWritingSelected }) {
      
  return (
    <div className='FilterContainer'>
        <div className='FilterOptionsContainer'>
            <Sort sortOption={sortOption} setSortOption={setSortOption}/>
            <SubjectFilter courses={courses} setFilteredCourses={setFilteredCourses} selectedSubjects={selectedSubjects} setSelectedSubjects={setSelectedSubjects} />
            <DistributionFilter courses={courses} setFilteredCourses={setFilteredCourses} selectedDistributions={selectedDistributions} setSelectedDistributions={setSelectedDistributions}/>
            <WritingFilter courses={courses} filteredCourses={filteredCourses} setFilteredCourses={setFilteredCourses} isWritingSelected={isWritingSelected} setIsWritingSelected={setIsWritingSelected}/>
      </div>
    </div>
  )
}

export default Filter