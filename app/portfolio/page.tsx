"use client";
import "./portfolio.scss";
import { useEffect, useRef, useState } from "react";
import { projects } from "./data";

import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

export default function Portfolio() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [data, setData] = useState<any[]>([]);

  const tab = searchParams.get("tab");

  useEffect(() => {
    if (!tab) {
      router.push('/portfolio?tab=Portfolio')
    }
    const res = projects.filter(item => item.type == tab);

    setData(res)
    console.log({res, tab})
  }, [tab])

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
        className="portfolio-container"
      >
        <select name="select-page" id="select-page" value={tab??"Portfolio"} onChange={(event:any) => router.push(`/portfolio?tab=${event.target.value}`)}>
          <option value="Portfolio">Portfolio</option>
          <option value="work">Work Experience</option>
          <option value="education">Education</option>
        </select>
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
        {data.reverse().map((project) => (
          <div
            className="card"
            key={project.id}
            // style={{ backgroundImage: `url(${project.image})` }}
          >
            <img src={project.image} alt={project.name} />
            <h2 className="text-2xl font-bold">{project.name}</h2>
            <span>{project.position}</span>
            <p className="m-0">{project.description}</p>
            <div className="buttons m-2">
              <button className="mt-6 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-md" onClick={() => window.open(project.url, '_blank')}>
                {tab == "Portfolio" && 
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-fullscreen"
                  viewBox="0 0 16 16"
                >
                  <path d="M1.5 1a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4A1.5 1.5 0 0 1 1.5 0h4a.5.5 0 0 1 0 1zM10 .5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 16 1.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5M.5 10a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 0 14.5v-4a.5.5 0 0 1 .5-.5m15 0a.5.5 0 0 1 .5.5v4a1.5 1.5 0 0 1-1.5 1.5h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5" />
                </svg>}
                {tab == "work" && project.date} 
              </button>
              {/* <span className="mt-6 px-6 py-3 text-dark rounded-md"></span> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
