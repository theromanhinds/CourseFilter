// Helper function to extract the numeric part of a course number
export const extractNumber = (courseNum) => {
    const match = courseNum.match(/^(\d+)/);
    return match ? parseInt(match[0], 10) : NaN; // Default to NaN if no match
  };
  
  // Function to sort the courses based on the selected sort option
  export const sortCourses = (courses, sortOption) => {
    let sorted = [...courses];
  
    if (sortOption === false) {
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
  
        return numA - numB; // Compare the numeric values
      });
    } else if (sortOption === true) {
      // Sort by course title
      sorted.sort((a, b) => a.title.localeCompare(b.title));
    }
  
    return sorted;
  };