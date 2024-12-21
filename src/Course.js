import React from 'react'

function Course({course}) {
  return (
    <div className='Course'>
      <div className='SubjectNumber'>
        <h3>{course.subject ? course.subject : "___"}</h3> 
        <p>{course.courseNum ? course.courseNum : "___"}</p>
      </div>
      <div className='TitleInstructor'>
        <h3>{course.title ? course.title : "___"}</h3> 
        <p>{course.instructor ? course.instructor : "___"}</p>
      </div>
      <div className='DistWriting'>
        <h3>{course.distSimple ? course.distSimple : "___"}</h3> 
        <p>{course.writing ? course.writing : "___"}</p>
      </div>
      <div className='DaysTimes'>
        <h3>{course.days ? course.days : "___"}</h3> 
        <p>{course.times ? course.times : "___"}</p>
      </div>
        
    </div>
  )
}

export default Course