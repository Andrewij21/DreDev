import { useEffect, useState } from "react";
import { BsArrowUp } from "react-icons/bs";

export default function ScrollToTopBtn() {
  const [showButton, setShowButton] = useState(false);

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 0) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      className="bg-teal-500 text-white dark:bg-transparent dark:hover:text-white dark:text-cyan-500 text-2xl rounded-full p-2 fixed bottom-2 right-2"
      onClick={handleClick}
      style={{ display: showButton ? "block" : "none" }}
    >
      <BsArrowUp />
    </button>
  );
}
