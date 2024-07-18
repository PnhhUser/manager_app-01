import { CiMenuKebab } from "react-icons/ci";
import { IPropsNav, IPropsNavLink } from "../common/constants/interface";
import { Link } from "react-router-dom";
import { TfiLayoutGrid4 } from "react-icons/tfi";
import { IoSettingsOutline, IoStatsChartOutline } from "react-icons/io5";
import { RiLogoutBoxLine } from "react-icons/ri";
import { LOCATION_TABLE_PATH } from "../common/constants/path";

const NavigateLink = ({
  linkName,
  pathName,
  isToggle,
  icon,
}: IPropsNavLink) => {
  return (
    <li
      className={`cursor-pointer py-2 w-full mb-5 rounded bg-gray-200 hover:bg-sky-200 hover:transition-colors hover:duration-300 transition-colors duration-300`}
    >
      <Link
        to={pathName}
        className={`flex ${isToggle ? "justify-center" : ""}`}
      >
        <div
          className={` w-[100%] text-center ${
            isToggle ? "xl:w-[100%]" : "xl:w-[8%]"
          }`}
        >
          {icon}
        </div>
        <div
          className={`${
            isToggle ? "opacity-0 w-[0%]" : "opacity-1 delay-300 w-[92%]"
          } hidden xl:block`}
        >
          <span
            className={`${
              isToggle ? "hidden" : ""
            } align-middle ms-3 font-semibold text-slate-500`}
          >
            {linkName}
          </span>
        </div>
      </Link>
    </li>
  );
};

function Navbar({ toggleNav, isToggle }: IPropsNav) {
  return (
    <div className="w-full h-full bg-white shadow-[#1B262C] shadow rounded-e-md relative">
      {/* size navbar  */}
      <div className={`pt-2 items-center h-10 hidden xl:flex`}>
        <div
          className={`flex-1 ${
            isToggle ? "opacity-0" : "opacity-1 delay-300 duration-700"
          }`}
        >
          <p
            className={`hidden xl:block ml-2 font-bold uppercase ${
              isToggle ? "hidden duration-1000 delay-1000" : "block"
            }`}
          >
            App Manager
          </p>
        </div>
        <div
          className={`cursor-pointer absolute right-1 top-3`}
          onClick={toggleNav}
        >
          <CiMenuKebab strokeWidth={1} />
        </div>
      </div>
      {/* navigation section  */}
      <div className="px-2">
        <ul className="pt-6">
          <NavigateLink
            linkName="Location table"
            pathName={LOCATION_TABLE_PATH}
            isToggle={isToggle}
            icon={
              <TfiLayoutGrid4
                className={`inline-block text-slate-500 ${
                  !isToggle ? "xl:ms-2" : ""
                }`}
              />
            }
          />
          <NavigateLink
            linkName="Statistical"
            pathName={LOCATION_TABLE_PATH}
            isToggle={isToggle}
            icon={
              <IoStatsChartOutline
                className={`inline-block text-slate-500 ${
                  !isToggle ? "xl:ms-2" : ""
                }`}
              />
            }
          />
          <NavigateLink
            linkName="Setting"
            pathName={LOCATION_TABLE_PATH}
            isToggle={isToggle}
            icon={
              <IoSettingsOutline
                className={`inline-block text-slate-500 ${
                  !isToggle ? "xl:ms-2" : ""
                }`}
              />
            }
          />
          <NavigateLink
            linkName="Logout"
            pathName={LOCATION_TABLE_PATH}
            isToggle={isToggle}
            icon={
              <RiLogoutBoxLine
                className={`inline-block text-slate-500 ${
                  !isToggle ? "xl:ms-2" : ""
                }`}
              />
            }
          />
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
