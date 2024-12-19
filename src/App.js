import './App.css';
import { useState } from 'react';
import CourseList from './CourseList';

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

  const [showCourses, setShowCourses] = useState(false);
  const [swatCourses, setSwatCourses] = useState([])

  // const testList = [
  //     {
  //       courseId: "0001",
  //       title: "Math",
  //     },
  //     {
  //       courseId: "0002",
  //       title: "English",
  //     },
  //     {
  //       courseId: "0003",
  //       title: "Science",
  //     }
  // ]

  async function handleClick () {

    try {
      const coursesCollection = collection(db, "courses");
      const coursesSnapshot = await getDocs(coursesCollection);

      const coursesList = coursesSnapshot.docs.map(doc => ({
        courseId: doc.id,  
        ...doc.data(),
      }));

      setShowCourses(true);
      setSwatCourses(coursesList);

    } catch (error) {
      console.error("Error", error);
    }
  
  }

  return (
    <div className="App">
      <button onClick={handleClick}>
        {showCourses ? "Hide Courses" : "Show Courses"}
      </button>

      {showCourses && <CourseList courses={swatCourses} />}
    </div>
  );
}

export default App;
