import React from 'react'

function MobileCourse({course}) {
    return (
      <div className='MobileCourse'>
        <div className='MobileCourseLeftDiv'>
            <h3>{course.title ? course.title : "___"}</h3> 
            <p>{course.instructor ? course.instructor : "___"}</p>
          <p>{course.subject ? course.subject : "___"} {course.courseNum ? course.courseNum : "___"}</p> 
        </div>
        <div className='MobileCourseRightDiv'>
            <h3>{course.days ? course.days : "___"}</h3> 
            <p>{course.times ? course.times : "___"}</p>
            <p>{course.distSimple ? course.distSimple : "___"} , {course.writing ? course.writing : "___"}</p>
        </div>
      </div>
    )
  }

export default MobileCourse