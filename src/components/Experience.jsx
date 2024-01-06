import EXPERIENCES from "../../data/experiences.json";
export default function Experience() {
  return (
    <section id="experience">
      <div>
        <h3 className="text-3xl font-medium text-teal-500 dark:text-teal-400 mb-2">
          ✨Experience✨
        </h3>
        <p className="py-2 text-gray-800 leading-8 dark:text-white mb-4">
          Through dynamic internship experiences, I delved into the world of
          software development. Collaborating on various projects, I honed my
          coding and problem-solving skills while gaining valuable insights into
          the agile nature of development processes. These experiences have
          equipped me with a solid foundation and a passion for creating
          effective software solutions.
        </p>
      </div>
      <div className="space-y-6">
        {EXPERIENCES.map((experience, i) => (
          <div
            key={i}
            className="shadow-lg rounded-xl p-4 capitalize text-xs md:text-sm dark:hover:bg-gradient-to-t dark:hover:from-cyan-500"
          >
            <div className="flex justify-between mb-2">
              <div className="grid md:grid-cols-[60px_auto]">
                <div className="row-span-2 h-[50px] w-[55px] bg-white rounded-full overflow-hidden">
                  <img
                    src={experience.img}
                    alt="developer"
                    className="object-contain h-full w-full"
                  />
                </div>
                <h3 className="text-lg font-medium text-teal-500 dark:text-teal-400 tracking-wider">
                  {experience.title}
                </h3>
                <h4 className="text-slate-400 dark:text-slate-200 tracking-widest">
                  {experience.type}
                </h4>
              </div>
              <p className="text-slate-400 dark:text-emerald-400 tracking-wider">
                {experience.time}
              </p>
            </div>
            <p className="tracking-wide dark:text-white">{experience.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
