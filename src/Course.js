import React from 'react'

function Course({course}) {
  return (
    <div className='Course'>
        <h1>{course.courseId}</h1>
        <h1>{course.title}</h1>
    </div>
  )
}

export default Course