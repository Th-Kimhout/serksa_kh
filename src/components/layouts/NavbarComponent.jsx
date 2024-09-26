import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Image/logo.png";
import profile from "../../assets/Image/Makara.jpg"

export function NavbarComponent() {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // Toggle the 'dark' class on the body or html element
    if (darkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };

  return (
    <>
      <header className="sticky top-0 z-10 bg-white dark:bg-textBlack">
        <nav className="bg-white dark:bg-textBlack flex justify-between items-center container mx-auto">
          <div className="flex items-center space-x-6">
            <div className="flex items-center">
              <Link to="/">
                <img
                  src={logo}
                  alt="logo image"
                  className="md:h-16 md:w-20 h-10 w-14"
                />
              </Link>
            </div>

            <ul className="hidden md:flex space-x-4 text-gray-600 dark:text-textDark text-sm">
              <li>
                <Link
                  to="/course-page"
                  className="hover:text-blueLight  dark:hover:text-blue-400"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  to="/category"
                  className="hover:text-blueLight dark:hover:text-blue-400"
                >
                  Category
                </Link>
              </li>
              <li>
                <Link
                  to="/about-page"
                  className="hover:text-blueLight dark:hover:text-blue-400"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/watch-later"
                  className="hover:text-blueLight dark:hover:text-blue-400"
                >
                  WatchLater
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex items-center md:space-x-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="border border-gray-300 dark:border-gray-700 rounded-md pl-3 px-20 py-2 text-xs dark:bg-gray-800 dark:text-gray-300"
              />
              <button className="absolute right-2 top-1 text-textGray dark:text-textDark">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-4.35-4.35M18 11a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>

            <button
              className="text-black dark:text-textDark rounded-md"
              onClick={toggleDarkMode}
              aria-label={
                darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"
              }
            >
              <i
                className={`fas ${darkMode ? "fa-sun" : "fa-moon"} h-5 w-5`}
              ></i>
            </button>

            {/* <Link to="/login">
              <img
                src="src/assets/Image/instructor.png"
                alt="Profile"
                className="h-6 w-6 rounded-full border-2 border-gray-300 dark:border-gray-700"
              />
            </Link> */}

            <div class="flex items-center space-x-3 rtl:space-x-reverse">
              <button
                type="button"
                class="flex text-sm bg-gray-800 rounded-full"
                id="user-menu-button"
                aria-expanded="false"
                data-dropdown-toggle="user-dropdown"
                data-dropdown-placement="bottom"
              >
                <span class="sr-only">Open user menu</span>
                <img
                  class="md:w-7 md:h-7 w-5 h-5 rounded-full"
                  src={profile}
                  alt="user photo"
                />
              </button>
              <div
                class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
                id="user-dropdown"
              >
                <div class="px-4 py-3">
                  <span class="block text-sm text-gray-900 dark:text-white">
                    Kong Sisovandara
                  </span>
                  <span class="block text-sm text-gray-500 truncate dark:text-gray-400">
                    sisovandara@gmail.com
                  </span>
                </div>
                <ul class="py-2" aria-labelledby="user-menu-button">
                <li>
                    <Link
                      to="/profile-page"
                      
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Profile
                    </Link>
                  </li>
                <li>
                    <Link
                      to="/login"
                      
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/register"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Register
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/register-personal-info"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Register PerInfo
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/verifyOTP"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Verify
                    </Link>
                  </li>
                  <li>
                    <a
                      href="/"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* dropdown menu */}

          <div className="md:hidden">
            <button
              id="mobile-menu-btn"
              className="text-gray-600 dark:text-textDark focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </nav>

        <div
          id="mobile-menu"
          className={`bg-white dark:bg-gray-800 border-b-2 dark:border-gray-700 p-4 md:hidden ${
            mobileMenuVisible ? "" : "hidden"
          }`}
        >
          <ul className="space-y-4 text-gray-600 dark:text-textDark font-semibold text-sm">
            <li>
              <Link
                to="/course-page"
                className="hover:text-blueLight dark:hover:text-blue-400"
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                to="/category"
                className="hover:text-blueLight dark:hover:text-blue-400"
              >
                Category
              </Link>
            </li>
            <li>
              <Link
                to="/about-page"
                className="hover:text-blueLight dark:hover:text-blue-400"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/watch-later"
                className="hover:text-blueLight dark:hover:text-blue-400"
              >
                WatchLater
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
