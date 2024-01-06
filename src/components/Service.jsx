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
        {/* <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:hover:bg-gradient-to-b dark:hover:from-cyan-500 basis-1/2">
          <img src={design} className="w-24 h-24 inline-block" />
          <h3 className="text-lg font-medium pt-8 pb-2">Website</h3>
          <p className="py-2">
            A website is important if you want to brand yourself or share your
            thoughts with the world, I can help you by creating a simple or
            complex website using some of the technologies I learned
          </p>
          <h4 className="py-4 text-teal-600 dark:text-teal-500 ">
            Tools I use
          </h4>
          <p className="text-gray-800 dark:text-slate-200 py-1">Figma</p>
          <p className="text-gray-800 dark:text-slate-200 py-1">ReactJs</p>
          <p className="text-gray-800 dark:text-slate-200 py-1">Tailwindcss</p>
        </div>
        <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:hover:bg-gradient-to-b dark:hover:from-cyan-500 basis-1/2">
          <img src={api} className="w-24 h-24 inline-block" />
          <h3 className="text-lg font-medium pt-8 pb-2">API</h3>
          <p className="py-2">
            In this era all device communicate using API, I can make you a
            secure API with Rest architecture with authentication and
            authorization and many more.
          </p>
          <h4 className="py-4 text-teal-600 dark:text-teal-500 ">
            Tools I use
          </h4>
          <p className="text-gray-800 dark:text-slate-200 py-1">NodeJs</p>
          <p className="text-gray-800 dark:text-slate-200 py-1">Express</p>
          <p className="text-gray-800 dark:text-slate-200 py-1">SQL/NoSQL</p>
        </div>
        <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:hover:bg-gradient-to-b dark:hover:from-cyan-500 basis-1/2">
          <img src={server} className="w-24 h-24 inline-block" />
          <h3 className="text-lg font-medium pt-8 pb-2">Database</h3>
          <p className="py-2">
            You need a good arsitecture for your database to store data else it
            can have a security risk or bad scalability . I can design a
            database architecture and build it for you with easy scalability
          </p>
          <h4 className="py-4 text-teal-600 dark:text-teal-500">Tools I use</h4>
          <p className="text-gray-800 dark:text-slate-200 py-1">MongoDB</p>
          <p className="text-gray-800 dark:text-slate-200 py-1">PostgreSQL</p>
          <p className="text-gray-800 dark:text-slate-200 py-1">Draw.io</p>
        </div> */}
      </div>
    </section>
  );
}
