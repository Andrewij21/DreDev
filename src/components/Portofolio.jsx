import memories from "/portofolio/memories.png";
import todo from "/portofolio/todo.png";
import tod from "/portofolio/tod.png";
import cinemaku from "/portofolio/cinemaku.png";

const portofolio = [
  {
    title: "Memories App",
    img: memories,
    link: "https://memory-phi-ten.vercel.app/",
    body: "Website for those of you who want to save memories with your loved ones",
  },
  {
    title: "Cinemaku",
    img: cinemaku,
    link: "https://cinemaku.vercel.app/",
    body: "See the latest trending movies & series",
  },
  {
    title: "Truth or Dare",
    img: tod,
    link: "https://andrewij21.github.io/Truth-or-Dare/",
    body: "Simple Truth or Dare game for friends and familiy to play along",
  },
  {
    title: "My Todo",
    img: todo,
    link: "https://master--poetic-halva-a0d5af.netlify.app/",
    body: "Simple Todo apps using React with authentication and validation",
  },
];

export default function Portofolio() {
  return (
    <section id="portofolio" className="dark:text-white">
      <div>
        <h3 className="text-3xl font-medium text-teal-500 dark:text-teal-400 mb-2">
          Portofolio <span className="text-2xl">🚀</span>
        </h3>
        <p className="py-2 text-gray-800 leading-8 dark:text-white">
          Most projects that i created is related to API or Database so if you
          want to see my Backend you can visited my
          <a
            href="https://github.com/Andrewij21"
            rel="noreferrer"
            target="_blank"
            className="text-teal-500 dark:text-emerald-300 ml-1"
          >
            github
          </a>
          . Here some of my frontend or fullstack project that i build using
          diffrent tech
        </p>
      </div>
      <div className="py-10 ">
        {portofolio.map((project, i) => {
          return (
            <div className="space-y-4 mb-6" key={i}>
              <h3 className="text-xl w-fit font-medium tracking-wider mb-2 hover:text-cyan-500">
                <a href={project.link} rel="noreferrer" target="_blank">
                  {project.title}
                </a>
              </h3>
              <img
                src={project.img}
                className="rounded-lg object-fill w-full h-full"
              />
              <p className="leading-loose font-normal">{project.body}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
