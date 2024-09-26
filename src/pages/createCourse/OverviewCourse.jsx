import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllCourses } from "../../services/courses/getAllCourse";
import { getAllCoursesPage } from "../../services/courses/getCoursePage";
import { Pagination } from "flowbite-react";
import CoursePage from "../coursePage/CoursePage";

export function OverviewCourse() {
  const [course, setCourse] = useState([]);

  const [pageCourse, setPageCourse] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      const response = await getAllCourses();
      if (response) {
        setCourse(response);
      }
      const data = await getAllCoursesPage(1, 10);
      console.table("Data: ", data);
      // setPageCourse();
    };
    fetchCourse();
  }, []);
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page) => setCurrentPage(page);
  return (
    <>
      <div className="flex items-center justify-between p-4 mt-4 rounded-lg bg-slate-200">
        <h1 className="text-2xl">Course</h1>
        <div>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Create Course
          </button>
        </div>
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Course's Title
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>

              <th scope="col" className="px-6 py-3">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            {course.map((data, index) => (
              <tr
                className="border-b odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 dark:border-gray-700"
                key={index}
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <Link to={`#`}>{data.title}</Link>
                </th>
                <td className="px-6 py-4">{data.categoryName}</td>

                <td className="px-6 py-4">{data.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* <div className="flex overflow-x-auto sm:justify-center">
          <Pagination
            currentPage={CoursePage}
            totalPages={10}
            onPageChange={onPageChange}
          />
        </div> */}
      </div>
    </>
  );
}
