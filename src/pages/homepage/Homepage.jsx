import { PopularCard } from "../../components/cards/PopularCard";
import { CategoryCard } from "../../components/cards/CategoryCard";
import React from "react";
import hero from "../../assets/Image/hero.png";

export function Homepage() {

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container mx-auto dark:bg-gray-900">
        <div className="flex flex-col md:flex-row items-center justify-between bg-white dark:text-textDark dark:bg-gray-900 py-2">
          <div className="md:w-1/2">
            <h1 className="text-Title font-bold text-primary lg:text-heroText dark:text-primary">
              Take your time
            </h1>
            <h2 className="text-Title lg:text-heroText font-bold text-textBlack dark:text-white mt-2">
              and learn from Anywhere
            </h2>
            <p className="mt-4 text-textGray text-Description dark:text-gray-300">
              Welcome to Serksa, your gateway to limitless learning! Our
              platform offers a wide range of courses designed to help you gain
              new skills, deepen your knowledge, and achieve your goals.
            </p>
            <button className="mt-6 px-6 py-2 bg-primary dark:bg-primary text-white font-semibold rounded-full shadow-md hover:bg-green-800 transition">
              Learn now{" "}
              <i className="fa-solid fa-arrow-right-long pl-1 w-3 h-3"></i>
            </button>
          </div>

          <div className="relative mt-10 md:mt-0 md:w-1/2">
            <img src={hero} alt="Student learning" className="rounded-xl" />

            <div className="absolute top-0 right-0 bg-white dark:bg-gray-700 border border-gray-300 rounded-md shadow-md px-5 py-2 text-center">
              <p className="text-sm font-semibold text-primary dark:text-primary">
                250
              </p>
              <p className="text-xs text-primary dark:text-white">
                Active students
              </p>
            </div>

            <div className="absolute bottom-0 left-0 bg-white dark:bg-gray-700 border border-gray-300 rounded-md shadow-md p-2 px-5 py-2 text-center">
              <p className="text-sm font-semibold text-primary  dark:text-primary">
                150
              </p>
              <p className="text-xs text-primary dark:text-primary">
                Free Course
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-textBlack grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col items-start justify-start">
            <i className="fa-solid fa-headphones text-primary dark:text-primary text-heroText"></i>
            <h3 className="text-lg font-bold text-textBlack dark:text-white mt-4">
              Powerful Program
            </h3>
            <p className="text-textGray mt-2 text-Description dark:text-gray-300">
              Our programs are set up for the student in the world to study far
              away
            </p>
          </div>

          <div className="flex flex-col items-start justify-start">
            <i className="fa-solid fa-book text-primary dark:text-primary text-heroText"></i>
            <h3 className="text-lg font-bold text-textBlack dark:text-white mt-4">
              24/7 Supports
            </h3>
            <p className="text-textGray mt-2 text-Description dark:text-gray-300">
              If you have any question, you can contact our support, We will
              answer you as possible
            </p>
          </div>

          <div className="flex flex-col items-start justify-start">
            <h3 className="lg:text-2xl text-Title font-bold text-textBlack dark:text-white">
              Our best feature
            </h3>
            <h4 className="text-2xl font-bold text-primary dark:text-primary mt-2">
              Special for you
            </h4>
            <p className="text-textGray mt-4 text-Description dark:text-gray-300">
              Look into yourself, get something in return for your achievements
            </p>
          </div>
        </div>
      </div>

      <CategoryCard />

      <div className="py-14 container mx-auto bg-secondary dark:bg-gray-900 w-full mt-20">
        <h1 className="lg:text-heroText text-heroResponsive font-bold text-white text-center">
          Our popular course
        </h1>
        <p className="text-white mt-2 w-3/4 mx-auto text-center text-Description">
          Unlock your potential with Our Best Course, where expert-led lessons
          meet practical skills.
        </p>

        <div className="flex flex-col container mt-20 mx-auto">
          <h1 className="text-2xl font-bold text-left text-white md:text-heroText">
            Web development
          </h1>
          <span className="block w-32 h-2 md:w-64 bg-white mr-auto mt-3"></span>
        </div>

        <PopularCard />

        <div className="flex flex-col container mt-20 mx-auto">
          <h1 className="text-2xl font-bold text-left text-white md:text-heroText">
            Programming languages
          </h1>
          <span className="block w-32 h-2 md:w-64 bg-white mr-auto mt-3"></span>
        </div>

        <PopularCard />
      </div>

      <h1 className="lg:text-heroText container mx-auto text-heroResponsive font-bold text-black  dark:text-white text-center mt-20">
        Educational Tips{" "}
        <span className="ext-4xl font-bold text-primary dark:text-primary">
          & Tricks
        </span>
      </h1>

      {/* Trick learn */}
      <div className="container mx-auto p-4 sm:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="bg-white dark:bg-black shadow-lg rounded-lg overflow-hidden">
            <img
              src="src/assets/Image/review.png"
              alt=""
              className="w-full h-40 sm:h-48 object-cover"
            />
            <div className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-black dark:text-white">
                Review regularly
              </h3>
              <p className="text-textGray dark:text-gray-300 text-sm sm:text-base">
                Revisit previous lessons to strengthen memory retention.
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-black shadow-lg rounded-lg overflow-hidden">
            <img
              src="src/assets/Image/practise.jpg"
              alt=""
              className="w-full h-40 sm:h-48 object-cover"
            />
            <div className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-black dark:text-white">
                Practice and application
              </h3>
              <p className="text-textGray dark:text-gray-300 text-sm sm:text-base">
                Apply concepts through real-world projects and case studies.
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-black shadow-lg rounded-lg overflow-hidden">
            <img
              src="src/assets/Image/visual.jpg"
              alt=""
              className="w-full h-40 sm:h-48 object-cover"
            />
            <div className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-black dark:text-white">
                Visual learning
              </h3>
              <p className="text-textGray dark:text-gray-300 text-sm sm:text-base">
                This method emphasizes using images, diagrams, charts, and
                videos to help you grasp and retain information.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Best Course */}
      <div className="bg-green-100 dark:bg-textDark p-6 rounded-lg px-5 py-8 container mx-auto">
        <h2 className="lg:text-3xl font-bold mb-8 dark:text-textBlack">
          Best languages courses of SERKSA
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5" >
          {/* HTML */}
          <div className="flex flex-col items-center">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
              alt="HTML"
              className="w-16 h-16"
            />
            <p className="mt-2 text-center font-bold dark:text-textBlack">HTML</p>
          </div>
          {/* CSS */}
          <div className="flex flex-col items-center">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
              alt="CSS"
              className="w-16 h-16"
            />
            <p className="mt-2 text-center font-bold dark:text-textBlack">CSS</p>
          </div>
          {/* JavaScript */}
          <div className="flex flex-col items-center">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              alt="JavaScript"
              className="w-16 h-16"
            />
            <p className="mt-2 text-center font-bold dark:text-textBlack">
              JavaScript
            </p>
          </div>
          {/* Bootstrap */}
          <div className="flex flex-col items-center">
            <img
              src="src/assets/Image/Bootstrap_logo.svg.png"
              alt="JavaScript"
              className="w-16 h-16"
            />
            <p className="mt-2 text-center font-bold dark:text-textBlack">
              Bootstrap
            </p>
          </div>
          {/* Tailwind CSS */}
          <div className="flex flex-col items-center">
            <img
              src="src/assets/Image/tailwind.png"
              alt="Tailwind CSS"
              className="w-25 h-16"
            />
            <p className="mt-2 text-center font-bold dark:text-textBlack">
              Tailwind
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
