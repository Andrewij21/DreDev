import SERVICES from "../../data/service.json";
import Card from "./ui/Card";

export default function Service() {
  return (
    <section id="services" className="">
      <div>
        <h3 className="text-3xl font-medium text-teal-500  dark:text-teal-400 mb-2">
          Services I offer ✍️
        </h3>
        <p className="py-2 text-gray-800 dark:text-white">
          I specialize in integrating front-end and back-end technologies to
          create dynamic web applications. Whether it&apos;s designing
          user-friendly interfaces or implementing robust server-side
          functionalities, I deliver efficient and scalable solutions.
          Let&apos;s transform your ideas into a digital reality!
        </p>
      </div>
      <div className="md:flex max-w-full gap-10 dark:text-slate-300">
        {SERVICES.map((service, i) => (
          <Card key={i} content={service} />
        ))}
      </div>
    </section>
  );
}
