import { BsTwitterX } from "react-icons/bs";
import { LuLinkedin } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import { FaBarsStaggered } from "react-icons/fa6";

const allIcon = {
  footerIcon: [
    { id: 1, icon: <BsTwitterX /> },
    { id: 2, icon: <LuLinkedin /> },
    { id: 3, icon: <FaGithub /> },
  ],
  navbarTogglerIcon: [
    { id: 1, icon: <MdOutlineClose /> },
    { id: 2, icon: <FaBarsStaggered /> },
  ],
};

export default allIcon;
