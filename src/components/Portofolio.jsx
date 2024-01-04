import memories from "/memories.png";
import todo from "/todo.png";
import tod from "/tod.png";
import cinemaku from "/cinemaku.png";

const portofolio = [
  { img: memories, link: "https://memory-phi-ten.vercel.app/" },
  { img: cinemaku, link: "https://cinemaku.vercel.app/" },
  { img: tod, link: "https://andrewij21.github.io/Truth-or-Dare/" },
  { img: todo, link: "https://master--poetic-halva-a0d5af.netlify.app/" },
];

export default function Portofolio() {
  return (
    <section id="portofolio">
      <div>
        <h3 className="text-3xl font-medium text-teal-500 dark:text-teal-400 mb-2">
          Portofolio
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
  );
}
