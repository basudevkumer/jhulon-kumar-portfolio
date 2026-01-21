import allIcon from "@/helper/IconProvider";
import { contact } from "@/helper/projectNecessaryArr-obj";
import { useState } from "react";
import Button from "../commonComponent/Button";

const ContactContainer = () => {
  // manage state
  const [activeLight, setActiveLight] = useState(null);
  //manage event
  const handleClickedContact = (id) => {
    setActiveLight((divv) => (divv === id ? null : id));
  };
  const { down } = allIcon;
  return (
    <section className="border border-slate-700  h-full w-full">
      <div className="grid grid-cols-5 h-full w-full">
        <div className="border-r border-slate_700 h-full w-full ">
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
        <div className="col-span-4 h-full w-full">
          <div className="h-[48px] border-b border-slate_700"></div>
          <div className=" grid grid-cols-2 h-full">
            <div className="border-r border-slate_700 flex justify-center  lg:pt-[50px] pt-[132px]">
              <div className="flex flex-col gap-y-6">
                <div className="flex flex-col">
                  <label
                    htmlFor="name"
                    className="body_thin_md  text-slate_400 pb-2"
                  >
                    _name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="p-3 placeholder:text-slate_400 text-slate_400 placeholder:body_thin_md body_thin_md bg-slate_950 border-2 rounded-[5px] border-slate_700"
                    placeholder="Jhulon Kumar"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="email"
                    className="body_thin_md  text-slate_400 pb-2"
                  >
                    _email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="p-3 placeholder:text-slate_400 text-slate_400 placeholder:body_thin_md body_thin_md bg-slate_950 border-2 rounded-[5px] border-slate_700"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="message"
                    className="body_thin_md  text-slate_400 pb-2"
                  >
                    _message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="your message here..."
                    className="h-[84px] w-full p-3   placeholder:text-slate_400 text-slate_400 placeholder:body_thin_md body_thin_md bg-slate_950 border-2  border-slate_700 rounded-[5px]"
                  ></textarea>
                </div>
                  <div>
                    <Button children={"submit-message"} className={"text-slate_400 hover:text-slate_950 hover:bg-orange_200 transition duration-300 ease-in-out"}/>
                  </div>
              </div>
            </div>
            <div className="py-3 px-10">
              <div className="text-indigo_500 body_thin_lg  flex flex-col gap-y-1 ">
                <div className="flex gap-x-10">
                  <span className="text-slate_400 ">1</span>
                  <div className="flex gap-x-[10px] ">
                    <span className="text-purple_400">const</span>{" "}
                    <span>button</span>{" "}
                    <span className="text-purple_400">=</span>{" "}
                    <div>
                      document.querySelector<span className="text-slate_400">{`( `}</span><span className="text-orange_300">'#sendBtn'</span> <span><span className="text-slate_400">{`)`}</span><span></span>
                      </span>
                    </div>
                  </div>
                </div>
                <span className="text-slate_400  ">2</span>
                <div className="flex gap-x-10">
                  <span className="text-slate_400 ">3</span>
                  <div className="flex gap-x-[10px]">
                    <span className="text-purple_400">const</span>{" "}
                    <span>button</span>{" "}
                    <span className="text-purple_400">=</span>{" "}
                    <span className="text-slate_400">{`{`}</span>
                  </div>
                </div>
                <div className="flex gap-x-10">
                  <span className="text-slate_400 ">4</span>
                  <div className="flex gap-x-[10px]">
                    <span className="text-purple_400">name:</span>
                    <span className="text-orange_300">
                      {" "}
                      "Jonathan Davis"
                    </span>{" "}
                    <span className="text-slate_400">,</span>
                  </div>
                </div>
                <div className="flex gap-x-10">
                  <span className="text-slate_400">5</span>
                  <div className="flex gap-x-[10px]">
                    <span className="text-purple_400">email:</span>
                    <span className="text-orange_300"> ""</span>{" "}
                    <span className="text-slate_400">,</span>
                  </div>
                </div>
                <div className="flex gap-x-10">
                  <span className="text-slate_400  ">6</span>
                  <div className="flex gap-x-[10px]">
                    <span className="text-purple_400">message:</span>
                    <span className="text-orange_300"> ""</span>{" "}
                    <span className="text-slate_400">,</span>
                  </div>
                </div>
                <div className="flex gap-x-10">
                  <span className="text-slate_400 ">7</span>
                  <div className="flex gap-x-[10px]">
                    <span className="text-purple_400">date:</span>
                    <span className="text-orange_300"> "Thu 21 Apr"</span>{" "}
                    <span className="text-slate_400">,</span>
                  </div>
                </div>
                <div className="flex gap-x-10">
                  <span className="text-slate_400 ">8</span>
                  <div className="flex gap-x-[10px]">
                    <span className="text-slate_400">{`}`}</span>
                  </div>
                </div>
                <span className="text-slate_400 ">9</span>
                <div className="flex gap-x-10">
                  <span className="text-slate_400 ">10</span>
                  <div className="flex gap-x-[10px]">
                    button.addEventListener
                    <span className="text-slate_400">{`(`}</span>
                    <span className="text-orange_300">'click'</span>
                    <span className="text-slate_400">,</span>
                    <span className="text-slate_400">{`()`}</span>
                    <span className="text-purple_400">{`=>`}</span>
                    <span className="text-slate_400">{`{`}</span>
                  </div>
                </div>
                <div className="flex gap-x-10">
                  <span className="text-slate_400 ">11</span>
                  <div className="">
                    form<span className="text-slate_400">.</span>
                    send<span className="text-slate_400">{`(`}</span>message
                    <span className="text-slate_400">{`)`}</span>{" "}
                    <span className="text-slate_400">{`;`}</span>
                  </div>
                </div>
                <div className="flex gap-x-10">
                  <span className="text-slate_400 ">12</span>
                  <div className="">
                    <span className="text-slate_400">{`)}`}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactContainer;
