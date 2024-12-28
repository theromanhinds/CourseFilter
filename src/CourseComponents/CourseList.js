import '../Courses.css';

import React from 'react'
import Course from './Course';
import MobileCourse from './MobileCourse';

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
      ) : ( <p className='DesktopLoading'>No courses found for selected filters.</p> )}

      {filteredCourses.length > 0 ? (
        filteredCourses.map(course => ( <MobileCourse key={course.courseId} course={course} /> ))
      ) : ( <p className='MobileLoading'>No courses found for selected filters.</p> )}
    </div>
  )
}

export default CourseList