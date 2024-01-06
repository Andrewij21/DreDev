import CONTENTS from "../../data/skills.json";
import { useState } from "react";

export default function Skills() {
  const [topic, setTopic] = useState("frontend");

  return (
    <section id="skills" className="min-h-[20rem] dark:text-white">
      <h3 className="text-3xl font-medium text-teal-500 dark:text-teal-400 justify-end mb-6">
        Skills 👊
      </h3>
      <div className="grid grid-cols-6 gap-x-2 gap-y-4">
        <div className="space-y-1 col-span-4 md:col-span-1">
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
        <div className="col-span-2 sm:col-span-1">
          <ul className="tracking-wide dark:text-teal-400 shadow-lg dark:shadow-none h-full rounded-lg px-2 font-thin">
            {CONTENTS[topic].lists.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="col-span-6 md:col-span-4 md:text-left leading-relaxed tracking-wide shadow-xl  dark:bg-gradient-to-b dark:from-cyan-500  p-10 rounded-lg min-h-[260px]">
          <p className="text-center">{CONTENTS[topic].thought}</p>
        </div>
      </div>
    </section>
  );
}
