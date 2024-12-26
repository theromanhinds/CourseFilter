import '../Courses.css';

import React from 'react'
import Course from './Course';

function CourseList({filteredCourses, isFilterMenuOpen, setIsFilterMenuOpen}) {
  return (
    <div className='CourseList'>
      <div className='Header'> 

        {/* Mobile Filter Button */}
        <button 
          className="MobileFilterButtonCourses" 
          onClick={() => setIsFilterMenuOpen(!isFilterMenuOpen)}>
          <span style={{ marginLeft: '0px' }}>&#9776;</span>
        </button>

        <h2>The Course Filter</h2>
        {/* <p>Spring 2025 | Built by Roman Hinds '25</p> */}
      </div>
      {filteredCourses.length > 0 ? (
        filteredCourses.map(course => ( <Course key={course.courseId} course={course} /> ))
      ) : ( <p>No courses found for selected filters.</p> )}
    </div>
  )
}

export default CourseList