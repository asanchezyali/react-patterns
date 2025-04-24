import { memo } from "react";

interface Course {
  id: number;
  title: string;
  description: string;
  duration: string;
}

interface CourseListProps {
  courses: Course[];
}

const CourseList = memo(function CourseList({ courses }: CourseListProps) {
  return (
    <ul role="list" aria-label="Available courses">
      {courses.map(course => (
        <li key={course.id}>
          <article>
            <header>
              <h2>{course.title}</h2>
              <time dateTime={course.duration}>{course.duration}</time>
            </header>
            <p>{course.description}</p>
          </article>
        </li>
      ))}
    </ul>
  )
});

export default CourseList;
