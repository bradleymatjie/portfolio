import Construction from "../components/construction/page";

export default function About() {
  return (
    <section>
      <div className="min-h-screen bg-light text-dark font-sans  flex flex-col justify-center items-center p-6">
        {/* Main Section */}
        <main
          className="flex flex-col md:flex-row items-center justify-center  m-4"
          style={{ height: "90vh", boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)" }}
        >
          {/* Profile Image */}
          <div className="relative" style={{ width: "40%", height: "60%" }}>
            <img
              src="https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/457094275_3299959966805512_701941671533872470_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=KVZGm317AiYQ7kNvgHQVSpB&_nc_zt=23&_nc_ht=scontent-jnb2-1.xx&_nc_gid=Aohqqa0HFnQeIp5qcKAWPDj&oh=00_AYBRGPZI2lcwKtpLVGVCyT3I8XJVc41EUGOh9Z0rT46QbA&oe=674FF7AE"
              alt="Profile"
              className="rounded-xl object-cover"
              style={{ width: "100%", height: "100%" }}
            />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-red-500 to-black opacity-50"></div>
          </div>

          {/* Text Section */}
          <div className="mt-6 md:mt-0 md:ml-12" style={{ width: "50%" }} >
            <h1 className="text-5xl font-bold">Hi there!</h1>
            <p className="mt-4 text-lg">
            Driven by a passion for crafting innovative and user-friendly web experiences, I'm always eager to push boundaries, refine my skills, and deliver impactful solutions. Let’s dive into my journey below!
            </p>
            <button className="mt-6 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-md">
              View my CV
            </button>
          </div>
        </main>
        <main 
            className="flex flex-col md:flex-row p-8 " 
            style={{ height: "60vh", boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)" }}
        >
          {/* Text Section */}
          <div className="flex-1">
            <h1 className="text-5xl font-bold mb-6">My Career Journey</h1>
            <p className="text-md leading-relaxed mb-8">
              Hi, I’m Bradley Matjie, a passionate Software Engineer with a deep
              love for turning innovative ideas into reality. My journey in tech
              began with a fascination for how software can transform lives, and
              ever since, I've been on a mission to build seamless,
              user-friendly digital experiences. With a solid foundation in
              full-stack development from Melsoft Academy and extensive hands-on
              experience with modern technologies like React, Next.js, and MERN
              stack, I thrive on solving complex problems and delivering
              scalable solutions. My expertise extends to API integrations,
              creating dynamic, responsive interfaces, and optimizing
              performance for web applications. What sets me apart is my
              constant drive to learn and grow. Whether it's diving into new
              frameworks like React Native or exploring Flutter, I’m always
              ready to expand my skill set and push boundaries. Recently, I’ve
              been refining my skills through Framer, WordPress, and even
              exploring innovative 3D web design effects.
            </p>
            <p className="text-lg leading-relaxed">
              When I'm not coding, you’ll find me exploring new technologies,
              working on creative projects, or spending time with loved ones.
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
                  className="px-4 py-2 bg-gray-800 rounded-full text-sm text-center text-light"
                  style={{color:'aliceblue'}}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}
