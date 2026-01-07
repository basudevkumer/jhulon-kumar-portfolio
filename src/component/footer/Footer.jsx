import React from "react";
import Container from "../commonComponent/Container";
import allIcon from "@/helper/IconProvider";
import { footerArray } from "@/helper/projectNecessaryArr-obj";

const Footer = () => {
  const { footerIcon } = allIcon;

  return (
    <section className="md:pb-4 sm:pb-4">
      <footer className="  bg-slate_900 border-l-2 border-r-2 border-b-2 border-slate_700  flex items-center justify-between  rounded-b-[8px] overflow-hidden">
        <div className="">
          <ul className="flex items-center">
            {footerArray.map((items) => {
              return items.icon === String ? (
                <li key={items.id}>
                  <span className="text-slate_400 body_thin_md  px-8 py-4   inline-block">
                    {items.icon}
                  </span>
                </li>
              ) : (
                <li className="border-r-1 border-slate_700" key={items.id}>
                  <a
                    href="#"
                    className="text-slate_400 body_thin_md px-8 py-4 inline-block"
                  >
                    {items.icon}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <a
            href="#"
            className="flex items-center px-8 py-4 gap-x-2 text-slate_400 body_thin_md  border-l border-slate_700"
          >
            @jhulonkumar <span className="">{footerIcon[2].icon}</span>
          </a>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
