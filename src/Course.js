import React from 'react'

function Course({course}) {
  return (
    <div className='Course'>
      <div className='SubjectNumber'>
        <h3>{course.subject ? course.subject : "Subject Missing"}</h3> 
        <p>{course.courseNum ? course.courseNum : "CourseNum Missing"}</p>
      </div>
      <div className='TitleInstructor'>
        <h3>{course.title ? course.title : "Title Missing"}</h3> 
        <p>{course.instructor ? course.instructor : "Instructor Missing"}</p>
      </div>
      <div className='DistWriting'>
        <h3>{course.distSimple ? course.distSimple : "Dist Missing"}</h3> 
        <p>{course.writing ? course.writing : "Writing Missing"}</p>
      </div>
      <div className='DaysTimes'>
        <h3>{course.days ? course.days : "Days Missing"}</h3> 
        <p>{course.times ? course.times : "Times Missing"}</p>
      </div>
        
    </div>
  )
}

export default Course