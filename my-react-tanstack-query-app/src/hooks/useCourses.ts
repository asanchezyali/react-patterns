import { useQuery } from "@tanstack/react-query";

interface Course {
  id: number;
  title: string;
  description: string;
  duration: string;
}

const fetchCourses = async (): Promise<Course[]> => {
  try {
    const response = await fetch("/api/courses.json");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : 'Failed to fetch courses');
  }
};

export function useCourses() {
  return useQuery({
    queryKey: ["courses"],
    queryFn: fetchCourses,
    staleTime: 1000 * 60 * 5, // Data stays fresh for 5 minutes
    gcTime: 1000 * 60 * 60, // Keep unused data in cache for 1 hour
    retry: 2, // Retry failed requests twice
    refetchOnWindowFocus: true, // Refetch when window regains focus
    refetchOnMount: true // Refetch on component mount
  });
}
