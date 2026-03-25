import React, { useEffect, useState } from "react";

const TypeWritter = () => {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let index = 0;
    const text = "Front-end developer";

    const interval = setInterval(() => {
      index++;
      setDisplayed(text.slice(0, index));

      if (index === text.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <h2 className="text-indigo_500 heading4xs sm:heading4">
      {displayed}
      <span className={`${done ? "animate-pulse" : ""}`}>|</span>
    </h2>
  );
};

export default TypeWritter;