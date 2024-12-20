import React from 'react'

function Course({course}) {
  return (
    <div className='Course'>
        <h3>{course.subject} {course.courseNum}</h3>
        <h3>{course.title}</h3>
        <h3>{course.distSimple}</h3>
        <h3>{course.days}</h3>
        <h3>{course.writing}</h3>
        <h3>{course.times}</h3>
    </div>
  )
}

export default Course