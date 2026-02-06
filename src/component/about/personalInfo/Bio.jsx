import React from "react";

const Bio = () => {
  return (
    <div>
      <pre className="body_thin_lg text-slate_400 hidden lg:block">
        {`1. /**
2.  * Bio
3.  * I am a passionate Front-End Developer
4.  * with a strong focus on interactive
5.  * and user-friendly web experiences.
6.  *
7.  * I enjoy turning creative ideas into
8.  * functional designs using clean logic
9.  * and modern technologies.
10. *
11. * I spend most of my time coding,
12. * solving problems, and improving
13. * my development skills every day.
14. *
15. * Dedicated, team-oriented, and
16. * deeply in love with my work.
17. */

`}
      </pre>
      <div className="lg:hidden">
        <p className="body_thin_lg text-slate_400">
         I am a passionate Front-End Developer with a strong focus on interactive and user-friendly web experiences. I enjoy turning creative ideas into functional designs using clean logic and modern technologies. I spend most of my time coding, solving problems, and improving my development skills every day. Dedicated, team-oriented, and deeply in love with my work.
        </p>
      </div>
    </div>
  );
};

export default Bio;
