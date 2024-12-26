import '../Filters.css';

import React from 'react'
import Sort from './Sort';
import SubjectFilter from './SubjectFilter';
import DistributionFilter from './DistributionFilter';
import WritingFilter from './WritingFilter';
import FavoriteFilter from './FavoriteFilter';
import DayFilter from './DayFilter';
import TimeFilter from './TimeFilter';
import InstructorFilter from './InstructorFilter';
import FYSeminarFilter from './FYSeminarFilter';

function Filter({ courses, isFilterMenuOpen, setIsFilterMenuOpen,
                  sortOption, setSortOption,
                  isFavoriteSelected, setIsFavoriteSelected,
                  selectedSubjects, setSelectedSubjects,
                  selectedDistributions, setSelectedDistributions,
                  isWritingSelected, setIsWritingSelected,
                  selectedDays, setSelectedDays,
                  selectedTimes, setSelectedTimes,
                  selectedInstructors, setSelectedInstructors,
                  isFYSSelected, setIsFYSSelected,
                  clearFilters }) {
      
  return (
    <div className='FilterContainer'>
        <div className='FilterOptionsContainer'>

            {/* Mobile Filter Button */}
            <button 
            className="MobileFilterButtonFilters" 
            onClick={() => setIsFilterMenuOpen(!isFilterMenuOpen)}>
            <span style={{ marginLeft: '0px' }}>&#9776;</span>
            </button>

            <Sort sortOption={sortOption} setSortOption={setSortOption}/>
            <FavoriteFilter isFavoriteSelected={isFavoriteSelected} setIsFavoriteSelected={setIsFavoriteSelected}/>
            <WritingFilter isWritingSelected={isWritingSelected} setIsWritingSelected={setIsWritingSelected}/>
            <FYSeminarFilter isFYSSelected={isFYSSelected} setIsFYSSelected={setIsFYSSelected}/>
            <SubjectFilter courses={courses} selectedSubjects={selectedSubjects} setSelectedSubjects={setSelectedSubjects} />
            <DistributionFilter courses={courses} selectedDistributions={selectedDistributions} setSelectedDistributions={setSelectedDistributions}/>
            <DayFilter courses={courses} selectedDays={selectedDays} setSelectedDays={setSelectedDays}/>
            <TimeFilter courses={courses} selectedTimes={selectedTimes} setSelectedTimes={setSelectedTimes}/>
            <InstructorFilter courses={courses} selectedInstructors={selectedInstructors} setSelectedInstructors={setSelectedInstructors}/>
            <button onClick={clearFilters} className='ClearFilters'>Clear Filters (coming soon!)</button>
      </div>
    </div>
  )
}

export default Filter