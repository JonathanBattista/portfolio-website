import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import tailwind from "../assets/tailwind.png";
import react from "../assets/react.png";
import nodejs from "../assets/nodejs.png";
import nextjs from "../assets/nextjs.png";
import sass from "../assets/sass.png";
import express from "../assets/express.png";
import mysql from "../assets/mysql.png";
import jest from "../assets/jest.png";
import typeScript from "../assets/typescript-icon.png";
import mongoDB from "../assets/mongodb-plain-wordmark.png";
import elasticSearch from "../assets/icons8-elasticsearch-480.png";

const Skills = () => {
  return (
    <div className="border border-gray-600 bg-black text-gray-400  max-w-[1200px] mx-auto grid grid-cols-5 place-items-center">
      <h2 className="primary-color text-xl md:text-4xl font-bold m-4">
        My <br /> Tech <br /> Stack
      </h2>
      <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
        <img src={html} width={100} height={100} alt="" />
        <p className="mt-2">HTML</p>
      </div>
      <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
        <img src={css} width={100} height={100} alt="" />
        <p className="mt-2">CSS</p>
      </div>
      <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
        <img src={javascript} width={100} height={100} alt="" />
        <p className="mt-2">JavaScript</p>
      </div>
      <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
        <img src={react} width={100} height={100} alt="" />
        <p className="mt-2">React</p>
      </div>
      <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
        <img src={tailwind} width={100} height={100} alt="" />
        <p className="mt-2">Tailwind</p>
      </div>
      <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
        <img src={sass} width={100} height={100} alt="" />
        <p className="mt-2">SASS</p>
      </div>
      <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
        <img src={nodejs} width={100} height={100} alt="" />
        <p className="mt-2">Node.js</p>
      </div>
      <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
        <img src={express} width={100} height={100} alt="" />
        <p className="mt-2">Express</p>
      </div>
      <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
        <img src={mysql} width={100} height={100} alt="" />
        <p className="mt-2">MySQL</p>
      </div>
      <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
        <img src={nextjs} width={100} height={100} alt="" />
        <p className="mt-2">Next.js</p>
      </div>
      <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
        <img src={jest} width={100} height={100} alt="" />
        <p className="mt-2">Jest</p>
      </div>
      <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
        <img src={typeScript} width={100} height={100} alt="" />
        <p className="mt-2">TypeScript</p>
      </div>
      <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
        <img src={mongoDB} width={100} height={100} alt="" />
        <p className="mt-2">MongoDB</p>
      </div>
      <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
        <img src={elasticSearch} width={100} height={100} alt="" />
        <p className="mt-2">Elasticsearch</p>
      </div>
    </div>
  );
};

export default Skills;
