import React from 'react'
import Course from './Course';

function CourseList({courses}) {

  return (
    <div className='CourseList'>
      <div className='Header'> 
        <h2>SWAT Course Filter by Roman Hinds</h2>
      </div>
      {courses.length > 0 ? (
        courses.map(course => ( <Course key={course.courseId} course={course} /> ))
      ) : ( <p>No courses found for selected filters.</p> )}
    </div>
  )
}

export default CourseList