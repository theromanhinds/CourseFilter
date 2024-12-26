import './App.css';

// REACT IMPORTS
import { useState, useEffect, useCallback } from 'react';

// FIREBASE IMPORTS
import { db } from './FirebaseComponents/Firebase';
import { collection, getDocs } from "firebase/firestore"; 

// COMPONENT & EXTERNAL FUNCTIONS IMPORTS
import CourseList from './CourseComponents/CourseList';
import Filter from './FilterComponents/Filter';
import { sortCourses } from './FilterComponents/SortFunctions';

function App() {

  // Mobile filter menu visibility
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);

  const closeMenu = () => setIsFilterMenuOpen(false);

  // This hook calls to the Firebase database and sets the inital
  // state for courses and filteredCourses.
  // TODO: Maybe replace database call with locally accessible course list.
  // TODO: Find better way to convert course list to dataset in the future.
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
        setFilteredCourses(coursesList);

      } catch (error) {
        console.error("Error fetching courses: ", error);
      }
    }

    loadCourses();
  }, []);

  // This holds the state of all the courses.
  const [courses, setCourses] = useState([]);
  // This holds the state actively displayed courses given selected filters.
  const [filteredCourses, setFilteredCourses] = useState([]);

  // This holds the state of the sorting type selected.
  const [sortOption, setSortOption] = useState(false);

  //This holds the state of if the Favorite filter is active.
  const [isFavoriteSelected, setIsFavoriteSelected] = useState(false);
  // This holds the state of all the active Subject filters.
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  // This holds the state of all the active Distribution filters.
  const [selectedDistributions, setSelectedDistributions] = useState([]);
  // This holds the state of all the active Day filters.
  const [selectedDays, setSelectedDays] = useState([]);
  // This holds the state of all the active Time filters.
  const [selectedTimes, setSelectedTimes] = useState([]);
  // This holds the state of all the active Time filters.
  const [selectedInstructors, setSelectedInstructors] = useState([]);
  //This holds the state of if the Writing filter is active.
  const [isWritingSelected, setIsWritingSelected] = useState(false);
  //This holds the state of if the FYS filter is active.
  const [isFYSSelected, setIsFYSSelected] = useState(false);

  // This function is used by the useEffect hook below to update
  // the filteredCourses state. It only runs when a filter state above changes.
  const applyFilters = useCallback((courses) => {
    let filtered = [...courses];

    // SUBJECT FILTER
    if (selectedSubjects.length > 0) {
      filtered = filtered.filter((course) => selectedSubjects.includes(course.subject));
    }
    // DISTRIBUTION FILTER
    if (selectedDistributions.length > 0) {
      filtered = filtered.filter((course) => selectedDistributions.includes(course.distSimple));
    }
    // WRITING FILTER
    if (isWritingSelected) {
      filtered = filtered.filter(course => course.writing === 'W');
    }

    // TODO: Add the remaining filter options below! Add vars to the dependency list below!

    // FAVORTIE FILTER...

    // DAY FILTER
    if (selectedDays.length > 0) {
      filtered = filtered.filter((course) => selectedDays.includes(course.days));
    }

    // TIME FILTER
    if (selectedTimes.length > 0) {
      filtered = filtered.filter((course) => selectedTimes.includes(course.times));
    }

    // INSTRUCTOR FILTER
    if (selectedInstructors.length > 0) {
      filtered = filtered.filter((course) => selectedInstructors.includes(course.instructor));
    }

    // FYS FILTER
    if (isFYSSelected) {
      filtered = filtered.filter(course => course.courseType === 'FY Seminar');
    }

    return filtered;
  }, [selectedSubjects, selectedDistributions,
      selectedDays, selectedTimes, isWritingSelected, selectedInstructors,
      isFYSSelected]);;

  // This hook calls the applyFilters function whenever a filter state changes.
  // It then updates the filteredCourses state.
  useEffect(() => {
    const filteredCoursesList = applyFilters(courses);
    setFilteredCourses(filteredCoursesList); 
  }, [courses, applyFilters]);

  const clearFilters = () => {
    // setSortOption(false);
    // setIsFavoriteSelected(false);
    // setSelectedSubjects([]);
    // setSelectedDistributions([]);
    // setSelectedDays([]);
    // setSelectedTimes([]);
    // setSelectedInstructors([]);
    // setIsWritingSelected(false);
    // setIsFYSSelected(false);
  }

  return (
    <div className="App">
      <div className='MainContainer'>

        <div className={`Overlay ${isFilterMenuOpen ? 'open' : ''}`} onClick={closeMenu}></div>

        {/* Every filter state and updating function is being passed
            to a corresponding child component.

            TODO: Find a better way to give these children
            acess to state variables and functions. */}
        <div className={`FilterMenu ${isFilterMenuOpen ? 'open' : ''}`}>
          <Filter
            isFilterMenuOpen={isFilterMenuOpen} setIsFilterMenuOpen={setIsFilterMenuOpen}
            courses={courses} setFilteredCourses={setFilteredCourses}
            sortOption={sortOption} setSortOption={setSortOption}
            isFavoriteSelected={isFavoriteSelected} setIsFavoriteSelected={setIsFavoriteSelected}
            selectedSubjects={selectedSubjects} setSelectedSubjects={setSelectedSubjects}
            selectedDistributions={selectedDistributions} setSelectedDistributions={setSelectedDistributions}
            selectedDays={selectedDays} setSelectedDays={setSelectedDays}
            selectedTimes={selectedTimes} setSelectedTimes={setSelectedTimes}
            isWritingSelected={isWritingSelected} setIsWritingSelected={setIsWritingSelected}
            selectedInstructors={selectedInstructors} setSelectedInstructors={setSelectedInstructors}
            isFYSSelected={isFYSSelected} setIsFYSSelected={setIsFYSSelected}
            clearFilters={clearFilters}
          />
        </div>

        {/* CourseList is being given a sorted list of filteredCourses,
            depending on the sortOption state that is active. 
            sortCourses is an external function. */}
        <CourseList filteredCourses={sortCourses(filteredCourses, sortOption)} 
                    isFilterMenuOpen={isFilterMenuOpen} setIsFilterMenuOpen={setIsFilterMenuOpen}/>
      </div>
    </div>
  );
}

export default App;