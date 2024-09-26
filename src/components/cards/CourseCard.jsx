import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faBookmark,
  faBookOpen,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { faBookmark as farBookmark } from "@fortawesome/free-regular-svg-icons";

export default function CourseCard({
  thumbnail,
  title,
  description,
  instructorUsername,
  slug
}) {
  return (
    <div className="max-w-sm bg-white border dark:bg-cardDark border-gray-200 rounded-lg cursor-pointer hover:shadow overflow-hidden ">
      <Link to={`/course-detail/${slug}`} className="relative">
        <img
          src={
            thumbnail
              ? thumbnail
              : "https://i.pinimg.com/564x/2a/86/a5/2a86a560f0559704310d98fc32bd3d32.jpg"
          }
          alt="Course Image"
          className="w-full h-44 object-cover"
        />
      </Link>

      <div className="p-5 relative">
        <div className="flex justify-between">
          <h5 className="text-xl font-bold tracking-tight line-clamp-1 dark:text-textDark text-textBlack">
            {title}
          </h5>
          <FontAwesomeIcon icon={farBookmark} className=" text-xl text-textBlack dark:text-primary" />
        </div>

        <p className="mt-2 font-normal text-textGray dark:text-textDark line-clamp-3">
          {description}
        </p>

        <div className="flex items-center mt-4">
        <Link to="/instructor-page" className="flex ">
          <img
            className="w-10 h-10 rounded-full"
            src="https://scontent.fpnh10-1.fna.fbcdn.net/v/t39.30808-6/415943102_3721121511454467_4453347415711097389_n.jpg?stp=dst-jpg_s552x414&_nc_cat=107&ccb=1-7&_nc_sid=fe5ecc&_nc_eui2=AeEeUcPtEJScJ7Yku7slzveNZM05yBQSOUpkzTnIFBI5Sh5x5cdAoftIDfrKK2ZB4g0TyO5TQHGU8FuT_MeXRkvH&_nc_ohc=BZcH03HD4fgQ7kNvgE66w7N&_nc_ht=scontent.fpnh10-1.fna&_nc_gid=ApJnMd2kpX9Wm7io5KR0acV&oh=00_AYCFBuZcj2tqq_s3GBfrT4rcPoYqwTefsvtxUePTZktWjQ&oe=66FA8551"
            alt="Instructor Photo"
          />
          <div className="ml-3">
            <p className="text-sm font-medium text-textBlack dark:text-textDark">
              {instructorUsername || "Chan Chhaya"}
            </p>
            <p className="text-sm text-gray-500 dark:text-textDark">Software Developer</p>
          </div>
          </Link>
        </div>

        <div className="mt-4 flex items-center justify-between text-gray-500">
          <div className="flex items-center">
            <FontAwesomeIcon
              icon={faBookOpen}
              className="w-5 h-5 mt-2 text-primary dark:text-primary"
            />
            <span className="ml-2 font-bold text-sm">10 Lectures</span>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon
              icon={faClock}
              className="w-5 h-5 mt-2 text-primary dark:text-primary"
            />
            <span className="ml-2 font-bold text-sm">1hr 30mins</span>
          </div>
        </div>
      </div>
    </div>
  );
}
