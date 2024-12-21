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
  const [selectedSubjects, setSelectedSubjects] = useState([]);  // Track selected subjects filter
  const [selectedDistributions, setSelectedDistributions] = useState([]);  // Track selected distributions filter
  const [isWritingSelected, setIsWritingSelected] = useState(false);

  // Fetch courses from Firebase
  useEffect(() => {
    async function loadCourses() {
      try {
        const coursesCollection = collection(db, "courses");
        const coursesSnapshot = await getDocs(coursesCollection);

        const coursesList = coursesSnapshot.docs.map(doc => ({
          courseId: doc.id,
          ...doc.data(),
        }));

        setCourses(coursesList);
        setFilteredCourses(coursesList);  // Set all courses as the initial filtered list

      } catch (error) {
        console.error("Error fetching courses: ", error);
      }
    }

    loadCourses();
  }, []);

  // Function to apply all active filters
  const applyFilters = (courses) => {
    let filtered = [...courses];

    // Filter by selected subjects
    if (selectedSubjects.length > 0) {
      filtered = filtered.filter((course) => selectedSubjects.includes(course.subject));
    }

    // Filter by selected distributions
    if (selectedDistributions.length > 0) {
      filtered = filtered.filter((course) => selectedDistributions.includes(course.distSimple));
    }

    // Apply Writing filter
    if (isWritingSelected) {
      filtered = filtered.filter(course => course.writing === 'W');
    }

    return filtered;
  };

  // Update filteredCourses after applying filters and sorting
  useEffect(() => {
    const filteredAndSortedCourses = applyFilters(courses);
    setFilteredCourses(filteredAndSortedCourses);  // Apply filters to the courses
  }, [courses, selectedSubjects, selectedDistributions, isWritingSelected]); // Re-run when filters change

  return (
    <div className="App">
      <div className='MainContainer'>
        <Filter
          courses={courses}
          sortOption={sortOption}
          setSortOption={setSortOption}
          filteredCourses={filteredCourses}
          setFilteredCourses={setFilteredCourses}
          selectedSubjects={selectedSubjects}
          setSelectedSubjects={setSelectedSubjects}
          selectedDistributions={selectedDistributions}
          setSelectedDistributions={setSelectedDistributions}
          isWritingSelected={isWritingSelected}
          setIsWritingSelected={setIsWritingSelected}
        />
        <CourseList courses={sortCourses(filteredCourses, sortOption)} />
      </div>
    </div>
  );
}

export default App;