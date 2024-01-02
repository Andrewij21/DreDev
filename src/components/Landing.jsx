import {
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";
import andre from "/photo1.jpg";
export default function Landing() {
  return (
    <section className="">
      <div className="text-center p-10" id="home">
        <h2 className="text-5xl text-teal-500 py-2 font-medium md:text-6xl">
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
      <div className="relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mx-auto overflow-hidden md:h-96 md:w-96 mt-16">
        <img src={andre} alt="andre" className="object-cover" />
      </div>
    </section>
  );
}
