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

  const extractNumber = (courseNum) => {
    // Match the numeric part at the start of the string
    const match = courseNum.match(/^(\d+)/);
    return match ? parseInt(match[0], 10) : NaN;  // Default to NaN if no match
  };

  const sortedCourses = (courses) => {
    let sorted = [...courses];

    if (sortOption === 'subject-numeric') {
      // Sort by subject alphabetically first, then by course number (numeric value)
      sorted.sort((a, b) => {
        // Compare subject first
        const subjectCompare = a.subject.localeCompare(b.subject);
        if (subjectCompare !== 0) return subjectCompare;
  
        // If subjects are the same, compare by numeric course number
        const numA = extractNumber(a.courseNum);
        const numB = extractNumber(b.courseNum);
  
        // Compare the numeric values of the course numbers
        if (numA === numB) {
          // If numeric part is the same, compare the alphanumeric parts (e.g., "100A" vs "100B")
          return a.courseNum.localeCompare(b.courseNum);
        }
  
        return numA - numB;  // Compare the numeric values
      });
    } else if (sortOption === 'course-alphabetical') {
      // Sort by course title
      sorted.sort((a, b) => a.title.localeCompare(b.title));
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
