import React from "react";
import ChevronDown from "src/assets/FiChevronDown.svg?react";
import { useLocation } from "react-router-dom";
import routes from "src/routes/routesList";
import { logout, useUserDetails } from "src/api/queries/auth";

const EmptyComponent = () => <>{null}</>;

const Navbar = () => {
  const { user } = useUserDetails();
  const locationObj = useLocation();
  const activeLink = locationObj.pathname;
  const activeTab = routes.find((el) => el.path === activeLink);
  const Logo = activeTab?.logo ?? EmptyComponent;

  return (
    <div className="flex items-center px-12 md:px-[32px] py-[18px] justify-between h-[60px] bg-white">
      <div className="flex items-center gap-2">
        <Logo className="[&_path]:fill-current max-h-[1.125rem] w-fit" />
        <span className="font-s emibold tracking-wide">{activeTab?.title}</span>
      </div>
      <button className="flex items-center gap-3" onClick={logout}>
        <span className="font-semibold">Logout</span>
        <span className="grid place-items-center w-6 h-6 text-[0.6rem] font-semibold text-white rounded-full bg-accent1">
          {user?.user?.first_name?.[0]}
          {user?.user?.last_name?.[0]}
        </span>
        <ChevronDown className="w-[14px] h-[14px]" />
      </button>
    </div>
  );
};

export default Navbar;
