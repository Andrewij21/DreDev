// import image from "/download.jpg";
import pindad from "/experience/pindad.png";
import lab from "/experience/LOGO-UBL.png";
import genbi from "/experience/genbi.png";
import cvNusantara from "/experience/leaft.png";

const CARDS = [
  {
    title: "Lab.IOT Universitas Bandar Lampung · Self-employed",
    time: "Jul 2021 - Jun 2022",
    img: lab,
    type: "Software Developer",
    body: "During my first year at university, I devoted a significant amount of time to the laboratory specializing in the Internet of Things (IoT). There, I gained extensive knowledge in programming, sensors, and various aspects of IoT. Engaging in numerous projects assigned by my seniors further enhanced my practical skills and understanding of the field.",
  },
  {
    title: "PT. Pindad (Persero) · Internship",
    time: "Aug 2022 - Dec 2022",
    img: pindad,
    type: "Frontend Web Developer",
    body: "In my fifth semester, I landed my first internship at PT. Pindad, a defense company specializing in the construction of tanks, weapons, and heavy equipment. My primary responsibility was to develop a website known as ICSS (Integrated Communication Security System). This website serves the purpose of monitoring all areas within Pindad, featuring CCTV displays and providing alerts in case sensors in the Pindad area are activated.",
  },
  {
    title: "Generasi Baru Indonesia (GenBI) · Part-time",
    time: "Mar 2023 - Des 2023",
    img: genbi,
    type: "Member",
    body: "I actively participate as a member of Generasi Baru Indonesia (GenBI) at the University of Bandar Lampung. Engaging with GenBI has provided me with valuable experiences and opportunities to contribute to various initiatives and projects. Being part of this dynamic community has allowed me to collaborate with fellow members, attend events, and actively contribute to the organization's goals.",
  },
  {
    title: "cv nusantara agro tech · Internship",
    time: "sept 2023 - Present",
    img: cvNusantara,
    type: "Fullstack Developer",
    body: "Here, I took on the role of a full-stack developer, tasked with creating an admin dashboard for a technology known as Smart Shaker. Additionally, I was responsible for developing the backend API to support both web and mobile platforms.",
  },
];
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
        {CARDS.map((card, i) => (
          <div
            key={i}
            className="shadow-lg rounded-xl p-4 capitalize text-xs md:text-sm dark:hover:bg-gradient-to-t dark:hover:from-cyan-500"
          >
            <div className="flex justify-between mb-2">
              <div className="grid md:grid-cols-[60px_auto]">
                <div className="row-span-2 h-[50px] w-[55px]">
                  <img
                    src={card.img}
                    alt="developer"
                    className="object-contain rounded-full h-full w-full"
                  />
                </div>
                <h3 className="text-lg font-medium text-teal-500 dark:text-teal-400 tracking-wider">
                  {card.title}
                </h3>
                <h4 className="text-slate-400 dark:text-slate-200 tracking-widest">
                  {card.type}
                </h4>
              </div>
              <p className="text-slate-400 dark:text-emerald-400 tracking-wider">
                {card.time}
              </p>
            </div>
            <p className="tracking-wide dark:text-white">{card.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
