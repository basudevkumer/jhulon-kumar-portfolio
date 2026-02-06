import React from "react";

const Univercity = () => {
  return (
    <div>
      <pre className="body_thin_lg text-slate_400 hidden lg:block">
        {`1. 1. /**
2.  * Diploma Education
3.  * I completed a 4-year Diploma in
4.  * Computer Technology from
5.  * Sylhet Polytechnic Institute.
6.  *
7.  * Duration: 2020 - 2021
8.  *
9.  * This program helped me gain
10. * strong technical knowledge and
11. * practical skills in technology.
12. */

`}
      </pre>
       <div className="lg:hidden">
        <p className="body_thin_lg text-slate_400">
          I completed a 4-year Diploma in Computer Technology from Sylhet Polytechnic Institute. Duration: 2020–2021. This program helped me gain strong technical knowledge and practical skills in technology.
        </p>
      </div>
    </div>
  );
};

export default Univercity;
