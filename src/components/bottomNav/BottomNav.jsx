import { AiOutlineHome } from "react-icons/ai";

import { AiOutlineLogout } from "react-icons/ai";
import { AiOutlineNotification } from "react-icons/ai";
import { BsMoon } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { IoMdSunny } from "react-icons/io";

import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { darkModeButtonPressed } from "../../features/darkMode/darkModeSlice";

export const BottomNav = () => {
  const dispatch = useDispatch();
  const { dark } = useSelector((state) => {
    return state;
  });
  console.log(dark);
  return (
    <>
      <nav
        className="bottom-nav background-1 hover:shadow-2 z-10 md:block hidden text-brand-primaryText"
        id="sideNav"
      >
        <div className="link bottom-nav-item1 icon-hover">
          {dark.isDarkModeEnable ? (
            <BsMoon
              color="peachpuff"
              className="bottom-nav-icon hover:text-2xl"
              onClick={() => dispatch(darkModeButtonPressed())}
            />
          ) : (
            <IoMdSunny
              color="peachpuff"
              className="bottom-nav-icon hover:text-2xl"
              onClick={() => dispatch(darkModeButtonPressed())}
            />
          )}
        </div>
        <NavLink
          activeClassName="text-brand-secondaryText transform scale-150"
          className="link bottom-nav-item2 icon-hover  hover:text-2xl"
          to="/notifications"
        >
          <AiOutlineNotification className="bottom-nav-icon  hover:text-2xl" />
        </NavLink>
        <NavLink
          end
          activeClassName="text-brand-secondaryText transform scale-150"
          className="bottom-nav-item3 icon-hover"
          to="/"
        >
          {" "}
          <AiOutlineHome className="bottom-nav-icon hover:text-2xl " />
        </NavLink>
        <NavLink
          activeClassName="text-brand-secondaryText transform scale-150"
          className="link bottom-nav-item4 icon-hover"
          to="/profile"
        >
          <CgProfile className="bottom-nav-icon hover:text-2xl" />
        </NavLink>{" "}
        <NavLink
          activeClassName="text-brand-secondaryText transform scale-150"
          className="link bottom-nav-item5 icon-hover"
          to="/login"
        >
          <AiOutlineLogout className="bottom-nav-icon hover:text-2xl" />
        </NavLink>
      </nav>
    </>
  );
};
