import allIcon from "./IconProvider";
import allImages from "./ImageProvider";

const { footerIcon, rightChev, folder, downChev, email, call, mDown,aboutPageIcon } = allIcon;
const { myselfImage, snippetOne, snippetTwo } = allImages;

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
    isLast: true,
  },
];

const footerArray = [
  { id: 1, icon: "find me in:" },
  { id: 2, icon: footerIcon[0].icon },
  { id: 3, icon: footerIcon[1].icon },
];

const bio = [
  {
    id: 1,
    key: "bio",
    displayName: "bio",
    icon: rightChev,
    icon2: folder,
    icon3: downChev,
    icon2Class: "text-rose_400",
    order: 1,
    isActive: true,
  },
  {
    id: 2,
    key: "interests",
    displayName: "interests",
    icon: rightChev,
    icon2: folder,
    icon3: downChev,
    icon2Class: "text-teal_400",
    order: 2,
    isActive: true,
  },
  {
    id: 3,
    key: "education",
    displayName: "education",
    icon: rightChev,
    icon2: folder,
    icon3: downChev,
    icon2Class: "text-indigo_500",
    order: 3,
    isActive: true,
  },
  {
    id: 4,
    key: "high-school",
    displayName: "high School",
    icon2: mDown,
    order: 4,
    // isActive: true,
    className: "pl-4",
  },
  {
    id: 5,
    key: "university",
    displayName: "university",
    icon2: mDown,
    order: 5,
    // isActive: true,
    className: "pl-4",
  },
];

const professionalInfo = [
  {
    id: 1,
    key: "experience",
    displayName: "experience",
    icon: rightChev,
    icon2: folder,
    icon3: downChev,
    icon2Class: "text-rose_400",
    order: 1,
    isActive: true,
  },
  {
    id: 2,
    key: "hard-skills",
    displayName: "hard-skills",
    icon: rightChev,
    icon2: folder,
    icon3: downChev,
    icon2Class: "text-teal_400",
    order: 2,
    isActive: true,
  },
  {
    id: 3,
    key: "education",
    displayName: "soft-skills",
    icon: rightChev,
    icon2: folder,
    icon3: downChev,
    icon2Class: "text-indigo_500",
    order: 3,
    isActive: true,
  },
 
];

const hobbies = [
  {
    id: 1,
    key: "sports",
    displayName: "sports",
    icon: rightChev,
    icon2: folder,
    icon3: downChev,
    icon2Class: "text-rose_400",
    order: 1,
    isActive: true,
  },
  {
    id: 2,
    key: "favorite-games",
    displayName: "favorite-games",
    icon: rightChev,
    icon2: folder,
    icon3: downChev,
    icon2Class: "text-teal_400",
    order: 2,
    isActive: true,
  },

 
];

const contact = [
  {
    id: 1,
    key: "email",
    displayName: "user@gmail.com",
    icon: email,
    icon2Class: "text-rose_400",
    order: 1,
    isActive: true,
  },
  {
    id: 2,
    key: "phone-number",
    displayName: "+8801854555136",
    icon: call,
    icon2Class: "text-rose_400",
    order: 2,
    isActive: true,
  },
];

const snippet = [
  {
    id: 1,
    userImage: myselfImage,
    userName: "@basudevkumer",
    to: "https://github.com/basudevkumer/e-commerce1.0/blob/main/src/api/productApiP.js",
    time: "3",
    details: "Details",
    star: "0",
    codeImage: snippetOne,
  },
  {
    id: 2,
    userImage: myselfImage,
    userName: "@basudevkumer",
    to: "https://github.com/basudevkumer/e-commerce1.0/blob/main/src/hooks/useCategory.jsx",
    time: "3",
    details: "Details",
    star: "0",
    codeImage: snippetTwo,
  },
];

const aboutTitle = [
  {id:1, icon:aboutPageIcon[0].icon  ,title: "personal-info"},
  {id:2, icon:aboutPageIcon[1].icon  ,title: "professional-info"},
  {id:3, icon:aboutPageIcon[2].icon  ,title: "hobbies-info"},
]

export { navbarArray, footerArray, bio, contact, snippet ,professionalInfo,hobbies,aboutTitle};
