import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleCourses } from "../../services/courses/getAllCourse";
import CourseDetailCard from "../../components/cards/CourseCardDetail";
import { getAllCourses } from "../../services/courses/getAllCourse";
// import CourseCard from "../.././components/cards/CourseCard"; // Import CourseCard from "../../components/cards/CourseCard";
import CourseCard from "../../components/cards/CourseCard";

export default function CourseDetail() {
  const [course, setCourse] = useState(null); // For storing the course data
  const [error, setError] = useState(null); // For handling error
  const { slug } = useParams(); // Get the course ID from URL params

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

  useEffect(() => {
    async function fetchAllCourses() {
      let content = await getAllCourses();

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
      <Metadata
        title="SERKSA - Course Detail"
        description="SERKSA is an free E-Learning Platform that offer a wide ranges of courses. Take your time and learn from Anywhere. SERKSA was developed by CSTAD Pre-University Scholarship Students Group 3."
        author="CSTAD"
        keywords="free, learning, free courses, khmer, online"
        thumbnail={thumbnail}
      />
      <CourseDetailCard
        title={course.title}
        thumbnail={
          course.thumbnail
            ? course.thumbnail.replace("http://localhost:8080/image/", "")
            : ""
        }
        description={course.description}
        instructorUsername={course.instructorUsername}
        slug={course.slug}
        sections={course.sections}
      />
      <div className="container mx-auto mt-10 ">
        <p class="text-4xl text-primary font-bold mb-10">More Courses</p>
      </div>

      <section className="container mx-auto mt-10">
        <div className="grid grid-cols-1 gap-5 mx-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {courses.slice(0, 4).map((content) => (
            <CourseCard
              key={content.slug}
              title={content.title}
              thumbnail={content.thumbnail.replace(
                "http://localhost:8080/image/",
                ""
              )}
              description={content.description}
              instructorUsername={content.instructorUsername}
              slug={content.slug}
            />
          ))}
        </div>
      </section>
    </>
  );
}
