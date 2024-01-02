const CONTENTS = {
  frontend: {
    title: "Frontend",
    lists: [
      "HTML",
      "CSS",
      "Javascript",
      "React",
      "Vue",
      "TailwindCSS",
      "Framer-motion",
    ],
    Tcolor: "text-sky-500",
    Bcolor: "border-sky-500",
    thought:
      "On creating engaging projects i'm focus on React and Tailwind CSS. I love the efficiency of Tailwind for styling and the flexibility of React for dynamic applications. While React and Tailwind are my mainstays, I'm always open to exploring other stacks",
  },
  backend: {
    title: "Backend",
    lists: ["Node", "Express", "MongoDB", "PostgreSQL", "RabbitMQ"],
    Tcolor: "text-yellow-500",
    Bcolor: "border-yellow-500",
    thought:
      "I'm a Node.js enthusiast with a strong focus on building robust and scalable server-side applications using Express. MongoDB is my preferred database for its flexibility in handling diverse data structures. While I primarily work with Node, Express, and MongoDB, I also have experience with PostgreSQL for projects that require relational databases.",
  },
  tools: {
    title: "Tools",
    lists: ["Vite", "Postman", "Figma", "Draw.io", "Docker"],
    Tcolor: "text-violet-500",
    Bcolor: "border-violet-500",
    thought:
      "In my toolkit, Vite powers my front-end development with its speed and efficiency, while Postman simplifies API testing and development. For design collaboration, Figma is my go-to, offering a seamless platform for creating and sharing designs. These tools collectively enhance my workflow, enabling quick and effective development and design processes.",
  },
};

import { useState } from "react";

export default function Skills() {
  const [topic, setTopic] = useState("frontend");

  return (
    <section id="skills" className="min-h-[20rem] dark:text-white">
      <h3 className="text-3xl font-medium text-teal-500 dark:text-teal-400 justify-end mb-6">
        Skills
      </h3>
      <div className="grid grid-cols-6 gap-x-2">
        <div className="space-y-1 text-[1rem]">
          <button
            className={`${
              topic === "frontend"
                ? "bg-teal-400 rounded-r-full pl-2 text-white"
                : ""
            }  w-full text-left`}
            onClick={() => setTopic("frontend")}
          >
            Frontend
          </button>
          <button
            className={`${
              topic === "backend"
                ? "bg-teal-400 rounded-r-full pl-2 text-white"
                : ""
            }  w-full text-left`}
            onClick={() => setTopic("backend")}
          >
            Backend
          </button>
          <button
            className={`${
              topic === "tools"
                ? "bg-teal-400 rounded-r-full pl-2 text-white "
                : ""
            } w-full text-left`}
            onClick={() => setTopic("tools")}
          >
            Tools
          </button>
        </div>
        <div className="">
          <ul className="tracking-wide dark:text-teal-400">
            {CONTENTS[topic].lists.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="col-span-4 leading-relaxed tracking-wide bg-teal-400 dark:bg-gradient-to-b dark:from-cyan-500 text-white p-10 rounded-lg font-medium">
          {CONTENTS[topic].thought}
        </div>
      </div>
    </section>
  );
}
