// import React from "react";
// import { SideNavUserCard } from "../sideNavUserCard/SideNavUserCard";

// export const SideNav = () => {
//   return (
//     <div className="bottom-nav h-screen w-1/4 pt-16 border-l border-r border-gray-200 overflow-x-auto">
//       <SideNavUserCard />
//       <SideNavUserCard />
//       <SideNavUserCard />
//       <SideNavUserCard />
//       <SideNavUserCard />
//       <SideNavUserCard />
//       <SideNavUserCard />
//       <SideNavUserCard />
//       <SideNavUserCard />
//       <SideNavUserCard />
//       <SideNavUserCard />
//       <SideNavUserCard />
//       <SideNavUserCard />
//       <SideNavUserCard />
//     </div>
//   );
// };

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
// import { div } from "react-router-dom";
// import { useReduce } from "../../providers/useReducerProvider";

export const BottomNav = () => {
  // const { setIsSideNav } = useReduce();

  // const closeSideNav = () => {
  //   document.getElementById("sideNav").style.width = "0%";
  //   setIsSideNav(false);
  // };
  return (
    <>
      <nav className="bottom-nav md:block hidden" id="sideNav">
        <div className="link bottom-nav-item1" to="/">
          <AiOutlineMessage className="bottom-nav-icon" />
        </div>
        <div className="link bottom-nav-item2" to="/history">
          <AiOutlineNotification className="bottom-nav-icon" />
        </div>
        <div className="bottom-nav-item3">
          {" "}
          <AiOutlineHome className="bottom-nav-icon" />
        </div>
        <div className="link bottom-nav-item4" to="/later">
          <CgProfile className="bottom-nav-icon" />
        </div>{" "}
        <div className="link bottom-nav-item5" to="/liked">
          <AiOutlineLogout className="bottom-nav-icon" />
        </div>
      </nav>
    </>
  );
};
