import { IoHome } from "react-icons/io5";
import { AiOutlineHome } from "react-icons/ai";

import { AiOutlineLogout } from "react-icons/ai";
import { AiOutlineNotification } from "react-icons/ai";
import { AiOutlineMessage } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

import { FaHistory } from "react-icons/fa";
import { RiPlayList2Line } from "react-icons/ri";
import { MdWatchLater } from "react-icons/md";
import { FaThumbsUp } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

export const BottomNav = () => {
  return (
    <>
      <nav
        className="bottom-nav md:block hidden text-brand-primaryText"
        id="sideNav"
      >
        <NavLink
          activeClassName="text-brand-secondaryText transform scale-150"
          className="link bottom-nav-item1 icon-hover"
          to="/message"
        >
          <AiOutlineMessage className="bottom-nav-icon" />
        </NavLink>
        <NavLink
          activeClassName="text-brand-secondaryText transform scale-150"
          className="link bottom-nav-item2 icon-hover"
          to="/history"
        >
          <AiOutlineNotification className="bottom-nav-icon" />
        </NavLink>
        <NavLink
          end
          activeClassName="text-brand-secondaryText transform scale-150"
          className="bottom-nav-item3 icon-hover"
          to="/"
        >
          {" "}
          <AiOutlineHome className="bottom-nav-icon " />
        </NavLink>
        <NavLink
          activeClassName="text-brand-secondaryText transform scale-150"
          className="link bottom-nav-item4 icon-hover"
          to="/profile"
        >
          <CgProfile className="bottom-nav-icon" />
        </NavLink>{" "}
        <NavLink
          activeClassName="text-brand-secondaryText transform scale-150"
          className="link bottom-nav-item5 icon-hover"
          to="/logout"
        >
          <AiOutlineLogout className="bottom-nav-icon" />
        </NavLink>
      </nav>
    </>
  );
};
