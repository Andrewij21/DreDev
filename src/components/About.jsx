export default function About() {
  return (
    <section id="about" className="dark:text-white">
      <h4 className="text-5xl font-bold tracking-wide py-4 text-teal-500 dark:text-teal-400">
        Hello! 👋
      </h4>
      <p className="">
        I&apos;m currently student at
        <span className="mx-1 text-teal-500 dark:text-emerald-300 font-medium border-b-white border-b-2">
          <a href="https://ubl.ac.id/" rel="noreferrer" target="_blank">
            University of Bandar Lampung.
          </a>
        </span>
        I&apos;m a active member in internet of things laboratory & Bank
        Indonesia organization (genbi).
      </p>
      <br />
      <p className="">
        As a software engineer, I enjoy bridging the gap between engineering and
        design — combining my technical knowledge with my keen eye for design to
        create a beautiful product. My goal is to always build applications that
        are scalable and efficient under the hood while providing engaging,
        pixel-perfect user experiences.
      </p>
      <br />
      <p className="">
        <span className="text-teal-500 dark:text-emerald-300 font-medium">
          When I&apos;m not in front of a computer screen
        </span>
        , I&apos;m playing guitar, reading, or crossing off another item on my
        bucket list.
      </p>
      <p className="mt-4">
        Get in touch 👉
        <span className="border-b-emerald-500 border-b-2">
          andrewijaya988@gmail.com
        </span>
      </p>
      <a href="/DreDev/Resume.pdf" target="_blank">
        <button className="uppercase px-8 py-4 mt-8 rounded-lg text-sm text-white font-semibold tracking-widest bg-gradient-to-b from-teal-500 to-emerald-500 hover:to-cyan-500">
          resume
        </button>
      </a>
    </section>
  );
}
