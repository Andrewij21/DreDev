import { motion } from "framer-motion";
import PropTypes from "prop-types";

Card.propTypes = {
  content: PropTypes.object,
};

export default function Card({ content }) {
  return (
    <motion.div
      whileHover={{ scale: 1.1, backgroundColor: "#14b8a6" }}
      className="flex flex-col justify-between items-center text-center space-y-4 shadow-lg px-10 py-6 rounded-xl my-10 dark:hover:bg-gradient-to-b basis-1/2 group"
    >
      <img src={content.img} className="w-24 h-24 inline-block" />
      <div>
        <h3 className="text-lg font-medium dark:text-emerald-500 dark:group-hover:text-slate-200">
          {content.title}
        </h3>
        <p className="py-2 text-[1rem]">{content.body}</p>
      </div>
      <div>
        {/* <h4 className="text-teal-600 dark:text-teal-500 mb-1">Tools I use</h4>
        {content.tools.map((tool, i) => (
          <p key={i} className="dark:text-slate-200 text-[1rem]">
            {tool}
          </p>
        ))} */}
      </div>
    </motion.div>
  );
}
