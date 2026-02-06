import Button from "@/component/commonComponent/Button";
import allIcon from "@/helper/IconProvider";
import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ value }) => {
  const { techIcons } = allIcon;
  return (
    <div className="">
      <p className="body_bold_md text-indigo_500 pb-4">
        {value?.title}
        <span className="pl-3  text-slate_400 body_thin_md">
          {value?.subtitle}
        </span>
      </p>
      <div className="border-2 border-slate_800 overflow-hidden rounded-[16px]">
        <figure className="relative">
          <img
            src={value?.image}
            alt="project images"
            className=" max-h-[145px] w-full object-cover "
          />
          <span className="absolute top-5 right-5 rounded-[7px] text-slate_900 bg-indigo_300 inline-block p-2 text-2xl">
            {techIcons[0].icon}
          </span>
        </figure>
        <div>
          <div className="p-6 ">
            <p className="text-slate_400 body_thin_lg line-clamp-2">
              {value?.description}
            </p>
            <div className=" mt-5">
              <a href={value?.to} target="_blank">
                <Button children={"view-project"} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
