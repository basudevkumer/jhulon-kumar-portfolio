import allIcon from "./IconProvider";

const { footerIcon } = allIcon;

const navbarArray = [
  {
    id: 1,
    name: "jhulon-kumar",
    className: "border-r ",
    status: true,
    responsive: false,
  },
  {
    id: 2,
    name: "_hello",
    className: "border-r",
    status: false,
    responsive: true,
  },
  { id: 3, name: "_about-me", className: "", status: false, responsive: true },
  {
    id: 4,
    name: "_projects",
    className: "border-r border-l",
    status: false,
    responsive: true,
  },

  {
    id: 5,
    name: "_contact-me",
    className: "border-l",
    status: false,
    responsive: true,
    isLast:true
  },
];

const footerArray = [
  { id: 1, icon: "find me in:" },
  { id: 2, icon: footerIcon[0].icon },
  { id: 3, icon: footerIcon[1].icon },
];

export { navbarArray, footerArray };
