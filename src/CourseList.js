import React from 'react'
import Course from './Course';

function CourseList({courses}) {

  return (
    <div className='CourseList'>
      {courses.map(course => (
        <Course key={course.courseId} course={course} />
      ))}
    </div>
  )
}

export default CourseList