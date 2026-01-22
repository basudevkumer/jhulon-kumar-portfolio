import React from "react";
import Container from "../commonComponent/Container";
import allIcon from "@/helper/IconProvider";
import { footerArray } from "@/helper/projectNecessaryArr-obj";

const Footer = () => {
  const { footerIcon } = allIcon;

  return (
    <section className="md:pb-4 sm:pb-4 !z-[999]">
      <footer className="  bg-slate_900 border lg:border-t-transparent border-slate_700 flex sm:items-center justify-between  rounded-b-[8px] overflow-hidden">
        <div className="">
          <ul className="flex">
            {footerArray.map((items) => {
              return items.icon === String ? (
                <li key={items.id}>
                  <span className="text-slate_400 body_thin_md py-2 px-2  sm:px-8 sm:py-4   inline-block">
                    {items.icon}
                  </span>
                </li>
              ) : (
                <li className="border-r-1   border-slate_700" key={items.id}>
                  <a
                    href="#"
                    className="text-slate_400 body_thin_md sm:px-8 sm:py-4  py-2 px-2 inline-block"
                  >
                    {items.icon}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="h-full  border-l border-slate_700 sm:border-0 ">
          <a
            href="#"
            className="sm:flex sm:items-center py-2 px-2 sm:px-8 sm:py-4 gap-x-2   text-slate_400 sm:body_thin_md  sm:border-l inline-block   border-slate_700"
          >
            <span className="hidden sm:block">@jhulonkumar </span><span className="">{footerIcon[2].icon}</span>
          </a>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
