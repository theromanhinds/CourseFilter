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
  
  const [swatCourses, setSwatCourses] = useState([]);

  return (
    <div className="App">
      <div className='MainContainer'>
        <Filter/>
        <CourseList courses={swatCourses}/>
      </div>
    </div>
  );
}

export default App;
