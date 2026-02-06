import React from "react";

const Sports = () => {
  return (
    <div>
      <pre className="body_thin_lg text-slate_400 hidden lg:block">
        {`1. /**
2.  * Sports
3.  *
4.  * I enjoy playing various sports including
5.  * Football, Cricket, and Carrom.
6.  *
7.  * Playing sports helps me develop
8.  * teamwork, focus, and discipline,
9.  * which also reflects in my professional
10. * work and problem-solving mindset.
11. */

`}
      </pre>
      <div className="lg:hidden">
        <p className="body_thin_lg text-slate_400">
          I enjoy playing various sports including Football, Cricket, and Carrom. Playing sports helps me develop teamwork, focus, and discipline, which also reflects in my professional work and problem-solving mindset.

        </p>
      </div>
    </div>
  );
};

export default Sports;
