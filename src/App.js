import './App.css';
import { useState, useEffect } from 'react';
import { db } from './Firebase';
import { collection, getDocs } from "firebase/firestore"; 

import CourseList from './CourseList';
import Filter from './Filter';
import { sortCourses } from './FilterComponents/SortFunctions';

function App() {

  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [sortOption, setSortOption] = useState('subject-numeric');

  useEffect(() => {
    
    async function loadCourses () {

      try {
        const coursesCollection = collection(db, "courses");
        const coursesSnapshot = await getDocs(coursesCollection);
  
        const coursesList = coursesSnapshot.docs.map(doc => ({
          courseId: doc.id,  
          ...doc.data(),
        }));
  
        setCourses(coursesList);
  
      } catch (error) {
        console.error("Error", error);
      }
    
    }
  
    loadCourses();
  }, [])

  return (
    <div className="App">
      <div className='MainContainer'>
        <Filter courses={courses} sortOption={sortOption} setSortOption={setSortOption} setFilteredCourses={setFilteredCourses}/>
        <CourseList courses={sortCourses(filteredCourses, sortOption)}/>
      </div>
    </div>
  );
}

export default App;
