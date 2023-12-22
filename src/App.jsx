import { BsMoonStarsFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa6";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineMenu,
} from "react-icons/ai";
import andre from "/photo1.jpg";
import server from "/server2.png";
import design from "/design.png";
import api from "/api2.png";
import memories from "/memories.png";
import todo from "/todo.png";
import tod from "/tod.png";
import cinemaku from "/cinemaku.png";
import { useState } from "react";

const portofolio = [
  { img: memories, link: "https://memory-phi-ten.vercel.app/" },
  { img: cinemaku, link: "https://cinemaku.vercel.app/" },
  { img: tod, link: "https://andrewij21.github.io/Truth-or-Dare/" },
  { img: todo, link: "https://master--poetic-halva-a0d5af.netlify.app/" },
];

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen ">
          <nav className="py-10 mb-12 flex items-center justify-between relative">
            <h1 className=" z-10 text-xl md:text-2xl dark:text-white">
              DevelopedByDre
            </h1>
            <button
              className="md:hidden dark:text-white cursor-pointer group"
              onClick={() => setMenuVisible(!menuVisible)}
            >
              <AiOutlineMenu className="text-xl md:text-2xl" />
              <div
                className={`${
                  menuVisible ? "opacity-100 right-1" : "opacity-0 right-0"
                } absolute w-full transition-all duration-300 pl-1 pointer-events-none`}
              >
                {/* className="absolute -right-0 w-full  opacity-0 group-focus:right-1 group-focus:opacity-100 transition-all duration-300 pointer-events-none pl-1" */}
                <ul
                  className={`flex flex-row items-center w-full text-base gap-10 cursor-pointer ${
                    menuVisible ? "pointer-events-auto" : "pointer-events-none"
                  } justify-start pt-4 flex-wrap`}
                >
                  <li className="hover:text-cyan-600">
                    <a href="#home">Home</a>
                  </li>
                  <li className="hover:text-cyan-600">
                    <a href="#service">Service</a>
                  </li>
                  <li className="hover:text-cyan-600">
                    <a href="#portofolio">Portofolio</a>
                  </li>
                  <li className="" onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? (
                      <FaSun className="fill-yellow-300" />
                    ) : (
                      <BsMoonStarsFill />
                    )}
                  </li>
                </ul>
              </div>
            </button>
            <ul className="md:flex md:items-center md:w-auto md:py-0 py-4 hidden">
              <li className="">
                {darkMode ? (
                  <FaSun
                    className="cursor-pointer text-2xl fill-yellow-300"
                    onClick={() => setDarkMode(!darkMode)}
                  />
                ) : (
                  <BsMoonStarsFill
                    className="cursor-pointer text-2xl  "
                    onClick={() => setDarkMode(!darkMode)}
                  />
                )}
              </li>
              <li className="">
                <a
                  href="#"
                  className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10" id="home">
            <h2 className="text-5xl text-teal-600 py-2 font-medium md:text-6xl">
              Andre Wijaya
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
              Fullstack Developer
            </h3>
            <p className="text-md  py-5 text-gray-800 leading-8 md:text-xl max-w-lg mx-auto dark:text-white">
              Learning new stuff always fun for me, especially when it comes to
              software development, Boi what a joy...
            </p>
          </div>
          <div className="flex text-5xl py-3 justify-center gap-16 text-gray-600">
            <a
              href="https://www.instagram.com/andrewijaya_21/"
              rel="noreferrer"
              target="_blank"
            >
              <AiFillInstagram className="cursor-pointer" />
            </a>
            <a
              href="https://www.linkedin.com/in/andre-wijaya-366911256/"
              rel="noreferrer"
              target="_blank"
            >
              <AiFillLinkedin />
            </a>
            <a
              href="https://github.com/Andrewij21"
              rel="noreferrer"
              target="_blank"
            >
              <AiOutlineGithub />
            </a>
          </div>
          <div className="relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 my-20 mx-auto overflow-hidden md:h-96 md:w-96">
            <img src={andre} alt="andre" className="object-cover" />
          </div>
        </section>
        <section id="service">
          <div>
            <h3 className="text-3xl py-1 font-medium dark:text-white">
              Services I offer
            </h3>
            <p className="text-md py-2 text-gray-800 leading-8 dark:text-white">
              I have studied the program for approximately 4 years, I am also
              active in campus organizations and laboratories. I really like
              software development, especially the backend. I can create
              <span className="text-teal-500"> RESTapi </span> from simple to
              complex using various types of databases such as MongoDB and
              Postgresql. For the frontend I usually use
              <span className="text-teal-500"> ReactJs </span>
              with tailwind for styling.
            </p>
            <p className="text-md py-2 text-gray-800 leading-8 dark:text-white">
              I love learning new stuff and making things, here are some things
              I will make for you.
            </p>
          </div>
          <div className="md:flex max-w-full gap-10 dark:text-slate-300">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:hover:bg-gradient-to-b dark:hover:from-cyan-500 basis-1/2">
              <img src={design} className="w-24 h-24 inline-block" />
              <h3 className="text-lg font-medium pt-8 pb-2">Website</h3>
              <p className="py-2">
                A website is important if you want to brand yourself or share
                your thoughts with the world, I can help you by creating a
                simple or complex website using some of the technologies I
                learned
              </p>
              <h4 className="py-4 text-teal-600 dark:text-teal-500 ">
                Tools I use
              </h4>
              <p className="text-gray-800 dark:text-slate-200 py-1">Figma</p>
              <p className="text-gray-800 dark:text-slate-200 py-1">ReactJs</p>
              <p className="text-gray-800 dark:text-slate-200 py-1">
                Tailwindcss
              </p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:hover:bg-gradient-to-b dark:hover:from-cyan-500 basis-1/2">
              <img src={api} className="w-24 h-24 inline-block" />
              <h3 className="text-lg font-medium pt-8 pb-2">API</h3>
              <p className="py-2">
                In this era all device communicate using API, I can make you a
                secure API with Rest architecture with authentication and
                authorization and many more.
              </p>
              <h4 className="py-4 text-teal-600 dark:text-teal-500 ">
                Tools I use
              </h4>
              <p className="text-gray-800 dark:text-slate-200 py-1">NodeJs</p>
              <p className="text-gray-800 dark:text-slate-200 py-1">Express</p>
              <p className="text-gray-800 dark:text-slate-200 py-1">
                SQL/NoSQL
              </p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:hover:bg-gradient-to-b dark:hover:from-cyan-500 basis-1/2">
              <img src={server} className="w-24 h-24 inline-block" />
              <h3 className="text-lg font-medium pt-8 pb-2">Database</h3>
              <p className="py-2">
                You need a good arsitecture for your database to store data else
                it can have a security risk or bad scalability . I can design a
                database architecture and build it for you with easy scalability
              </p>
              <h4 className="py-4 text-teal-600 dark:text-teal-500">
                Tools I use
              </h4>
              <p className="text-gray-800 dark:text-slate-200 py-1">MongoDB</p>
              <p className="text-gray-800 dark:text-slate-200 py-1">
                PostgreSQL
              </p>
              <p className="text-gray-800 dark:text-slate-200 py-1">Draw.io</p>
            </div>
          </div>
        </section>
        <section id="portofolio">
          <div>
            <h3 className="text-3xl py-1 font-medium dark:text-white">
              Portofolio
            </h3>
            <p className="text-md py-2 text-gray-800 leading-8 dark:text-white">
              Most projects that i created is related to API or Database so if
              you want to see my Backend you can visited my
              <a
                href="https://github.com/Andrewij21"
                rel="noreferrer"
                target="_blank"
                className="text-teal-500"
              >
                github
              </a>
              . Here some of my frontend or fullstack project that i build using
              diffrent tech
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 md:flex-row md:flex-wrap">
            {portofolio.map((project, i) => {
              return (
                <div className="basis-1/3 flex-1" key={i}>
                  <a href={project.link} rel="noreferrer" target="_blank">
                    <img
                      src={project.img}
                      className="rounded-lg object-cover w-full "
                    />
                  </a>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
