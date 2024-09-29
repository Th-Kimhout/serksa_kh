import React, { useEffect } from "react";
import { getUserInfo } from "../../services/user/userAction";
import Kimhout from "../../assets/Image/Kimhout.jpg";
import thumbnail from "../../assets/logo.jpg";
import { Metadata } from "../../lib/Metadata";

export default function Profile() {
  const [userInfo, setUserInfo] = React.useState(null); // Change initial state to null
  const [loading, setLoading] = React.useState(true); // Add loading state

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const userRes = await getUserInfo();
        setUserInfo(userRes);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };
    fetchUserInfo();
  }, []);

  // Render loading state or user info
  if (loading) {
    return <p>Loading...</p>; // Display a loading message
  }

  return (
    <section className="container max-w-xl mt-5">
      <Metadata
        title="SERKSA - Profile"
        description="SERKSA is an free E-Learning Platform that offer a wide ranges of courses. Take your time and learn from Anywhere. SERKSA was developed by CSTAD Pre-University Scholarship Students Group 3."
        author="CSTAD"
        keywords="free, learning, free courses, khmer, online"
        thumbnail={thumbnail}
      />
      <div className="flex flex-col items-center">
        <img
          src={Kimhout}
          alt="Profile Picture"
          className="object-cover mb-4 border-4 border-green-600 rounded-full w-44 h-44"
        />
      </div>
      <div>
        <h2 className="block text-xl font-bold text-gray-700 dark:text-textDark">
          Your Profile
        </h2>
        <div className="mt-3">
          <label className="block text-sm font-medium text-gray-700 dark:text-textDark">
            ID
          </label>
          <p className="p-2 mt-1 border border-gray-300 rounded-md shadow-sm dark:text-textDark">
            {userInfo?.id || "User's ID"} {/* Use optional chaining */}
          </p>
        </div>
        <div className="mt-3">
          <label className="block text-sm font-medium text-gray-700 dark:text-textDark">
            Email
          </label>
          <p className="p-2 mt-1 border border-gray-300 rounded-md shadow-sm dark:text-textDark">
            {userInfo?.email || "Email not provided"}{" "}
            {/* Use optional chaining */}
          </p>
        </div>
        <div className="mt-3">
          <label className="block text-sm font-medium text-gray-700 dark:text-textDark">
            Bio
          </label>
          <p className="p-2 mt-1 border border-gray-300 rounded-md shadow-sm dark:text-textDark">
            {userInfo?.biography || "No bio available"}{" "}
            {/* Use optional chaining */}
          </p>
        </div>
        <div className="mt-3">
          <label className="block text-sm font-medium text-gray-700 dark:text-textDark">
            Gender
          </label>
          <p className="p-2 mt-1 border border-gray-300 rounded-md shadow-sm dark:text-textDark">
            {userInfo?.gender || "Gender not specified"}{" "}
            {/* Use optional chaining */}
          </p>
        </div>
      </div>
    </section>
  );
}
