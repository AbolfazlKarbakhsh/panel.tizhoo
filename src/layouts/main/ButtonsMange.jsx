import { SiKhanacademy } from "react-icons/si";
import { GiTeacher } from "react-icons/gi";
import React from "react";
import { BiNetworkChart } from "react-icons/bi";
import { BsBuildings, BsDiagram3 } from "react-icons/bs";
import { IoClipboardOutline } from "react-icons/io5";
import { PiNotebookDuotone, PiStudentFill, PiUsersThree } from "react-icons/pi";
import { NavLink } from "react-router-dom";
import BasicPopover from "@components/forms/Poppover";

function ButtonsMange({ classChecker, roleId, DrawerGigaMenu, location }) {
  const SuperRole = [
    {
      name: " نمایندگی ها ",
      path: "/UserMangment",
      icon: (
        <BiNetworkChart className={`font9 ${classChecker("/UserMangment")}`} />
      ),
    },
    {
      name: " دبیران ",
      path: "/TeachersManger",
      icon: (
        <GiTeacher className={`font9 ${classChecker("/TeachersManger")}`} />
      ),
    },
    {
      name: " دانش آموزان",
      path: "/",
      icon: <PiStudentFill className={`font9 ${classChecker("/")}`} />,
    },

  ];

  const AzmonBtn = {
    logic:
      location == "/test-courses" ||
      location == "/base-feilds" ||
      location == "/lessons",
    icon: (
      <IoClipboardOutline
        className={`font9 ${
          (location == "/test-courses" ||
            location == "/base-feilds" ||
            location == "/lessons") &&
          "text-white"
        }`}
      />
    ),
    name: "آزمون ساز",
  };
  const AzmonSubBtn = [
    {
      name: "تعریف آزمون  ",
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
      name: " پایه و رشته ",
      path: "/base-feilds",
      icon: <BsDiagram3 className={`font9 ${classChecker("/base-feilds")}`} />,
    },
  ];
  const AmozeshgahBtn = {
    logic: location == "/academys" || location == "/classes",
    icon: (
      <SiKhanacademy
        className={`font9 ${
          (location == "/academys" || location == "/classes") && "text-white"
        }`}
      />
    ),
    name: " مدارس",
  };
  const AmozeshgahSubBtn = [
 
    {
      name: "آموزشگاه ها ",
      path: "/academys",
      icon: <BsBuildings className={`font9 ${classChecker("/academys")}`} />,
    },

    {
      name: " کلاس ها ",
      path: "/classes",
      icon: <PiUsersThree className={`font9 ${classChecker("/classes")}`} />,
    },
  ];
  return (
    <>
      <BasicPopover Button={AzmonBtn}>
        <div
          className="p-2  d-flex flex-column justify-content-center  align-items-center"
          style={{ width: "150px" }}
        >
          {AzmonSubBtn.map((e, i) => (
            <NavLink
              key={i}
              to={e.path}
              className={`btnRightNav d-flex align-items-center btn justify-content-around  IconSet w-100 ${
                location == e.path ? "activeBtn3" : "activeBtn"
              } `}
              role="button"
              aria-pressed="false"
            >
              <span className="font2 items  w-100 mt-0 ">{e.name}</span>
              {e.icon}
            </NavLink>
          ))}
        </div>
      </BasicPopover>
      <BasicPopover Button={AmozeshgahBtn}>
        <div
          className="p-2  d-flex flex-column justify-content-center  align-items-center"
          style={{ width: "150px" }}
        >
          {AmozeshgahSubBtn.map((e, i) => (
            <NavLink
              key={i}
              to={e.path}
              className={`btnRightNav d-flex align-items-center btn justify-content-around  IconSet w-100 ${
                location == e.path ? "activeBtn3" : "activeBtn"
              } `}
              role="button"
              aria-pressed="false"
            >
              <span className="font2 items  w-100 mt-0 ">{e.name}</span>
              {e.icon}
            </NavLink>
          ))}
        </div>
      </BasicPopover>

      {roleId?.roleId && (
        <>
          {SuperRole.map((e, i) => {
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
        </>
      )}
    </>
  );
}

export default ButtonsMange;
