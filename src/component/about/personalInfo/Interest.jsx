import React from "react";

const Interest = () => {
  return (
    <div>
      <pre className="body_thin_lg text-slate_400 hidden lg:block">
        {`1. /**
2.  * Interest
3.  * I am deeply interested in building
4.  * interactive and modern web interfaces
5.  * with a strong focus on user experience.
6.  *
7.  * I have a strong interest in learning
8.  * Full-Stack Web Development to better
9.  * understand complete web systems.
10. *
11. * I enjoy exploring new frontend tools,
12. * libraries, and design patterns.
13. *
14. * Problem-solving and clean architecture
15. * motivate me to learn and grow every day.
16. */
`}
      </pre>
       <div className="lg:hidden">
        <p className="body_thin_lg text-slate_400">
         I am deeply interested in building interactive and modern web interfaces with a strong focus on user experience. I have a strong interest in learning Full-Stack Web Development to better understand complete web systems. I enjoy exploring new frontend tools, libraries, and design patterns. Problem-solving and clean architecture motivate me to learn and grow every day.

        </p>
      </div>
    </div>
  );
};

export default Interest;
