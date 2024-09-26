import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import RootLayout from "./components/layouts/RootLayout.jsx";
import InstructorPage from "./pages/instructorPage/InstructorPage.jsx";
import CoursePage from "./pages/coursePage/CoursePage.jsx";
import AboutPage from "./pages/aboutpage/AboutPage.jsx";
import CourseDetail from "./pages/courseDetail/CourseDetail.jsx";
import Started from "./pages/started/Started.jsx";
import Starteda from "./pages/started/Starteda.jsx";
import WatchLater from "./pages/watchLater/WatchLater.jsx";
import { Register } from "./pages/auth/Register.jsx";
import { RegisterPersonalInfo } from "./pages/auth/RegisterPersonalInfo.jsx";
import { Login } from "./pages/auth/Login.jsx";
import { OtpVerification } from "./pages/auth/Verify.jsx";
import { HelmetProvider } from "react-helmet-async";
import Profile from "./pages/profilepage/Profile.jsx";
import { CategoryCard } from "./components/Cards/CategoryCard.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/instructor-page",
        element: <InstructorPage />,
      },
      {
        path: "/course-page",
        element: <CoursePage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/verifyOTP",
        element: <OtpVerification />,
      },
      {
        path: "/about-page",
        element: <AboutPage />,
      },
      {
        path: "/watch-later",
        element: <WatchLater />,
      },
      {
        path: "/category",
        element: <CategoryCard />,
      },
      {
        path: "/course-detail/:slug",
        element: <CourseDetail />,
      },
      {
        path: "/started/:slug/:orderNo",
        element: <Started />,
      },
      {
        path: "/starteda/:slug",
        element: <Starteda />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/register-personal-info",
        element: <RegisterPersonalInfo />,
      },
      {
        path: "/otpVerification",
        element: <OtpVerification />,
      },
      {
        path: "/profile-page",
        element: <Profile />,
      },
    ],
  },
]);
const helmetContext = {};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider context={helmetContext}>
      <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>
);
