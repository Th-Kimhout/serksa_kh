// import React from "react";
// import { Link } from "react-router-dom";
// import { getAllCourses } from "../../services/courses/getAllCourse";
// import CourseCard from "../../components/Cards/CourseCard";
// import { useEffect, useState } from "react";
// export default function CoursePage() {
//   const [courses, setCourses] = useState([]);
//   console.log("course", courses);
//   useEffect(() => {
//     async function fetchAllCourses() {
//       let content = await getAllCourses();
//       console.log("course", content);
//       setCourses(content);
//     }
//     fetchAllCourses();
//   }, []);
//   return (
//     <main>
//       {/* Section 1 */}
//       <section className="bg-gray-100 py-12 dark:bg-textBlack">
//         <div className="container mx-auto px-4 text-center">
//           <h1 className="text-3xl md:text-4xl font-bold text-primary dark:text-primary mb-4">
//             Here is Our Course Learning For Free
//           </h1>
//           <div className="w-full mx-auto">
//             <div className="flex flex-col md:flex-row md:space-x-2">
//               <input
//                 type="text"
//                 placeholder="Course name or keywords..."
//                 className="flex-grow border rounded-t md:rounded-l md:rounded-t-none px-4 py-2 mb-2 md:mb-0"
//               />
//               <select className="border-t border-b md:border-l-0 px-4 py-2 rounded-t-none md:rounded-none">
//                 <Link><option>CreateCourse</option></Link>
//                 <Link><option>OverviewCourse</option></Link>
//               </select>
//               <button className="bg-primary text-white px-6 py-2 rounded-b md:rounded-r dark:bg-primary">
//                 Search
//               </button>
//             </div>
//           </div>
//           <p className="mt-4 text-gray-600 text-sm md:text-base dark:text-textDark">
//             Unlock endless learning opportunities with our free courses,
//             offering high-quality content, interactive lessons, and
//             certifications to boost your skills—all at no cost!
//           </p>
//         </div>
//       </section>

//       {/* Section 2 */}
//       <section className="mt-10 w-full container mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5  mx-auto">
//           {courses.map((content) => (
//             <CourseCard
//               title={content.title}
//               thumbnail={content.thumbnail.replace(
//                 "http://localhost:8080/image/",
//                 ""
//               )}
//               description={content.description}
//               instructorUsername={content.instructorUsername}
//               slug={content.slug}
//             />
//           ))}
//         </div>
//       </section>
//     </main>
//   );
// }


import React, { useEffect, useState } from "react";
import { getAllCourses } from "../../services/courses/getAllCourse";
import CourseCard from "../../components/Cards/CourseCard";

export default function CoursePage() {
  const [courses, setCourses] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  console.log("course", courses);

  useEffect(() => {
    async function fetchAllCourses() {
      let content = await getAllCourses();
      console.log("course", content);
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
      {/* Section 1 */}
      <section className="bg-gray-100 py-12 dark:bg-textBlack">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-primary dark:text-primary mb-4">
            Here is Our Course Learning For Free
          </h1>
          <div className="w-full mx-auto">
            <div className="flex flex-col md:flex-row md:space-x-2">
              <input
                type="text"
                placeholder="Course name or keywords..."
                className="flex-grow border rounded-t md:rounded-l md:rounded-t-none px-4 py-2 mb-2 md:mb-0"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)} // Update search query state
              />
              <select className="border-t border-b md:border-l-0 px-4 py-2 rounded-t-none md:rounded-none">
                <option>CreateCourse</option>
                <option>OverviewCourse</option>
              </select>
              <button className="bg-primary text-white px-6 py-2 rounded-b md:rounded-r dark:bg-primary">
                Search
              </button>
            </div>
          </div>
          <p className="mt-4 text-gray-600 text-sm md:text-base dark:text-textDark">
            Unlock endless learning opportunities with our free courses,
            offering high-quality content, interactive lessons, and
            certifications to boost your skills—all at no cost!
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section className="mt-10 w-full container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5  mx-auto">
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
