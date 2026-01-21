import React, { useEffect, useState } from "react";
import allIcon from "@/helper/IconProvider";
import { Link } from "react-router-dom";
import { aboutTitle, contact, snippet } from "@/helper/projectNecessaryArr-obj";
import Educations from "../personalInfo/Bio";
import Personal from "../personalInfo/Personal";
import Professional from "../ProfessionalInfo/Professional";
import Hobbies from "../hobbiesInfo/Hobbies";
import Bio from "../personalInfo/Bio";
import Interest from "../personalInfo/Interest";
import HighSchool from "../personalInfo/HighSchool";
import Univercity from "../personalInfo/Univercity";
import Exprience from "../ProfessionalInfo/Exprience";
import HardSkill from "../ProfessionalInfo/HardSkill";
import SoftSkill from "../ProfessionalInfo/SoftSkill";
import Sports from "../hobbiesInfo/Sports";
import Game from "../hobbiesInfo/Game";

const AboutMe = () => {
  //for icon
  const {  message, star, down, corss } = allIcon;

  // manage state
  const [activeId, setActiveId] = useState(2);  
  const [activeChevUp, setActiveChevUp] = useState(1);
  const [activeLight, setActiveLight] = useState(null);
  const [title, setTitle] = useState("professional-info")



  // event handle
  const handleClicked = (aboutObj) => {
    setActiveId(aboutObj.id);
    setTitle(aboutObj.title)
  };
   
  const handleClickedContact =(id)=>{
    setActiveLight(prev => prev === id ? null : id)
  }

  return (
    <section className="border  border-slate_700 bg-slate_900  h-full w-full  ">
      <div className="hidden lg:block  h-full w-full">
        <div className="grid grid-cols-5 h-full w-full ">
          <div className=" grid grid-cols-4  h-full w-full ">
            <div className="py-3"> 
              <ul className="flex flex-col items-center gap-y-8 ">
                {aboutTitle.map((items) => {
                  const isActive = items.id === activeId;
                  return (
                    <li key={items.id}>
                      <Link
                        className={`text-4xl  transition hover:text-slate_300 duration-300 ease-in-out   ${
                          isActive ? "text-slate_300" : "text-slate_500"
                        }`}
                        onClick={() => handleClicked({id:items.id,title:items.title})}
                      >
                        {items.icon}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="col-span-3 border-l border-slate-700  h-full w-full">
              {activeId === 2 && (
                <Personal
                  setActiveChevUp={setActiveChevUp}
                  activeChevUp={activeChevUp}
                />
              )}
              {activeId === 1 && (
                <Professional
                  setActiveChevUp={setActiveChevUp}
                  activeChevUp={activeChevUp}
                />
              )}
              {activeId === 3 && (
                <Hobbies
                  setActiveChevUp={setActiveChevUp}
                  activeChevUp={activeChevUp}
                />
              )}
              <div>
                <p className="body_thin_md text-slate_50 px-6 py-3 flex  gap-x-2 items-center border-b border-slate_700">
                  {" "}
                  <span className="text-lg">{down}</span> contacts
                </p>
                <div className="p-3">
                  <ul className="space-y-2">
                    {contact.map((items) => {
                      const isLight = activeLight === items.id;
                      return (
                        <li
                          className={`cursor-pointer cursor-pointer body_thin_md   flex  items-center gap-x-[10px] ${
                            isLight ? "text-slate_50" : "text-slate_400"
                          }`}
                          key={items.key}
                          onClick={() => handleClickedContact(items.id)}
                        >
                          <span>{items.icon}</span>
                          {items.displayName}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className=" col-span-4  h-full w-full">
            <div className="border-l border-b border-slate_700 py-3 px-6 ">
              <p className="body_thin_md text-slate_400 flex gap-x-4 items-center cursor-pointer">
                {title}
                <span className="text-lg">{corss}</span>
              </p>
            </div>
            <div className="grid grid-cols-4  h-full">
              <div className="col-span-2 grid grid-cols-12  ">
                <div className="border-r border-l border-slate_700 col-span-11 pt-3 px-10">
                  {activeChevUp === 1 && activeId === 2 && <Bio />}
                  {activeChevUp === 2 && activeId === 2 && <Interest />}
                  {activeChevUp === 3 && activeId === 2 && <Educations />}
                  {activeChevUp === 4 && activeId === 2 && <HighSchool />}
                  {activeChevUp === 5 && activeId === 2 && <Univercity />}
                  {activeChevUp === 1 && activeId === 1 && <Exprience />}
                  {activeChevUp === 2 && activeId === 1 && <HardSkill />}
                  {activeChevUp === 3 && activeId === 1 && <SoftSkill />}

                  {activeChevUp === 1 && activeId === 3 && <Sports />}
                  {activeChevUp === 2 && activeId === 3 && <Game />}
                </div>
                <div className=" flex justify-center">
                  <div className="bg-slate_500 w-[80%]  h-3 mt-3"></div>
                </div>
              </div>
              <div className=" col-span-2 grid grid-cols-12 h-full  ">
                <div className="border-r border-l border-slate_700 col-span-11 pt-3 px-10">
                  <p className="body_thin_lg  text-slate_400 ">
                    // Code snippet showcase:
                  </p>
                  <div className="pt-[60px] flex flex-col gap-y-8 h-fit">
                    {snippet.map((items) => {
                      return (
                        <div key={items.id} className="flex  flex-col gap-y-3">
                          <div className="flex justify-between ">
                            <div className="flex items-center gap-x-3">
                              <figure>
                                <img
                                  src={items.userImage}
                                  className={"h-9 w-9 rounded-full"}
                                  alt="snippet Image"
                                />
                              </figure>
                              <div>
                                <p className="body_bold_sm text-indigo_500 ">
                                  {items.userName}
                                </p>
                                <p className="text-slate_500">
                                  Created {items.time} months ago
                                </p>
                              </div>
                            </div>
                            <div className="flex gap-x-3 ">
                              <a
                                href={items.to}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex  gap-x-2 text-slate_400 body_thin_sm"
                              >
                                <span>{message}</span> {items.details}
                              </a>
                              <p className="flex  gap-x-2 text-slate_400 body_thin_sm">
                                <span>{star}</span>
                                {items.star} stars
                              </p>
                            </div>
                          </div>
                          <figure>
                            <img src={items.codeImage} alt="codeImage" />
                          </figure>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="bg-slate_500 w-[80%] h-3 mt-3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

