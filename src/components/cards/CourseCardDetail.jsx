import React from "react";
import { Link } from "react-router-dom";
import { Accordion } from "flowbite-react";
export default function CourseDetailCard({
  thumbnail,
  title,
  description,
  instructorUsername,
  slug,
  sections,
}) {
  console.log("section in ccd", sections);
  return (
    <>
      <div class="flex flex-col md:flex-row container mx-auto gap-2.5 mt-10 dark:bg-gray-800">
        <div class="md:w-1/2">
          <img class="rounded-2xl h-full w-full" src={thumbnail} alt="" />
        </div>

        <div class="md:w-1/2">
          <p class="text-4xl text-primary font-bold">{title}</p>
          <p class="text-lg line-clamp-3 my-2 dark:text-gray-400">
            {description}
          </p>
          <span class="text-primary bg-green-200 rounded px-4 me-2 text-lg">
            Free
          </span>
          <a href="#" class="text-lg hover:text-secondary "></a>
          <br />
          <p class="text-lg inline my-2 dark:text-gray-400">Instructor: </p>
          <a
            href="#"
            class="text-lg inline my-2 hover:text-secondary dark:text-gray-400"
          >
            {instructorUsername}
          </a>
          <Link to={`/starteda/${slug}`}>
            <button class="w-full text-white bg-primary rounded py-2 mt-2 hover:bg-primaryHover hover:text-gray-400">
              Get Started
            </button>
          </Link>
          <button class="w-full text-white bg-blueLight rounded py-2 mt-2 hover:bg-secondaryHover hover:text-gray-400">
            Watch Later
          </button>
        </div>
      </div>
      <div class="container mx-auto mt-10">
        <p class="text-3xl text-primary font-bold mb-10">Playlist</p>
        <Accordion>
          {sections &&
            sections.map((content) => (
              <Accordion.Panel>
                <Accordion.Title>{content.title}</Accordion.Title>
                <Accordion.Content>
                  <p className="mb-2 text-gray-900 dark:text-gray-400 ">
                    <ul>
                      <ul>
                        {content.videos &&
                          content.videos.map((content3) => (
                            <li key={content3.orderNo}>
                              <Link to={`/started/${slug}/${content3.orderNo}`}>
                                <p
                                  href="#"
                                  className="hover:text-secondaryHover"
                                >
                                  {content3.title}
                                </p>
                              </Link>
                            </li>
                          ))}
                      </ul>
                    </ul>
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
            ))}
        </Accordion>
      </div>
    </>
  );
}
