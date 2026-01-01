import React from "react";

const Container = ({ children, className }) => {
  return (
    <div
      className={` w-full
      max-w-[1320px]
      mx-auto
       md:px-4
       sm:px-4
     
       ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
