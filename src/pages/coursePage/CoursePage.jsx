import React, { useEffect, useState } from "react";
import { getAllCourses } from "../../services/courses/getAllCourse";
import CourseCard from "../../components/cards/CourseCard";
import thumbnail from "../../assets/logo.jpg";

export default function CoursePage() {
  const [courses, setCourses] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  useEffect(() => {
    async function fetchAllCourses() {
      let content = await getAllCourses();

      setCourses(content);
    }
    fetchAllCourses();
  }, []);

  // Function to handle filtering
  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main>
      <Metadata
        title="SERKSA - Courses"
        description="SERKSA is an free E-Learning Platform that offer a wide ranges of courses. Take your time and learn from Anywhere. SERKSA was developed by CSTAD Pre-University Scholarship Students Group 3."
        author="CSTAD"
        keywords="free, learning, free courses, khmer, online"
        thumbnail={thumbnail}
      />
      {/* Section 1 */}
      <section className="py-12 bg-gray-100 dark:bg-textBlack">
        <div className="container px-4 mx-auto text-center">
          <h1 className="mb-4 text-3xl font-bold md:text-4xl text-primary dark:text-primary">
            Here is Our Course Learning For Free
          </h1>
          <div className="w-full mx-auto">
            <div className="flex flex-col md:flex-row md:space-x-2">
              <input
                type="text"
                placeholder="Course name or keywords..."
                className="flex-grow px-4 py-2 mb-2 border rounded-t md:rounded-l md:rounded-t-none md:mb-0"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)} // Update search query state
              />
              <select className="px-4 py-2 border-t border-b rounded-t-none md:border-l-0 md:rounded-none">
                <option>CreateCourse</option>
                <option>OverviewCourse</option>
              </select>
              <button className="px-6 py-2 text-white rounded-b bg-primary md:rounded-r dark:bg-primary">
                Search
              </button>
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-600 md:text-base dark:text-textDark">
            Unlock endless learning opportunities with our free courses,
            offering high-quality content, interactive lessons, and
            certifications to boost your skills—all at no cost!
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section className="container w-full mx-auto mt-10">
        <div className="grid grid-cols-1 gap-5 mx-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredCourses.map((content) => (
            <CourseCard
              key={content.slug} // Add key for each CourseCard
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
    </main>
  );
}
