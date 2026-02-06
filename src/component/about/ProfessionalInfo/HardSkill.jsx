import React from 'react'

const HardSkill = () => {
  return (
     <div>
      <pre className="body_thin_lg text-slate_400 hidden lg:block">
        {` 1. /**
2.  * Hard Skills
3.  *
4.  * Programming & Front-End:
5.  * - HTML, CSS, JavaScript
6.  * - React JS, Next.js (basic)
7.  *
8.  * UI & Styling:
9.  * - Tailwind CSS, Bootstrap
10. * - Responsive & Interactive Design
11. *
12. * State Management & Data:
13. * - Redux, React Query, Context API
14. *
15. * Tools & Version Control:
16. * - Git, GitHub , Figma
17. *
18. * Practices & Mindset:
19. * - Daily coding practice
20. * - Problem-solving
21. * - Writing clean and maintainable code
22. */

`}
      </pre>
       <div className="lg:hidden">
        <p className="body_thin_lg text-slate_400">
          Programming & Front-End: HTML, CSS, JavaScript, React JS, Next.js (basic). UI & Styling: Tailwind CSS, Bootstrap, Responsive & Interactive Design. State Management & Data: Redux, React Query, Context API. Tools & Version Control: Git, GitHub. Practices & Mindset: Daily coding practice, Problem-solving, Writing clean and maintainable code.

        </p>
      </div>
    </div>
  )
}

export default HardSkill