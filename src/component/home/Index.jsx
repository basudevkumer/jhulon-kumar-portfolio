import React from "react";
import Container from "../commonComponent/Container";
import allImages from "@/helper/ImageProvider";

const Hello = () => {
  const { hello_pages_Image } = allImages;

  return (
    <section className=" h-full w-full border  border-b-0 lg:border border-slate_700   bg-slate_900   ">
      <Container>
        <div className=" py-[50px] sm:px-5  sm:py-[150px] md:py-[150px] lg:py-[40px]   grid grid-cols-1 lg:grid-cols-2 items-center w-full  gap-x-[146px] ">
          <div className="md:pl-[100px] sm:pl-[40px]">
            <div className=" pb-12 sm:pb-[75px] ">
              <h6 className="body_thin_lg text-slate_400">Hi all. I am</h6>
              <h1 className=" heading1xs sm:heading1 text-slate_50 pt-4 pb-2">Jhulon Kumar</h1>
              <h4 className="text-indigo_500 heading4xs sm:heading4">
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
              <div className=" flex-wrap flex  gap-x-2 ">
                <span className="body_thin_md text-indigo_500 ">const</span>
                <span className="body_thin_md text-teal_400 ">
                  {" "}
                  githubLink{" "}
                </span>
                <span className="body_thin_md text-slate_50 ">=</span>
                
                <a
                  href="https://github.com/basudevkumer"
                  className="body_thin_md text-rose_300 break-words max-w-full"
                  target="blank"
                >
                  “https://github.com/basudevkumer”
                </a>
              </div>
            </div>
          </div>
          <div className=" relative  ">
            <figure className="relative hidden lg:block">
              <img
                src={hello_pages_Image}
                alt="hello_bannar_Image"
                className="!z-20 relative  h-[px]"
              />
            </figure>

            <div className="bg-teal_400 w-[150px] h-[150px] top-[-290px] left-10  lg:w-[400px] lg:h-[400px]  md:w-[350px] md:h-[350px]   blur-[174px] opacity-50 md:opacity-40  absolute sm:w-[250px] sm:h-[250px]  sm:top-[-330px] sm:left-[20px] md:top-[-400px] md:left-[0px] lg:top-[-30px] lg:left-[-140px]   z-10 sm:block"></div>
            <div className="bg-indigo_500 w-[150px] h-[150px] top-[-170px] left-[70px] lg:w-[400px] lg:h-[400px]   md:w-[350px] md:h-[350px]  blur-[174px] opacity-75  md:opacity-40 absolute  sm:w-[250px] sm:h-[250px]    absolute sm:top-[-130px]    sm:left-[210px] md:top-[-150px] md:left-[250px] lg:top-[120px] lg:left-[180px]  z-10 "></div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hello;
