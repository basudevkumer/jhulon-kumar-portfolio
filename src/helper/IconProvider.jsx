import { BsTwitterX } from "react-icons/bs";
import { LuLinkedin } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import { FaBarsStaggered } from "react-icons/fa6";
import { AiFillCode } from "react-icons/ai";
import { VscCircleLargeFilled } from "react-icons/vsc";
import { RiGamepadFill } from "react-icons/ri";
import { FaSortDown } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import { RiFolder3Fill } from "react-icons/ri";
import { FaChevronDown } from "react-icons/fa6";
import { MdCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { IoLogoMarkdown } from "react-icons/io";
import { BiSolidMessageRoundedMinus } from "react-icons/bi";
import { BiStar } from "react-icons/bi";
import { IoClose } from "react-icons/io5";



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
  aboutPageIcon: [
    { id: 1, icon: <AiFillCode />, to: "" },
    { id: 2, icon: <VscCircleLargeFilled />, to: "" },
    { id: 3, icon: <RiGamepadFill />, to: "" },
  ],
  down: <FaSortDown />,
  rightChev: <FaChevronRight />,
  downChev: <FaChevronDown />,
  folder: <RiFolder3Fill />,
  call: <MdCall />,
  email: <MdEmail />,
  mDown: <IoLogoMarkdown />,
  message: <BiSolidMessageRoundedMinus />,
  star: <BiStar />,
  corss: <IoClose/>
};

export default allIcon;
