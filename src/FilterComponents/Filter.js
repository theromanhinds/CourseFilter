import React from 'react'
import Sort from './Sort';
import SubjectFilter from './SubjectFilter';
import DistributionFilter from './DistributionFilter';
import WritingFilter from './WritingFilter';
import FavoriteFilter from './FavoriteFilter';
import DayFilter from './DayFilter';
import TimeFilter from './TimeFilter';
import InstructorFilter from './InstructorFilter';

function Filter({ courses, 
                  sortOption, setSortOption,
                  isFavoriteSelected, setIsFavoriteSelected,
                  selectedSubjects, setSelectedSubjects,
                  selectedDistributions, setSelectedDistributions,
                  isWritingSelected, setIsWritingSelected,
                  selectedDays, setSelectedDays,
                  selectedTimes, setSelectedTimes,
                  selectedInstructors, setSelectedInstructors }) {
      
  return (
    <div className='FilterContainer'>
        <div className='FilterOptionsContainer'>
            <Sort sortOption={sortOption} setSortOption={setSortOption}/>
            <FavoriteFilter isFavoriteSelected={isFavoriteSelected} setIsFavoriteSelected={setIsFavoriteSelected}/>
            <WritingFilter isWritingSelected={isWritingSelected} setIsWritingSelected={setIsWritingSelected}/>
            <SubjectFilter courses={courses} selectedSubjects={selectedSubjects} setSelectedSubjects={setSelectedSubjects} />
            <DistributionFilter courses={courses} selectedDistributions={selectedDistributions} setSelectedDistributions={setSelectedDistributions}/>
            <DayFilter courses={courses} selectedDays={selectedDays} setSelectedDays={setSelectedDays}/>
            <TimeFilter courses={courses} selectedTimes={selectedTimes} setSelectedTimes={setSelectedTimes}/>
            <InstructorFilter courses={courses} selectedInstructors={selectedInstructors} setSelectedInstructors={setSelectedInstructors}/>
      </div>
    </div>
  )
}

export default Filter