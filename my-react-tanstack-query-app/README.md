# TanStack Query Pattern Example

This project demonstrates modern data fetching patterns using TanStack Query (formerly React Query), showcasing efficient server state management.

## Features

- **Efficient Data Fetching**: Implementation of TanStack Query patterns
- **Pagination**: Client-side pagination implementation
- **Loading States**: Proper loading and error state handling
- **Cache Management**: Demonstration of caching strategies
- **Suspense Integration**: Lazy loading with Suspense

## Key Concepts Demonstrated

### Query Configuration
- Query client setup with optimal defaults
- Stale time and cache time configuration
- Error handling and retries
- Network mode configuration

### Data Management
- Custom hooks for data fetching
- Pagination implementation
- Error boundary integration
- Loading state management

## Project Structure

```
src/
├── hooks/
│   └── useCourses.ts      # Custom hook for course data fetching
├── components/
│   └── CourseList.tsx     # Course list with pagination
├── App.tsx               # Main application setup
└── main.tsx             # Query client configuration
```

## Usage Example

```tsx
function CoursesComponent() {
  const { data, isLoading, error } = useCourses();

  if (isLoading) return <div>Loading courses...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <ul>
      {data?.map(course => (
        <li key={course.id}>{course.title}</li>
      ))}
    </ul>
  );
}
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Visit `http://localhost:5173` in your browser

## Key Learnings
- Server state management best practices
- TanStack Query configuration patterns
- Loading and error state handling
- Cache management strategies
- Performance optimization techniques
