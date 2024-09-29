import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleCourses } from "../../services/courses/getAllCourse";
import CourseDetailCard from "../../components/cards/CourseCardDetail";
import { getAllCourses } from "../../services/courses/getAllCourse";
import StartedCard from "../../components/cards/StartedCard";

export default function starteda() {
  const [course, setCourse] = useState(null); // For storing the course data
  const [error, setError] = useState(null); // For handling error
  const { slug } = useParams(); // Get the course ID from URL params
  const { orderNo } = useParams();
  let orderNo1 = parseInt(orderNo);

  useEffect(() => {
    const fetchSingleCourse = async () => {
      try {
        const fetchedCourse = await getSingleCourses(slug);
        setCourse(fetchedCourse); // Set the course data if found
      } catch (err) {
        setError(err); // Set error if the course is not found
        console.error("Error fetching course:", err);
      }
    };

    fetchSingleCourse();
  }, [slug]); // Add id as a dependency
  const [courses, setCourses] = useState([]);
  console.log("course", courses);
  useEffect(() => {
    async function fetchAllCourses() {
      let content = await getAllCourses();
      console.log("course", content);
      setCourses(content);
    }
    fetchAllCourses();
  }, []);

  if (error) {
    return (
      <p>
        {error.description ? error.description : "Error fetching the course!"}
      </p>
    ); // Display the error message
  }

  if (!course) {
    return <p>Loading...</p>; // Show loading state while fetching data
  }

  return (
    <>
      <StartedCard
        slug={course.slug}
        orderNo={orderNo1}
        sections={course.sections}
      />
    </>
  );
}
