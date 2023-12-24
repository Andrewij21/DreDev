import { useState } from "react";
import Navbar from "./components/Navbar";
import Service from "./components/Service";
import Portofolio from "./components/Portofolio";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Service />
        <Portofolio />
      </main>
    </div>
  );
}

export default App;
