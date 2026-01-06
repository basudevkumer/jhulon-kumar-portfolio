import React from "react";
import Container from "../commonComponent/Container";
import allImages from "@/helper/ImageProvider";

const Hello = () => {
  const {
    hello_pages_Image,
    hello_pages_Bg_overlay1,
    hello_pages_Bg_overlay2,
  } = allImages;

  return (
    <section className="">
      <Container>
        <div className=" overflow-hidden border border-slate_700 bg-slate_900 sm:py-[150px] md:py-[150px] lg:py-[40px]  lg:grid lg:grid-cols-2 items-center gap-x-10   ">
          <div className="  ml-[75px]">
            <div className="pb-[75px] ">
              <h6 className="body_thin_lg text-slate_400">Hi all. I am</h6>
              <h1 className="heading1 text-slate_50 pt-4 pb-2">Jhulon Kumar</h1>
              <h4 className="text-indigo_500 heading4">
                {" "}
                &gt; Front-end developer
              </h4>
            </div>
            <div className="flex flex-col gap-2-5">
              <p className="body_thin_md text-slate_400  md:hidden sm:hidden lg:block ">
                // complete the game to continue
              </p>
              <p className="body_thin_md text-slate_400">
                // find my profile on Github:
              </p>
              <div className=" sm:flex-wrap flex  gap-x-2 ">
                <span className="body_thin_md text-indigo_500 ">const</span>
                <span className="body_thin_md text-teal_400 ">
                  {" "}
                  githubLink{" "}
                </span>
                <span className="body_thin_md text-slate_50 ">=</span>
                <a
                  href="https://github.com/basudevkumer"
                  className="body_thin_md text-rose_300 "
                  target="blank"
                >
                  “https://github.com/basudevkumer”
                </a>
              </div>
            </div>
          </div>
          <div className="pl-4 relative  ">
            <figure className="relative sm:hidden md:hidden lg:block">
              <img
                src={hello_pages_Image}
                alt="hello_bannar_Image"
                className="!z-20 relative"
              />
            </figure>
            <figure className="">
              <img
                src={hello_pages_Bg_overlay1}
                alt="hello_overlay"
                className=" absolute  sm:opacity-80  md:opacity-80 sm:top-[-430px] sm:left-[-70px] md:top-[-430px] md:left-[-70px] lg:top-[-140px] lg:left-[-140px]  w-[470px] h-[492px] z-10 sm:block"
              />
              <img
                src={hello_pages_Bg_overlay2}
                alt="hello_overlay"
                className=" absolute sm:top-[-330px] sm:opacity-80 md:opacity-80   sm:left-[160px] md:top-[-330px] md:left-[160px] lg:top-[125px] lg:left-[235px]  w-[454px] h-[492px] z-10"
              />
            </figure>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hello;
