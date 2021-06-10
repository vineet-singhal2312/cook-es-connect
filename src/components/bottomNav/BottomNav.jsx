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
      <nav className="bottom-nav md:block hidden" id="sideNav">
        <NavLink
          activeClassName="active-link"
          className="link bottom-nav-item1"
          to="/message"
        >
          <AiOutlineMessage className="bottom-nav-icon" />
        </NavLink>
        <NavLink
          activeClassName="active-link"
          className="link bottom-nav-item2"
          to="/history"
        >
          <AiOutlineNotification className="bottom-nav-icon" />
        </NavLink>
        <NavLink
          end
          activeClassName="active-link"
          className="bottom-nav-item3"
          to="/"
        >
          {" "}
          <AiOutlineHome className="bottom-nav-icon " />
        </NavLink>
        <NavLink
          activeClassName="active-link"
          className="link bottom-nav-item4"
          to="/profile"
        >
          <CgProfile className="bottom-nav-icon" />
        </NavLink>{" "}
        <NavLink
          activeClassName="active-link"
          className="link bottom-nav-item5"
          to="/logout"
        >
          <AiOutlineLogout className="bottom-nav-icon" />
        </NavLink>
      </nav>
    </>
  );
};
