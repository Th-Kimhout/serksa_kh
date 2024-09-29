import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  fetchWatchLaterCourses,
  removeFromWatchLater,
} from "../../services/user/userAction"; // Ensure this is correctly imported
import CourseCard from "../../components/cards/CourseCard";

export default function WatchLater() {
  const [watchLaterCourses, setWatchLaterCourses] = useState([]);
  const accessToken = localStorage.getItem("accessToken");

  useEffect(() => {
    const loadWatchLaterCourses = async () => {
      try {
        // Fetch all courses added to Watch Later
        const courses = await fetchWatchLaterCourses(accessToken); // Ensure this API function is defined correctly
        setWatchLaterCourses(courses);
      } catch (error) {
        console.error("Error loading Watch Later courses:", error);
      }
    };

    loadWatchLaterCourses();
  }, [accessToken]);

  const handleRemoveFromWatchLater = async (courseId) => {
    try {
      // Remove the course from Watch Later
      await removeFromWatchLater(courseId, accessToken);
      setWatchLaterCourses(
        watchLaterCourses.filter((content) => content.id !== courseId)
      );
    } catch (error) {
      console.error("Error removing from Watch Later:", error);
    }
  };

  return (
    <div>
      <section className="py-5 mx-10 my-10 bg-teal-600 rounded-xl md:mx-20">
        <div className="px-4 ">
          <small className="text-gray-50 ">FREE ONLINE COURSES </small>
          <h1 className="mb-4 text-lg font-bold text-white md:text-xl lg:text-2xl xl:text-3xl">
            Sharpen Your Skills With Professional Online Courses
          </h1>
          <p className="mb-4 text-sm text-gray-50 md:text-md xl:text-2xl">
            Join our free online courses and enhance your skills today!
          </p>
          <a as={Link} to="#">
            <button className="px-3 py-1 text-lg font-semibold text-blue-600 bg-green-300 rounded-md shadow-md md:px-6 md:py-2">
              Join Now
            </button>
          </a>
        </div>
      </section>

      <section className="mx-10 md:mx-20 font-englishFont">
        <h2 className="mb-10 font-bold text-Title md:text-2xl dark:text-gray-50">
          Watching Later
        </h2>
        <div className="grid mt-4 md:grid-2 lg:grid-3 xl:grid-4">
          {watchLaterCourses.length === 0 ? (
            <p>No courses in Watch Later.</p>
          ) : (
            watchLaterCourses.map((content) => (
              <CourseCard
                key={content.id}
                courseId={content.id}
                title={content.name}
                description={content.description}
                instructorUsername={content.instructorUsername}
                onBookmarkClick={handleRemoveFromWatchLater} // Pass remove handler for Watch Later
                isWatchLater={true} // These courses are already in Watch Later
              />
            ))
          )}
        </div>
      </section>
    </div>
  );
}

{
  /* return (
    <div>
      <section className="py-5 mx-10 my-10 bg-teal-600 rounded-xl md:mx-20">
        <div className="px-4 ">
          <small className="text-gray-50 ">FREE ONLINE COURSES </small>
          <h1 className="mb-4 text-lg font-bold text-white md:text-xl lg:text-2xl xl:text-3xl">
            Sharpen Your Skills With Professional Online Courses
          </h1>
          <p className="mb-4 text-sm text-gray-50 md:text-md xl:text-2xl">
            Join our free online courses and enhance your skills today!
          </p>
          <a as={Link} to="#">
            <button className="px-3 py-1 text-lg font-semibold text-blue-600 bg-green-300 rounded-md shadow-md md:px-6 md:py-2">
              Join Now
            </button>
          </a>
        </div>
      </section>

      <section className="mx-10 md:mx-20 font-englishFont ">
        <h2 className="mb-10 font-bold text-Title md:text-2xl dark:text-gray-50">
          Watching Later
        </h2>
        <div className="grid mt-4 md:grid-2 lg:grid-3 xl:grid-4">
        <div>
      <h2 className="mb-10 font-bold text-Title md:text-2xl dark:text-gray-50">
        Watch Later
      </h2>
      <div className="grid mt-4 md:grid-2 lg:grid-3 xl:grid-4">
        {watchLaterCourses.map((course) => (
          <div key={course.id}>
            <h2>{course.name}</h2>
            <p>{course.description}</p>
            <button onClick={() => handleRemoveFromWatchLater(course.id)}>
              Remove from Watch Later
            </button>
          </div>
        ))}
      </div>
    </div>
        </div>
      </section>
    </div>
  );
 */
}
