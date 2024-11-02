import React from 'react';
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { github } from "../../assets";
import { SectionWrapper } from "../../hoc";
import { projects } from "../../constants";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import { useNavigate } from "react-router-dom"; // Ensure this is imported

const Works = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const ProjectCard: React.FC<{ index: number; name: string; description: string; tags: { name: string; color: string; }[]; images: string[]; sourceCodeLink: string; }> = ({
    index,
    name,
    description,
    tags,
    images,
    sourceCodeLink,
  }) => {
    
    // Define specific view links based on the project index
    const viewLink = [
      "/project-1", // Link for project 1
      "/project-2", // Link for project 2
      "/project-3", // Link for project 3
      // Add more links as needed
    ][index]; // Select the link based on project index

    return (
      <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
        <Tilt
          glareEnable
          tiltEnable
          tiltMaxAngleX={30}
          tiltMaxAngleY={30}
          glareColor="#aaa6c3"
        >
          <div className="bg-tertiary w-full rounded-2xl p-5 sm:w-[300px]">
            <div className="relative h-[300px] w-full">
              {/* Horizontal scroll for multiple images */}
              <div className="flex overflow-x-auto gap-2">
                {images.map((image, idx) => (
                  <img
                    key={idx}
                    src={image}
                    alt={`${name} image ${idx + 1}`}
                    className="h-[300px] w-[300px] rounded-2xl object-cover"
                  />
                ))}
              </div>
              <div className="card-img_hover absolute inset-0 m-3 flex justify-end">
                <div
                  onClick={() => window.open(sourceCodeLink, "_blank")}
                  className="black-gradient flex h-10 w-10 cursor-pointer items-center justify-center rounded-full"
                >
                  <img
                    src={github}
                    alt="github"
                    className="h-1/2 w-1/2 object-contain"
                  />
                </div>
              </div>
            </div>
            <div className="mt-5">
              <h3 className="text-[24px] font-bold text-white">{name}</h3>
              <p className="text-secondary mt-2 text-[14px]">{description}</p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                  #{tag.name}
                </p>
              ))}
            </div>

            {/* Add View Button */}
            <div className="mt-5">
              <button
                onClick={() => navigate(viewLink)} // Use navigate to redirect to the project page
                className="bg-blue-black-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                View
              </button>
            </div>
          </div>
        </Tilt>
      </motion.div>
    );
  };

  return (
    <>
      <Header useMotion={true} {...config.sections.works} />

      <div className="flex w-full">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-secondary mt-3 max-w-3xl text-[17px] leading-[30px]"
        >
          {config.sections.works.content}
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
