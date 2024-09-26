import React from "react";
import { useEffect, useState } from "react";
import { getAllCourses } from "../../services/courses/getAllCourse";
import CourseCard from "../../components/cards/CourseCard";
import teacherChay from "../../assets/Image/instructor.jpg"

export default function InstructorPage() {
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
  return (
    <>
      <div className="container min-w-80 mx-auto p-5">
        <h1 className="text-primary font-bold text-3xl mt-5 dark:text-textDark">Instructor</h1>
        <section className=" ">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className=" grid place-content-center ">
              <img src={teacherChay} alt="image" className="rounded-full" />
            </div>
            <div className="  md:col-span-2  pt-10 lg:ps-5">
              <h2 className="font-bold text-2xl dark:text-textDark">Chan Chhaya</h2>
              <p className="text-gray-400 font-bold text-lg">
                software Developer
              </p>
              <p className="dark:text-textDark lg:text-Description ">
                Sharing is who I am, and teaching is where I am at my best,
                because I've been on both sides of that equation, and getting to
                deliver useful training is my meaningful way to be a part of the
                creative community.
              </p>
              <br />
              <p className="dark:text-textDark lg:text-Description ">
                I've spent a long time watching others learn, and teach, to
                refine how I work with you to be efficient, useful and, most
                importantly, memorable. I want you to carry what I've shown you
                into a bright future.
              </p>
              <div className="mt-5">
                <button
                  type="button"
                  class="text-blueLight bg-blue-200 border border-borderColor focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-s-lg text-sm px-5 py-2.5  mb-2 dark:bg-gray-800 dark:text-blueLight dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                >
                  Course
                </button>
                <button
                  type="button"
                  class="text-textBlack dark:text-textDark bg-white border border-borderColor focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-e-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800  dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                >
                  {courses.length ? courses.length : "0"}
                </button>
              </div>
            </div>
          </div>
        </section>
        <h2 className="font-bold text-3xl  text-primary mx-auto mt-10">
          More Course by Chan Chhaya
        </h2>
        <section className="mt-10 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5  mx-auto">
            {courses.map((content) => (
              <CourseCard
                title={content.title}
                thumbnail={content.thumbnail.replace('http://localhost:8080/image/', '')}
                description={content.description}
                instructorUsername={content.instructorUsername}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}