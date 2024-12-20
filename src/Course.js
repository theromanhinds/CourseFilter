import React from 'react'

function Course({course}) {
  return (
    <div className='Course'>
      <div className='SubjectNumber'>
        <h3>{course.subject ? course.subject : "???"}</h3> 
        <p>{course.courseNum ? course.courseNum : "???"}</p>
      </div>
      <div className='TitleInstructor'>
        <h3>{course.title ? course.title : "???"}</h3> 
        <p>{course.instructor ? course.instructor : "I???"}</p>
      </div>
      <div className='DistWriting'>
        <h3>{course.distSimple ? course.distSimple : "???"}</h3> 
        <p>{course.writing ? course.writing : "???"}</p>
      </div>
      <div className='DaysTimes'>
        <h3>{course.days ? course.days : "???"}</h3> 
        <p>{course.times ? course.times : "???"}</p>
      </div>
        
    </div>
  )
}

export default Course