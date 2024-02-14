import React from 'react'

import { NavLink, useLocation } from 'react-router-dom'
import { PiStudentFill } from "react-icons/pi";
import { PiNotebookDuotone } from "react-icons/pi";
import { BsBuildings } from "react-icons/bs";
import { BsDiagram3 } from "react-icons/bs";
import { IoClipboardOutline } from "react-icons/io5";
import { PiUsersThree } from "react-icons/pi";
import { useAppContext } from '@context/AppContext'

function ButtonsSidebar() {
    const location = useLocation().pathname
    const { DrawerGigaMenu } = useAppContext()
    const classChecker = e => location == e ? "text-white" : 'ct-green-dark'

    const buttonsDetails = [
        {
            name: "امور دانش آموزان",
            path: "/",
            icon: <PiStudentFill className={`font9 ${classChecker("/")}`} />
        },
        {
            name: "دروس",
            path: "/lessons",
            icon: <PiNotebookDuotone className={`font9 ${classChecker("/lessons")}`} />
        },
        {
            name: "آموزشگاه ها ",
            path: "/academys",
            icon: <BsBuildings className={`font9 ${classChecker("/academys")}`} />
        },
        {
            name: " پایه و رشته ",
            path: "/base-feilds",
            icon: <BsDiagram3 className={`font9 ${classChecker("/base-feilds")}`} />
        },
        {
            name: "آزمون ها ",
            path: "/test-courses",
            icon: <IoClipboardOutline className={`font9 ${classChecker("/test-courses")}`} />
        },
        {
            name: " کلاس ها ",
            path: "/classes",
            icon: <PiUsersThree className={`font9 ${classChecker("/classes")}`} />
        },

    ]

    return (
        <>
            {
                buttonsDetails.map((e, i) => {
                    return (
                        <NavLink
                            onClick={DrawerGigaMenu}
                            key={i}
                            to={e.path}
                            className={`btnRightNav d-flex align-items-center btn justify-content-around  IconSet ${location == e.path ? 'activeBtn3' : 'activeBtn'} `}
                            role="button"
                            aria-pressed="false" >
                            <span className="font2 items  w-100 mt-0 ">{e.name}</span>
                            {e.icon}
                        </NavLink>
                    )
                })
            }
        </>
    )
}

export default ButtonsSidebar