import React from 'react'
import { IoMdAdd } from "react-icons/io";
import { useAppContext } from "@context/AppContext";

function HeaderTabelLessons({ children,nameHeading , ModalAdd , ButtonPlusName}) {
    const { setEditState} = useAppContext()
    return (
        <div className="font6 pl-2 Fvazir mb-0 d-flex align-items-center justify-content-between " dir="rtl">
            <div className='text-dark font-sm-3 font-md-5'>
                 {nameHeading}  
            </div>
            <div className="d-flex justify-content-end  my-3 my-md-0">
                {children}
                <button
                    onClick={() => {ModalAdd() ; setEditState('')}}
                    className="btn  btn-global  px-2 mr-2  d-flex align-items-center">
                    <span className='font1'>{ButtonPlusName || 'افزودن'} </span>
                    <span className="mx-1 font4 bold ct"><IoMdAdd /></span>
                </button>

            </div>
        </div>
    )
}

export default HeaderTabelLessons