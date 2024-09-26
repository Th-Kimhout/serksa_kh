import React from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import { Accordion } from "flowbite-react";

export default function StartedaCard({ slug,orderNo,sections }) {
  console.log("sections", sections);
  return (
    <>
      <div className="container mx-auto my-10 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
        <ReactPlayer
          url={sections[0].videos[orderNo].fileName}
          width="100%"
          height="100%"
          controls="true"
          muted="false"
        />
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
