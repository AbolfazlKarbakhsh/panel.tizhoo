import { GiTeacher } from "react-icons/gi";
import { BiNetworkChart } from "react-icons/bi";

import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { PiStudentFill } from "react-icons/pi";
import { PiNotebookDuotone } from "react-icons/pi";
import { BsBuildings } from "react-icons/bs";
import { BsDiagram3 } from "react-icons/bs";
import { IoClipboardOutline } from "react-icons/io5";
import { PiUsersThree } from "react-icons/pi";
import { useAppContext } from "@context/AppContext";
import { useQueryClient } from "@tanstack/react-query";
import { Skeleton } from "@mui/material";

function ButtonsSidebar() {
  const location = useLocation().pathname;
  const { DrawerGigaMenu } = useAppContext();
  const classChecker = (e) => (location == e ? "text-white" : "ct-green-dark");
  const client = useQueryClient();
  const roleId =
    client.getQueryData(["UserManagement_CurrentUser_catch"]) || 10;

  const skeleton = ["", "", "", "", "", ""];
  const SuperRole = [
    {
      name: "  امور دانش آموزان",
      path: "/",
      icon: <PiStudentFill className={`font9 ${classChecker("/")}`} />,
    },
    {
      name: "  نمایندگی ",
      path: "/UserMangment",
      icon: (
        <BiNetworkChart className={`font9 ${classChecker("/UserMangment")}`} />
      ),
    },
    {
      name: "آزمون ساز ",
      path: "/test-courses",
      icon: (
        <IoClipboardOutline
          className={`font9 ${classChecker("/test-courses")}`}
        />
      ),
    },
    {
      name: "دروس",
      path: "/lessons",
      icon: (
        <PiNotebookDuotone className={`font9 ${classChecker("/lessons")}`} />
      ),
    },
    {
      name: "آموزشگاه ها ",
      path: "/academys",
      icon: <BsBuildings className={`font9 ${classChecker("/academys")}`} />,
    },
    {
      name: " پایه و رشته ",
      path: "/base-feilds",
      icon: <BsDiagram3 className={`font9 ${classChecker("/base-feilds")}`} />,
    },

    {
      name: " کلاس ها ",
      path: "/classes",
      icon: <PiUsersThree className={`font9 ${classChecker("/classes")}`} />,
    },
  ];
  const userMange = SuperRole.filter((u) => u.name != "آزمون ساز ");
  const AmozeshGah = SuperRole.filter(
    (u) =>
      u.name != "آزمون ساز " &&
      u.name != "  نمایندگی " &&
      u.name != "آموزشگاه ها "
  );

  const ButtonPikker = () => {
    switch (roleId.roleId || roleId) {
      // مدیر
      case 1:
        return SuperRole;
      // سوپر یوزر
      case 3:
        return SuperRole;
      // نماینده
      case 4:
        return userMange;
      // آموزشگاه
      case 5:
        return AmozeshGah;
      // دانش اموز
      case 2:
        return [
          {
            name: "  امور دانش آموزان",
            path: "/Student",
            icon: (
              <PiStudentFill className={`font9 ${classChecker("/Student")}`} />
            ),
          },
        ];
      // دبیر
      case 6:
        return [
          {
            name: "  امور دبیران ",
            path: "/Taechar",
            icon: <GiTeacher className={`font9 ${classChecker("/Taechar")}`} />,
          },
        ];
      default:
        return [];
    }
  };

  return (
    <>
      {ButtonPikker().map((e, i) => {
        return (
          <NavLink
            onClick={DrawerGigaMenu}
            key={i}
            to={e.path}
            className={`btnRightNav d-flex align-items-center btn justify-content-around  IconSet ${
              location == e.path ? "activeBtn3" : "activeBtn"
            } `}
            role="button"
            aria-pressed="false"
          >
            <span className="font2 items  w-100 mt-0 ">{e.name}</span>
            {e.icon}
          </NavLink>
        );
      })}
      {ButtonPikker().length == 0 && (
        <>
          {skeleton.map((i) => (
            <Skeleton
              variant="rounded"
              width={156.7}
              height={40}
              className="my-1"
              sx={{ bgcolor: "grey.600" }}
            />
          ))}
        </>
      )}
    </>
  );
}

export default ButtonsSidebar;
