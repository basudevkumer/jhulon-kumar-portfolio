import allIcon from "@/helper/IconProvider";
import { contact } from "@/helper/projectNecessaryArr-obj";
import { useState } from "react";
import Button from "../commonComponent/Button";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(5, "Message too short"),
});

const ContactContainer = () => {
  //date
  const date = new Date();

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const formattedDate = `${days[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]}`;

  // manage state
  const [activeLight, setActiveLight] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  //manage event

  const handleClickedContact = (id) => {
    setActiveLight((prev) => (prev === id ? null : id));
  };

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  // Separate useForm for Desktop and Mobile

  const desktopForm = useForm({ resolver: zodResolver(contactSchema) });
  const mobileForm = useForm({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (data) => {
    console.log("Form Data:", data);
    await new Promise((res) => setTimeout(res, 1000)); // demo delay
  };

  //  Watch values

  const nameValueDesktop = desktopForm.watch("name");
  const emailValueDesktop = desktopForm.watch("email");
  const messageValueDesktop = desktopForm.watch("message");

  const nameValueMobile = mobileForm.watch("name");
  const emailValueMobile = mobileForm.watch("email");
  const messageValueMobile = mobileForm.watch("message");

  // for icon
  const { down } = allIcon;

  return (
    <section className="border border-slate-700  h-full w-full">
      <div className="h-full w-full hidden lg:block">
        <div className="grid grid-cols-5 h-full w-full ">
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
                <form
                  onSubmit={desktopForm.handleSubmit(onSubmit)}
                  className="flex flex-col gap-y-6 w-[70%]"
                >
                  {/* Name */}
                  <div className="flex flex-col">
                    <label className="body_thin_md text-slate_400 pb-2">
                      _name:
                    </label>

                    <input
                      {...desktopForm.register("name")}
                      className="p-3 text-slate_400 bg-slate_950 border-2 rounded-[5px] border-slate_700"
                      placeholder="Jhulon Kumar"
                    />

                    {desktopForm.formState.errors.name && (
                      <span className="text-red-400 text-sm pt-1">
                        {desktopForm.formState.errors.name.message}
                      </span>
                    )}
                  </div>

                  {/* Email */}
                  <div className="flex flex-col">
                    <label className="body_thin_md text-slate_400 pb-2">
                      _email:
                    </label>

                    <input
                      {...desktopForm.register("email")}
                      type="email"
                      className="p-3 text-slate_400 bg-slate_950 border-2 rounded-[5px] border-slate_700"
                    />

                    {desktopForm.formState.errors.email && (
                      <span className="text-red-400 text-sm pt-1">
                        {desktopForm.formState.errors.email.message}
                      </span>
                    )}
                  </div>

                  {/* Message */}
                  <div className="flex flex-col">
                    <label className="body_thin_md text-slate_400 pb-2">
                      _message:
                    </label>

                    <textarea
                      {...desktopForm.register("message")}
                      placeholder="your message here..."
                      className="h-[84px] w-full p-3 text-slate_400 bg-slate_950 border-2 border-slate_700 rounded-[5px]"
                    />

                    {desktopForm.formState.errors.message && (
                      <span className="text-red-400 text-sm pt-1">
                        {desktopForm.formState.errors.message.message}
                      </span>
                    )}
                  </div>

                  {/* Button */}
                  <button
                    type="submit"
                    disabled={desktopForm.formState.isSubmitting}
                    className="text-slate_400 hover:text-slate_950 hover:bg-orange_200 transition duration-300 ease-in-out py-4 border border-slate_700 rounded-[5px]"
                  >
                    {desktopForm.formState.isSubmitting
                      ? "submitting..."
                      : "submit-message"}
                  </button>
                </form>
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
                        document.querySelector
                        <span className="text-slate_400">{`( `}</span>
                        <span className="text-orange_300">'#sendBtn'</span>{" "}
                        <span>
                          <span className="text-slate_400">{`)`}</span>
                          <span></span>
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
                        "{nameValueDesktop}"
                      </span>{" "}
                      <span className="text-slate_400">,</span>
                    </div>
                  </div>
                  <div className="flex gap-x-10">
                    <span className="text-slate_400">5</span>
                    <div className="flex gap-x-[10px]">
                      <span className="text-purple_400">email:</span>
                      <span className="text-orange_300">
                        {" "}
                        "{emailValueDesktop}"
                      </span>{" "}
                      <span className="text-slate_400">,</span>
                    </div>
                  </div>
                  <div className="flex gap-x-10">
                    <span className="text-slate_400  ">6</span>
                    <div className="flex gap-x-[10px]">
                      <span className="text-purple_400">message:</span>
                      <span className="text-orange_300">
                        {" "}
                        "{messageValueDesktop}"
                      </span>{" "}
                      <span className="text-slate_400">,</span>
                    </div>
                  </div>
                  <div className="flex gap-x-10">
                    <span className="text-slate_400 ">7</span>
                    <div className="flex gap-x-[10px]">
                      <span className="text-purple_400">date:</span>
                      <span className="text-orange_300">
                        {" "}
                        "{formattedDate}"
                      </span>{" "}
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
      </div>
      <div className="lg:hidden w-full h-full">
        <div>
          <button
            className="body_thin_md w-full text-slate_50 px-6 py-3 flex  gap-x-3 items-center  bg-slate_700  "
            onClick={handleOpen}
          >
            <span className={`text-lg  ${isOpen ? "rotate-0" : "-rotate-90"}`}>
              {down}
            </span>{" "}
            contacts
          </button>
          {isOpen && (
            <div className="py-3 px-6">
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
          )}
        </div>

        <div className="lg:hidden w-full h-full ">
          <div className="border-r border-slate_700 flex justify-center  py-[50px]">
            <form
              onSubmit={mobileForm.handleSubmit(onSubmit)}
              className="flex flex-col gap-y-6 w-[70%]"
            >
              {/* Name */}
              <div className="flex flex-col">
                <label className="body_thin_md text-slate_400 pb-2">
                  _name:
                </label>

                <input
                  {...mobileForm.register("name")}
                  className="p-3 text-slate_400 bg-slate_950 border-2 rounded-[5px] border-slate_700"
                  placeholder="Jhulon Kumar"
                />

                {mobileForm.formState.errors.name && (
                  <span className="text-red-400 text-sm pt-1">
                    {mobileForm.formState.errors.name.message}
                  </span>
                )}
              </div>

              {/* Email */}
              <div className="flex flex-col">
                <label className="body_thin_md text-slate_400 pb-2">
                  _email:
                </label>

                <input
                  {...mobileForm.register("email")}
                  type="email"
                  className="p-3 text-slate_400 bg-slate_950 border-2 rounded-[5px] border-slate_700"
                />

                {mobileForm.formState.errors.email && (
                  <span className="text-red-400 text-sm pt-1">
                    {mobileForm.formState.errors.email.message}
                  </span>
                )}
              </div>

              {/* Message */}
              <div className="flex flex-col">
                <label className="body_thin_md text-slate_400 pb-2">
                  _message:
                </label>

                <textarea
                  {...mobileForm.register("message")}
                  placeholder="your message here..."
                  className="h-[84px] w-full p-3 text-slate_400 bg-slate_950 border-2 border-slate_700 rounded-[5px]"
                />

                {mobileForm.formState.errors.message && (
                  <span className="text-red-400 text-sm pt-1">
                    {mobileForm.formState.errors.message.message}
                  </span>
                )}
              </div>

              {/* Button */}
              <button
                type="submit"
                disabled={mobileForm.formState.isSubmitting}
                className="text-slate_400 hover:text-slate_950 hover:bg-orange_200 transition duration-300 ease-in-out py-4 border border-slate_700 rounded-[5px]"
              >
                {mobileForm.formState.isSubmitting ? "submitting..." : "submit-message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactContainer;
