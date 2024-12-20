import './App.css';
import { useState, useEffect } from 'react';
import CourseList from './CourseList';
import Filter from './Filter';

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyAUqqjcAQ0jv6lbJAPih4ykLuBVBrR5A88",
  authDomain: "coursefilter-9bab5.firebaseapp.com",
  projectId: "coursefilter-9bab5",
  storageBucket: "coursefilter-9bab5.appspot.com",
  messagingSenderId: "269705395549",
  appId: "1:269705395549:web:113242a0667c715fd5fcb4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function App() {

  const [swatCourses, setSwatCourses] = useState([]);
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
  
        setSwatCourses(coursesList);
  
      } catch (error) {
        console.error("Error", error);
      }
    
    }
  
    loadCourses();
  }, [])

  const sortedCourses = (courses) => {
    let sorted = [...courses];

    if (sortOption === 'subject-numeric') {
      // Sort by subject, then by title
      sorted.sort((a, b) => a.subject.localeCompare(b.subject) || a.title.localeCompare(b.title));
    } else if (sortOption === 'course-alphabetical') {
      // Sort by course title
      sorted.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOption === 'start-time') {
      // Sort by start time
      sorted.sort((a, b) => a.times.localeCompare(b.times));
    }

    return sorted;
  };

  // Handle sort option change
  const handleSortChange = (e) => {
    setSortOption(e.target.value);  // Update the sortOption state
  };

  return (
    <div className="App">
      <div className='MainContainer'>
        <Filter handleSortChange={handleSortChange} sortOption={sortOption}/>
        <CourseList courses={sortedCourses(swatCourses)}/>
      </div>
    </div>
  );
}

export default App;
