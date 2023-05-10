import { useEffect, useState } from "react";
import { HiArrowSmUp } from "react-icons/hi";

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScrollButtonVisibility = () => {
      window.pageYOffset > 300 ? setShowButton(true) : setShowButton(false);
    };
    window.addEventListener("scroll", handleScrollButtonVisibility);

    return () => {
      window.removeEventListener("scroll", handleScrollButtonVisibility);
    };
  }, []);

  const scrollToTopClickHandler = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    showButton && (
      <div
        className="fixed bottom-5 right-5 z-50 flex cursor-pointer flex-col items-center 
        justify-center rounded-sm bg-accent p-2 text-black transition-all duration-200
        hover:p-3"
        onClick={scrollToTopClickHandler}
      >
        <HiArrowSmUp className="text-3xl" />
      </div>
    )
  );
};

export default ScrollToTop;
