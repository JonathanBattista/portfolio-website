import React from "react";
import timelineElements from "../assets/timelineElements";
import schoolIcon from "../assets/school.svg";
import workIcon from "../assets/work.svg";

const Timeline = () => {
  return (
    <div
      className="flex flex-col justify-center items-center text-white text-base pb-8 sm:text-lg py-10"
      id="experience">
      {timelineElements.map((element) => {
        const color = "primary-color";
        const color2 = "bg-primary-color";
        return (
          <div key={element.id} className="flex m-4 relative ">
            {/* <div
              className={`${color2} w-0.5 h-8 translate-x-20 translate-y-80 opacity-60 sm:hidden`}></div>
            <div
              className={`${color2} w-0.5 h-11 translate-x-80 translate-y-80 opacity-60 sm:hidden`}></div> */}
            <div className="hidden items-start w-40 pt-0.5 relative sm:flex">
              <div className="w-4/5 text-gray-500">{element.date}</div>
              <div
                className={`${color2} w-px h-full translate-x-5 translate-y-10 opacity-30`}></div>
              <img
                src={element.icon === "school" ? schoolIcon : workIcon}
                alt="icon"
                className={`${color2} w-10 p-1 rounded-lg z-20`}
              />
              <div className="bg-primary-color h-px w-8 translate-y-5 opacity-30"></div>
            </div>
            <div className="border border-gray-600 rounded-lg px-8 py-4 w-full text-center z-10 sm:w-96 bg-gray-800">
              <div className="text-xl font-medium">{element.title}</div>
              <div className="text-gray-300 mb-6 sm:mb-8 sm:text-xs">
                {element.location}{" "}
                <span className="sm:hidden"> {element.date} </span>
              </div>
              <div className="mb-4 text-left">{element.description}</div>
              <div className="flex flex-wrap mb-6 justify-center">
                {element.tech.map((tech, index) => {
                  return (
                    <span
                      className="bg-gray-900 rounded-xl px-2 py-1 text-sm m-1"
                      key={index}>
                      {tech}
                    </span>
                  );
                })}
              </div>
              <img
                src={element.icon === "school" ? schoolIcon : workIcon}
                alt="icon"
                className={`${color2} w-8 p-1 rounded-lg z-20 absolute left-4 top-4 sm:hidden`}
              />
              <a
                href="/"
                className={`${color2} text-gray-950 font-medium px-4 py-1 rounded-md mx-auto cursor-pointer hover:text-white`}>
                {element.buttonText}
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Timeline;
