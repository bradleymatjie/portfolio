"use client";
import "./portfolio.scss";
import VigorCrossfit from "./vigor.png";
import myBike from "./myBike.png";
import { useRef, useState } from "react";
import Cabinit from "./Cabinit.png";
import fraktional from "./fraktional.png";
import thooto from "./thooto.png";

export default function Portfolio() {
    

  const projects = [
    {
      id: 1,
      name: "Vigor Crossfit",
      url: "https://bradleymatjie.github.io/vigor_crossfit/",
      description:
        "A website for Vigor Crossfit, a gym dedicated to providing a supportive environment for individuals to achieve their fitness goals through CrossFit training.",
      code: "https://github.com/bradleymatjie/vigor_crossfit",
      image: `${VigorCrossfit.src}`,
    },
    {
      id: 2,
      name: "My Bike",
      url: "https://bradleymatjie.github.io/",
      description:
        "The website presents a range of city bikes, highlighting features such as GPS tracking and performance specifications. It emphasizes models like 'Sporty 4' and 'Agile Ride 3' and offers test ride bookings.",
      code: "https://github.com/bradleymatjie/bradleymatjie.github.io",
      image: `${myBike.src}`,
    },
    {
      id: 3,
      name: "The Cabinit",
      url: "https://bradleymatjie.github.io/",
      description: "As a Frontend Engineer I worked on the Cabinit website, I was responsible for developing and maintaining the company's website and internal tools.",
      code: "https://github.com/bradleymatjie/bradleymatjie.github.io",
      image: `${Cabinit.src}`,
    },
    {
        id: 4,
        name: "Fraktional.dev",
        url: "https://fraktional.dev",
        description: "As a Frontend Engineer at Fraktional, I was responsible for developing and maintaining the company's website and internal tools. I focused on creating responsive, user-friendly layouts, optimizing performance, and collaborating with the team to integrate new features.",
        code: "https://github.com/bradleymatjie/bradleymatjie.github.io",
        image: `${fraktional.src}`,
        },
        {
            id: 5,
            name: "Thooto",
            url: "https://thooto.com",
            description: "As Lead Frontend Engineer at Param Solutions, I led the development of Thooto’s user interface. I focused on creating responsive, user-friendly layouts, optimizing performance, and collaborating with the team to integrate new features.",
            code: "https://github.com/bradleymatjie/bradleymatjie.github.io",
            image: `${thooto.src}`,
        }
  ];

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  function handleClick() {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: +300, behavior: 'smooth' });
    }
  }

  function handleClickLeft() {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  }

  return (
    <section className="flex items-center" style={{ height: "85vh" }}>
      <div
        className="flex justify-center items-end"
        style={{ height: "100%", width: "30%" }}
      >
        <h1 className="text-7xl font-bold">Portfolio</h1>
      </div>
      <div
        ref={scrollContainerRef}
        className="flex items-center gap-10 overflow-hidden"
        style={{ height: "100%", width: "70%" }}
      >
        <div className="flex flex-col gap-10 relative">
        <button className="text-dark rounded-md p-2 nav-btn-left" onClick={handleClickLeft}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              className="bi bi-chevron-right"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
              />
            </svg>
          </button>
          <button className="text-dark rounded-md p-2 nav-btn" onClick={handleClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              className="bi bi-chevron-right"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
              />
            </svg>
          </button>
        </div>
        {projects.reverse().map((project) => (
          <div
            className="card"
            key={project.id}
            // style={{ backgroundImage: `url(${project.image})` }}
          >
            <img src={project.image} alt={project.name} />
            <h2 className="text-2xl font-bold">{project.name}</h2>
            <p className="m-0">{project.description}</p>
            <div className="buttons">
              <button className="mt-6 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-md" onClick={() => window.open(project.url, '_blank')}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-fullscreen"
                  viewBox="0 0 16 16"
                >
                  <path d="M1.5 1a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4A1.5 1.5 0 0 1 1.5 0h4a.5.5 0 0 1 0 1zM10 .5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 16 1.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5M.5 10a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 0 14.5v-4a.5.5 0 0 1 .5-.5m15 0a.5.5 0 0 1 .5.5v4a1.5 1.5 0 0 1-1.5 1.5h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
