import allIcon from "@/helper/IconProvider";
import React, { use, useEffect, useState } from "react";
import { bio } from "@/helper/projectNecessaryArr-obj";

const Personal = ({ activeChevUp, setActiveChevUp }) => {
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
        <div className="hidden lg:block">
          <p className="body_thin_md text-slate_50 px-6 py-3 flex  gap-x-2 items-center  ">
            {" "}
            <span className="text-lg">{down}</span> personal-info
          </p>
        </div>
        <div className="lg:border-t lg:border-b border-slate_700 lg:p-3 px-6 py-3">
          <ul className="space-y-2">
            {bio.map((items) => {
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

export default Personal;
