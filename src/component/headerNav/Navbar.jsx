import React, { useState } from "react";
import Container from "@/component/commonComponent/Container";
import { navbarArray } from "@/helper/projectNecessaryArr-obj";
import allIcon from "@/helper/IconProvider";

const Navbar = () => {
  // const height = window.innerHeight;

  // const heightParcent = (height * (38 / 100)) - 32;
  // const actuatResizeHeight = height - heightParcent;

  const { navbarTogglerIcon } = allIcon;
  const [isOpen, setIsOpen] = useState(false);

  const [activeId, setActiveId] = useState(2);

  const handleClicked = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="md:pt-4 sm:pt-4 ">
      <Container>
        <header className=" ">
          <div className=" flex justify-between items-center  lg:hidden  bg-slate_900 border-t-2 border-l-2 border-r-2 border-slate_700  rounded-t-[8px]   ">
            <div className="body_thin_md text-slate_400 px-6 py-4  ">
              Jhulon Kumar
            </div>
            <button
              onClick={handleClicked}
              className="cursor-pointer px-6 py-4 "
            >
              {isOpen ? (
                <span className="text-slate_500 text-xl">
                  {navbarTogglerIcon[0].icon}
                </span>
              ) : (
                <span className="text-slate_500 text-xl ">
                  {navbarTogglerIcon[1].icon}
                </span>
              )}
            </button>
          </div>

          <nav className="hidden lg:block">
            <ul className="grid  grid-cols-10 text-center border-t-2 border-l-2 border-r-2 border-slate_700 rounded-t-[8px] overflow-hidden bg-slate_900   ">
              {navbarArray.map((item) => {
                const isActive = activeId === item.id;

                return (
                  <li
                    key={item.id}
                    className={`
                      ${item.className}
                      border-slate_700
                      relative
                      ${!item.status ? "cursor-pointer" : ""}
                      after:content-[""]
                      after:absolute
                      after:left-0
                      after:bottom-0
                      after:h-[2.5px]
                      after:w-full
                      after:bg-orange_300
                      after:origin-left
                      after:transition-transform
                      after:duration-300
                      ${
                        isActive && !item.status
                          ? "after:scale-x-100"
                          : "after:scale-x-0"
                      }
                    `}
                    onClick={() => !item.status && setActiveId(item.id)}
                  >
                    <span className="body_thin_md text-slate_400 px-3 py-4 inline-block whitespace-nowrap">
                      {item.name}
                    </span>
                  </li>
                );
              })}
            </ul>
          </nav>

          {isOpen && (
            <div className="w-full lg:hidden  relative ">
              <div
                className={`absolute top-0 right-0  bg-slate_900  w-full h-[583.2px] border border-slate_700 z-20 `}
              >
                <ul className="">
                  <li className="py-3 px-6 text-slate_400 border border-slate_700">
                    # navigate:
                  </li>
                  {navbarArray.map((items, index) => {
                    return items.responsive ? (
                      <li
                        className="py-3 px-6 text-slate_50 border border-slate_700"
                        key={index}
                      >
                        {items.name}
                      </li>
                    ) : (
                      " "
                    );
                  })}
                </ul>
              </div>
            </div>
          )}
        </header>
      </Container>
    </section>
  );
};

export default Navbar;
