import allIcon from "@/helper/IconProvider";
import React, { use, useEffect, useState } from "react";
import { professionalInfo } from "@/helper/projectNecessaryArr-obj";

const Professional = ({ activeChevUp, setActiveChevUp }) => {
  const handleClickedContact = (id) => {
    setActiveLight((prev) => (prev === id ? null : id));
  };
  const handleClickedBio = (id) => {
    setActiveChevUp((prev) => (prev === id ? null : id));
  };
  const { down } = allIcon;
  return (
    <div>
      <div>
        <p className="body_thin_md text-slate_50 px-6 py-3 flex  gap-x-2 items-center">
          {" "}
          <span className="text-lg">{down}</span> personal-info
        </p>
        <div className="border-t border-b border-slate_700 p-3">
          <ul className="space-y-2">
            {professionalInfo.map((items) => {
              const isChevUpTrue = items.id === activeChevUp;
              return (
                <li
                  onClick={() => handleClickedBio(items.id)}
                  key={items.key}
                  className={`cursor-pointer body_thin_md lowercase flex items-center gap-x-[10px]  ${
                    items.className
                  } hover:text-slate_50 translate duration-300 ease-in-out ${
                    isChevUpTrue ? "text-slate_50" : "text-slate_400"
                  }`}
                >
                  <span className="text-base">
                    {isChevUpTrue ? items.icon3 : items.icon}
                  </span>
                  <span className={`text-base ${items.icon2Class}`}>
                    {items.icon2}
                  </span>
                  {items.displayName}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Professional;
