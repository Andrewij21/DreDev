import { useState } from "react";
import Navbar from "./components/Navbar";
import Service from "./components/Service";
import Portofolio from "./components/Portofolio";
import Landing from "./components/Landing";
import About from "./components/About";
import Skills from "./components/skills";
import Experience from "./components/Experience";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900 text-lg">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <main className="space-y-24">
          <Landing />
          <About />
          <Service />
          <Skills />
          <Experience />
          <Portofolio />
        </main>
      </div>
    </div>
  );
}

export default App;
