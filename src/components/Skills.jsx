import CONTENTS from "../../data/skills.json";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useAnimationControls } from "framer-motion";

const skillBtn = [
  {
    title: "frontend",
  },
  {
    title: "backend",
  },
  {
    title: "tools",
  },
];

const variantsContent = {
  initial: {
    opacity: 0,
    x: "-100%",
  },
  whileInView: {
    opacity: 1,
    x: 0,
    transition: { ease: "easeInOut", duration: 1 },
  },
  hidden: {
    opacity: 0,
    x: "-5%",
    transition: { ease: "easeInOut" },
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      ease: "easeInOut",
    },
  },
};
const variantsThought = {
  initial: {
    opacity: 0,
  },
  whileInView: {
    opacity: 1,
    x: 0,
    transition: { ease: "easeInOut", duration: 1 },
  },
  hidden: {
    opacity: 0,
    transition: { ease: "easeInOut" },
  },
  visible: {
    opacity: 1,
    transition: {
      ease: "easeInOut",
    },
  },
};
export default function Skills() {
  const controls = useAnimationControls();
  const [topic, setTopic] = useState("frontend");
  const toggleContent = async (payload) => {
    await controls.start("hidden");
    setTopic(payload);
    return controls.start("visible");
  };
  useEffect(() => {
    controls.start("visible");
    return () => controls.stop();
  });
  return (
    <section id="skills" className="min-h-[20rem] dark:text-white">
      <h3 className="text-3xl font-medium text-teal-500 dark:text-teal-400 justify-end mb-6">
        Skills 👊
      </h3>
      <div className="grid grid-cols-6 gap-x-2 gap-y-4">
        <div className="space-y-1 col-span-4 md:col-span-1">
          {skillBtn.map((skill) => (
            <motion.button
              key={skill.title}
              whileHover={{ scale: 1.09, x: 8 }}
              className={`${
                topic === skill.title
                  ? "bg-teal-400 rounded-r-full pl-2 text-white"
                  : ""
              }  w-full text-left`}
              onClick={() => toggleContent(skill.title)}
            >
              {skill.title}
            </motion.button>
          ))}
        </div>
        <div className="col-span-2 sm:col-span-1">
          <AnimatePresence mode="sync" initial={false}>
            <motion.ul
              initial="hidden"
              animate={controls}
              // whileInView="whileInView"
              variants={variantsContent}
              className="tracking-wide dark:text-teal-400 dark:shadow-none h-full rounded-lg px-2 "
            >
              {CONTENTS[topic].lists.map((item, i) => (
                <motion.li key={i}>{item}</motion.li>
              ))}
            </motion.ul>
          </AnimatePresence>
        </div>
        <div className="col-span-6 md:col-span-4 md:text-left leading-relaxed tracking-wide shadow-xl  p-10 rounded-lg min-h-[260px] bg-gradient-to-tr from-teal-400 to-emerald-400 text-white">
          <motion.p
            initial="hidden"
            animate={controls}
            // whileInView="whileInView"
            variants={variantsThought}
            className="text-center"
          >
            {CONTENTS[topic].thought}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
