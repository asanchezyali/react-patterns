import { useState, lazy, useTransition, useMemo, Suspense } from 'react';
import { useCourses } from "./hooks/useCourses";
import './App.css'

const CourseList = lazy(() => import("./components/CourseList"));

function App() {
  const { data: courses, isLoading, error } = useCourses();
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 2;
  const [isPending, startTransition] = useTransition();

  const currentCourses = useMemo(() => {
    if (!courses) return [];
    const indexOfLastCourse = currentPage * coursesPerPage;
    const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
    return courses.slice(indexOfFirstCourse, indexOfLastCourse);
  }, [courses, currentPage, coursesPerPage]);

  if (isLoading) return (
    <div className="loading-wrapper" aria-busy="true" role="status">
      Loading courses...
    </div>
  );
  
  if (error) return (
    <div className="loading-wrapper" role="alert">
      Error loading courses: {error.message}
    </div>
  );
  
  if (!courses?.length) return (
    <div className="loading-wrapper" role="status">
      No courses found
    </div>
  );

  const pageCount = Math.ceil((courses?.length ?? 0) / coursesPerPage);

  return (
    <section>
      <h1>Learning Courses</h1>
      <Suspense fallback={
        <div className="loading-wrapper" aria-busy="true" role="status">
          Loading courses...
        </div>
      }>
        <CourseList courses={currentCourses} />
      </Suspense>
      <nav aria-label="Course pages" className="pagination">
        {Array.from({ length: pageCount }, (_, index) => (
          <button
            key={index}
            onClick={() => {
              startTransition(() => {
                setCurrentPage(index + 1);
              });
            }}
            aria-current={currentPage === index + 1 ? "page" : undefined}
            aria-label={`Page ${index + 1}`}
          >
            {index + 1}
          </button>
        ))}
      </nav>
      {isPending && (
        <div aria-live="polite" role="status" className="loading-wrapper">
          Loading new page...
        </div>
      )}
    </section>
  );
}

export default App;
