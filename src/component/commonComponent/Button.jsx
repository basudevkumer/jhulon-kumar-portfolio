import React from "react";

const Button = ({ children, className }) => {
  return (
    <button
      className={`text-slate_50 bg-slate_600 py-[10px] px-4 rounded-[4px] cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
