import React from "react";
import p4 from "./assets/p4.png";
import arrow2 from "./assets/arrow2.png";
import arrr from "./assets/arrr.png";
import html from "./assets/htmtl.png";
import css from "./assets/css.png";
import js from "./assets/java.png";
import tailwind from "./assets/tailw.png";
import bootstrap from "./assets/boot.png";
import react from "./assets/react.png";
import php from "./assets/php.png";
import laravel from "./assets/lara.png";
import sql from "./assets/sql.png";
import about from "./assets/about.png";
import git from "./assets/giticon.png";
import wdp from "./assets/wpd.png";
import { FaDownload } from "react-icons/fa";
import project1 from "./assets/project4.png";
import project2 from "./assets/pro2.png";
import project3 from "./assets/project3.png";
import project4 from "./assets/project5.png";
import project5 from "./assets/pc.png";
import Heading from "./Typo/Heading";
import Subheading from "./Typo/Subheading";
import Dev from "./assets/Dev-cert.png";
import pmp from "./assets/pmp.png";

const Home = () => {
  return (
    <div>
      <section id="home">
        <div className="p-10 lg:flex  md:p-20">
          <div className="flex-1">
            <h1 className="font-bold text-center text-5xl lg:text-6xl ">
              FRONT-END DEVELOPER
            </h1>
            <h1 className="font-semibold text-center md:text-left text-4xl md:text-5xl py-10 md:pl-32">
              &lt; <span className="text-[#D613B0]">O</span>koye{" "}
              <span className="text-[#D613B0]">C</span>hisom /&gt;
            </h1>
            <div className="md:max-w-72 md:ml-44 my-12 intro">
              <p className="pl-4 text-slate-200">
                I am a front-end web developer, crafting digital experiences
                that blend creativity and functionality. I build elegant
                front-end designs, transforming ideas into powerful, scalable,
                and visually stunning web applications.
              </p>
            </div>
            <div className="text-center pb-5">
              <button className=" px-5 py-2 font-bold hover:scale-105 duration-300 ">
                {" "}
                <a
                  href="https://drive.google.com/file/d/1_bqypBc5p3qSM8geXDOQuk_l25J0In2-/view?usp=sharing"
                  download
                >
                  {" "}
                  <FaDownload size={30} /> CV
                </a>
              </button>
            </div>
          </div>
          <div className=" lg:mr-16 md:ml-16">
            <img src={p4} alt="developer" />
          </div>
        </div>
      </section>
      <section id="about">
        <div className="mx-10 lg:flex md:flex lg:mx-40">
          <div className="bg-[#0e0524] rounded-full  p-7">
            <div className="bg-[#190b3f] rounded-full  p-5">
              <img
                src={about}
                alt=""
                className="bg-[#26125e] rounded-full  p-4"
              />
            </div>
          </div>
          <div className="md:pt-5 pt-4 lg:pt-14 lg:pl-16 md:pl-8">
            <div className="flex">
              <h1 className=" font-bold text-4xl lg:text-7xl pt-10 lg:pt-6">
                About Me
              </h1>
              <img src={arrr} alt="About" />
            </div>
            <Subheading
              text="Welcome to my digital space! I'm a creative and highly skilled
            Developer with proficiency in creating visually stunning websites
            for optimal performance. My journey in the world of web development
            has been an exciting adventure, filled with challenges that I thrive
            on solving."
            />
          </div>
        </div>
        <div className=" skills">
          <h1 className="flex-1 font-bold text-5xl lg:text-7xl mt-1 ml-7 lg:ml-52 ">
            My Skills
          </h1>
          <div className=" lg:flex-2 lg:mr-52 mr-5">
            <img
              src={arrow2}
              alt="my skills"
              className="w-44 lg:w-8/12 md:w-96 mt-2"
            />
          </div>
        </div>
        <div className="flex justify-center flex-wrap mb-20 px-5 mt-8 ">
          <img src={html} alt="" className="w-20 h-20" />
          <img src={css} alt="" className="w-24 h-20 pl-9" />
          <img src={js} alt="" className="w-32 h-24" />
          <img src={php} alt="" className="w-16 h-16 mt-5" />
          <img src={laravel} alt="" className="h-24 w-40 mb-5" />
          <img src={bootstrap} alt="" className="h-20 w-24 mt-3" />
          <img src={react} alt="" className="h-20 mt-2" />
          <img src={sql} alt="" className="w-20 h-16 mt-5" />
          <img src={tailwind} alt="" className="h-24 mt-5" />
          <img src={git} alt="" className="h-20 w-20 mt-3" />
          <img src={wdp} alt="" className="h-16 w-16 mt-3" />
        </div>
      </section>
      <section id="projects">
      <div className="mx-10 lg:mx-36">
        <h1 className="text-4xl ">Professional Journey</h1>
        <p className="my-5  leading-loose">
          Over the years, I've had the privilege of contributing to various
          projects that demanded creative solutions and meticulous attention to
          detail.
        </p>
        <div className=" bg-[#150933] rounded-md p-5">
          <h1 className="text-xl ">
            Delta State Contributory Health Commission (2022 - Present){" "}
          </h1>
          <p>Front-end Web Developer</p>
          <p>
            Collaborating with other programmers to develop web projects. Fixing
            bugs, troubleshooting and resolving problems as well as ensuring
            excellent user interface.
          </p>
        </div>
        <h1 className="text-3xl mt-20">PROJECTS</h1>
        <div className="md:flex mt-10 lg:py-5">
          <div className="flex-1  mr-4">
            <Heading text="Finance Web Page" />
            <br />
            <Subheading
              text=" Developed using the react.js framework. This website is designed to
              help market a payment software and finance card that helps to make
              payment easy."
            />
            <br />
            <Subheading
              text="This finance website includes features such as user registration
              and authentication, adding and display of available products and
              services."
            />
            <br />
            <br />
            <button className=" p-2 mb-5">
              <a href="https://github.com/Avartarr/Finance_landing_page">
                Github Repo
              </a>
            </button>
          </div>
          <div className="flex-1 ">
            <img src={project1} alt="Finance website" />
          </div>
        </div>
        <div className="md:flex mt-10 lg:py-10">
          <div className="flex-1">
            <img src={project2} alt="Sneakers Website" />
          </div>
          <div className="flex-1 ml-4 mt-10 md:mt-0">
            <Heading text="E-Commerce" />
            <br />
            <Subheading
              text="A simple e-commerce web page developed using React.js. It includes
              features such as adding items to cart, checkout functionality,
              user authentication and more. This was a project completed as a React coding challenge."
            />
            <br />
            <a href="https://sneaker-selection-avartarr.koyeb.app/">
              https://sneaker-selection-avartarr.koyeb.app/
            </a>
            <br />
            <button className=" p-2">
              <a href="https://github.com/Avartarr/Sneaker">Github Repo</a>
            </button>
          </div>
        </div>
        <div className="md:flex mt-10 lg:py-5">
          <div className="flex-1 lg:py-10 md:mr-5">
            <Heading text="Everything Babies" />
            <br />
            <Subheading text="An e-commerce website developed using HTML, CSS (Bootstrap), Javascript and Laravel. Includes features such as add to cart and CRUD operation." />
          </div>
          <div className="flex-1 mt-5">
            <img src={project3} alt="Everything Babies" />
          </div>
        </div>
        <div className="md:flex mt-10 lg:py-10">
          <div className="flex-1 ">
            <img src={project4} alt="DSCHC Website" />
          </div>
          <div className="flex-1  lg:py-10 md:ml-10">
            <Heading text="DSCHC Website" />
            <br />
            <Subheading text="A company website built using HTML, CSS and Javascript. Includes a blog which can easily be used to retrieve news articles from external sources, ensuring that the content is always up to date. Also includes a feature used to count and update the number of registered users in real-time." />
            <br />
            <a href="https://dschc-web.netlify.app/">
              https://dschc-web.netlify.app/
            </a>
            <br />
            <button className=" p-2">
              <a href="https://github.com/Avartarr/DSCHC-Web">Github Repo</a>
            </button>
          </div>
        </div>
        <div className="md:flex mt-10 lg:py-10">
          <div className="flex-1 md:mr-10 lg:py-10">
            <Heading text="Chowdeck" />
            <br />
            <Subheading text="A Stutern Klutherton Hackerthon challenge. The dashboard is designed to monitor the number of customers and their activities as well as the product summary in relation to location." />
            <br />
            <button className=" p-2">
              <a href="https://github.com/IbiminaFG/team-43-ecommerce">
                Github Repo
              </a>
            </button>
          </div>
          <div className="flex-1">
            <img src={project5} alt="Customer monitoring system" />
          </div>
        </div>
      </div>
      </section>
      <div className="mx-10 lg:mx-36 mt-16 text-center">
        <h1 className="text-4xl pb-5">CERTIFICATIONS</h1>
        <div className="md:flex justify-center md:space-x-4">
          <img
            src={Dev}
            alt="Fron-end developer certificate"
            className="cert"
          />
          <img
            src={pmp}
            alt="Project Management certificate"
            className="cert"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
