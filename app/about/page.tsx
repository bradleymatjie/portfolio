import './about.scss'
import profile from '../media/bradley.png';
export default function About() {

  return (
    <section>
      <div>
        {/* Main Section */}
        <div
          className="first-container m-4"
          style={{ height: "90vh", }}
        >
          {/* Profile Image */}
          <div className="profile-pic" 
          style={{
            backgroundImage:`url(${profile.src})`,
            borderRadius:'8px',
            }}/>

          {/* Text Section */}
          <div className="text-container mt-6 md:mt-0 md:ml-12" style={{ width: "50%" }} >
            <h1 className="text-5xl font-bold">Hi there!</h1>
            <p className="mt-4 text-lg">
            Driven by a passion for crafting innovative and user-friendly web experiences, I am always eager to push boundaries, refine my skills, and deliver impactful solutions. Let’s dive into my journey below!
            </p>
            <button className="mt-6 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-md">
              View my CV
            </button>
          </div>
        </div>
        <div 
            className="flex flex-col md:flex-row p-8 " 
            style={{ height: "60vh" }}
        >
          {/* Text Section */}
          <div className="flex-1 my-careers-text">
            <h1 className="text-5xl font-bold mb-6">My Career Journey</h1>
            <p className="text-md leading-relaxed mb-8">
              Hi, I am Bradley Matjie, a passionate Software Engineer with a deep
              love for turning innovative ideas into reality. My journey in tech
              began with a fascination for how software can transform lives, and
              ever since, I have been on a mission to build seamless,
              user-friendly digital experiences. With a solid foundation in
              full-stack development from Melsoft Academy and extensive hands-on
              experience with modern technologies like React, Next.js, and MERN
              stack, I thrive on solving complex problems and delivering
              scalable solutions. My expertise extends to API integrations,
              creating dynamic, responsive interfaces, and optimizing
              performance for web applications. What sets me apart is my
              constant drive to learn and grow. Whether it is diving into new
              frameworks like React Native or exploring Flutter, I’m always
              ready to expand my skill set and push boundaries. Recently, I’ve
              been refining my skills through Framer, WordPress, and even
              exploring innovative 3D web design effects.
            </p>
          </div>

          {/* Skills Section */}
          <div className="flex-1 mt-8 md:mt-0 md:ml-12 pt-20">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-light">
              {[
                "HTML5 & CSS3",
                "JavaScript (ES6+)",
                "React.js",
                "Next.js",
                "Responsive Web Design",
                "API Integrations",
                "Version Control (Git & GitHub)",
                "Component-Based Architecture",
                "Performance Optimization",
                "SEO Best Practices",
                "Testing & Debugging",
                "RESTful APIs",
                "Collaboration & Teamwork"
              ].map((skill) => (
                <span
                  key={skill}
                  className="skills-list px-4 py-2 rounded-full text-sm text-center text-light"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
