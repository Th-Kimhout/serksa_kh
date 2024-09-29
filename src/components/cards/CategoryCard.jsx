import { Link } from "react-router-dom";
import { Metadata } from "../../lib/Metadata";
const tips = [
  {
    title: "Web development",
    description: "7 Courses",
    image:
      "https://www.elegantthemes.com/blog/wp-content/uploads/2018/12/top11.png",
  },
  {
    title: "Photography",
    description: "2 Courses",
    image:
      "https://aaftonline.com/blog/wp-content/uploads/2024/01/What-are-the-Benefits-of-Photography-Complete-Overview.png",
  },
  {
    title: "Marketing",
    description: "2 Courses",
    image:
      "https://builtin.com/sites/www.builtin.com/files/styles/ckeditor_optimize/public/inline-images/marketing-pillar-page-marketing-overview_0.png",
  },
  {
    title: "Programming languages",
    description: "10 Courses",
    image:
      "https://bairesdev.mo.cloudinary.net/blog/2022/01/programming-languages-1.jpg?tx=w_1920,q_auto",
  },
  {
    title: "Financial",
    description: "3 Courses",
    image:
      "https://puritygel.com.mx/wp-content/uploads/2018/06/5_0016_apple-brainstorming-business-908288.jpg",
  },
  {
    title: "Engineering drawing",
    description: "2 Courses",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2024/3/405542886/UX/OO/KJ/215532981/engineering-drawing-services.jpeg",
  },
];

export function CategoryCard() {
  return (
    <div className="container mx-auto">
      <Metadata
        title="SERKSA - Category"
        description="SERKSA is an free E-Learning Platform that offer a wide ranges of courses. Take your time and learn from Anywhere. SERKSA was developed by CSTAD Pre-University Scholarship Students Group 3."
        author="CSTAD"
        keywords="free, learning, free courses, khmer, online"
        thumbnail={thumbnail}
      />
      <div
        data-aos="fade-up"
        data-aos-delay="30"
        data-aos-duration="10"
        className="mt-20 text-center"
      >
        <h1 className="text-4xl font-bold text-primary dark:text-primary">
          All Categories
        </h1>
        <p className="mt-2 text-textGray text-Description dark:text-textDark">
          Gain comprehensive knowledge and skills through our expertly designed
          courses, tailored to enhance your learning experience.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-5 mt-20 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-8">
        {tips.map((tip, index) => (
          <Link to="/course-page">
            <div
              key={index}
              className="max-w-sm bg-white border border-gray-200 rounded-lg cursor-pointer hover:shadow dark:bg-textBlack dark:border-gray-700"
            >
              <a href="#">
                <img
                  className="object-cover w-full rounded-t-lg h-44"
                  src={tip.image}
                  alt={tip.title}
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 font-bold tracking-tight text-center text-Title text-textBlack dark:text-textDark">
                    {tip.title}
                  </h5>
                </a>
                <p className="font-normal text-center text-gray-700 dark:text-gray-400">
                  {tip.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
