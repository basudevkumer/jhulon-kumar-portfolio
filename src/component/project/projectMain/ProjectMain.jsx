import allIcon from "@/helper/IconProvider";
import { allProjects, allTechIcons } from "@/helper/projectNecessaryArr-obj";
import React, { useState } from "react";
import ProjectCard from "../projectCard/ProjectCard";
import { useVirtualizer } from "@tanstack/react-virtual";

const ProjectMain = () => {
  // state manage
  const [techArr, setTechArr] = useState([]);

  // handle Event

  const handleChange = (items, checked) => {
    setTechArr((prev) => {
      if (checked) {
        return [...prev, items.name];
      } else {
        return prev.filter((i) => i !== items.name);
      }
    });
  };

  // The scrollable element for your list
  const parentRef = React.useRef(null);

  const columnCount = 3;
  const rowCount = Math.ceil(allProjects.length / columnCount);

  // The virtualizer
  const rowVirtualizer = useVirtualizer({
    count: rowCount || 0,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 400,
  });
  const { down } = allIcon;
  return (
    <div className="grid grid-cols-5 border border-slate_700  min-h-[calc(100vh-190px)]">
      <div className=" ">
        <p className="body_thin_md flex gap-x-2 text-slate_50 py-3 border-r border-b border-slate_700  px-6 ">
          <span>{down}</span> projects
        </p>
        <div className="flex flex-col gap-y-4 py-3 px-6">
          {allTechIcons.map((items) => {
            return (
              <label
                className=" flex items-center gap-x-6  cursor-pointer w-fit "
                key={items.id}
              >
                <input
                  type="checkbox"
                  className="w-5 h-5   accent-slate_500"
                  checked={techArr.includes(items.name)}
                  onChange={(e) => handleChange(items, e.target.checked)}
                />
                <span className="flex items-center gap-x-2">
                  <span className="text-slate_500  text-xl">{items.icon}</span>{" "}
                  <span className="text-gray_50  !body_thin_md ">
                    {items.name}
                  </span>
                </span>
              </label>
            );
          })}
        </div>
      </div>
      <div className="col-span-4  border-l border-slate-700">
        <div className="py-3 px-6 border-b border-slate-700">
          <p className="text-slate-400  body_thin_md "> React</p>
        </div>
        <div className="grid grid-cols-12  h-full ">
          <div className="col-span-11 p-[40px] pr-0   gap-10">
            {/* The scrollable element for your list */}
            <div
              ref={parentRef}
              style={{
                height: "calc(100vh - 330px)",
                overflow: "auto", // Make it scroll!
              }}
            >
              {/* The large inner element to hold all of the items */}
              <div
                style={{
                  height: `${rowVirtualizer.getTotalSize()}px`,
                  width: "100%",
                  position: "relative",
                }}
              >
                {/* Only the visible items in the virtualizer, manually positioned to be in view */}
                {rowVirtualizer.getVirtualItems().map((virtualItem) => {
                  const startIndex = virtualItem.index * 3;

                  const startRow = allProjects.slice(
                    startIndex,
                    startIndex + 3,
                  );

                  return (
                    <div
                      key={virtualItem.key}
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: `${virtualItem.size}px`,
                        transform: `translateY(${virtualItem.start}px)`,
                      }}
                      className="text-white  grid grid-cols-3  gap-x-6"
                    >
                      {startRow.map((items) => {
                        return <ProjectCard key={items.id} />;
                      })}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className=" grid grid-cols-2">
            <div>1</div>
            <div className=" border-l border-slate_700 "> 2</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectMain;
