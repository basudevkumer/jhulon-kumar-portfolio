import Button from "@/component/commonComponent/Button";
import allIcon from "@/helper/IconProvider";
import React from "react";

const ProjectCard = () => {


  const { techIcons } = allIcon;
  return (
    <div className="">
      <p className="body_bold_md text-indigo_500 pb-4">
        Project 1
        <span className="pl-3  text-slate_400 body_thin_md">
          // _ui-animations
        </span>
      </p>
      <div className="border-2 border-slate_800 overflow-hidden rounded-[16px]">
        <figure className="relative">
          <img
            src="https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg"
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
              Duis aute irure dolor in velit esse cillum dolore.
            </p>
            <div className=" mt-5">
              <Button children={"view-project"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
