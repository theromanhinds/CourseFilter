import React from 'react'
import Sort from './Sort';
import SubjectFilter from './SubjectFilter';
import DistributionFilter from './DistributionFilter';
import WritingFilter from './WritingFilter';
import FavoriteFilter from './FavoriteFilter';
import DayFilter from './DayFilter';

function Filter({ courses, 
                  sortOption, setSortOption,
                  isFavoriteSelected, setIsFavoriteSelected,
                  selectedSubjects, setSelectedSubjects,
                  selectedDistributions, setSelectedDistributions,
                  isWritingSelected, setIsWritingSelected,
                  selectedDays, setSelectedDays }) {
      
  return (
    <div className='FilterContainer'>
        <div className='FilterOptionsContainer'>
            <Sort sortOption={sortOption} setSortOption={setSortOption}/>
            <FavoriteFilter isFavoriteSelected={isFavoriteSelected} setIsFavoriteSelected={setIsFavoriteSelected}/>
            <SubjectFilter courses={courses} selectedSubjects={selectedSubjects} setSelectedSubjects={setSelectedSubjects} />
            <DistributionFilter courses={courses} selectedDistributions={selectedDistributions} setSelectedDistributions={setSelectedDistributions}/>
            <DayFilter courses={courses} selectedDays={selectedDays} setSelectedDays={setSelectedDays}/>
            <WritingFilter isWritingSelected={isWritingSelected} setIsWritingSelected={setIsWritingSelected}/>
      </div>
    </div>
  )
}

export default Filter