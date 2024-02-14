import React from 'react'
import { IoMdAdd } from "react-icons/io";
import { useAppContext } from "@context/AppContext";

function HeaderTabelLessons({nameHeading , ModalAdd}) {
    const { setEditState} = useAppContext()
    return (
        <div className="font6 pl-2 Fvazir mb-0 d-flex align-items-center justify-content-between flex-wrap" dir="rtl">
            <div className='text-dark'> {nameHeading}  

            </div>
            <div className="d-flex justify-content-end w-md-auto my-3 my-md-0">

                <button
                    onClick={() => {ModalAdd() ; setEditState('')}}
                    className="btn  btn-global  px-2 mr-2 font3 d-flex align-items-center">
                    <span className='font1'>افزودن </span>
                    <span className="mx-1 font4 bold ct"><IoMdAdd /></span>
                </button>

            </div>
        </div>
    )
}

export default HeaderTabelLessons