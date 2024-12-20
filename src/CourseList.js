import React from 'react'
import Course from './Course';

function CourseList({courses}) {

  return (
    <div className='CourseList'>
      <div className='Header'> 
        <h2>SWAT Course Filter by Roman Hinds</h2>
      </div>
      {courses.map(course => (
        <Course key={course.courseId} course={course} />
      ))}
    </div>
  )
}

export default CourseList