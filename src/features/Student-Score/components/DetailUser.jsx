import React from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import ButtonCrud from "@components/table/ButtonCrud";
import { useNavigate } from "react-router";


export function DetailUser({ StudentDetail, }) {
  const navigaite = useNavigate()


  return <div className=" BoxTiels bg-white mt-2 rounded-3 px-4 unload m-3 mt-3 rtl">
    <div className="d-flex justify-content-between text-dark">
      <div className="">
        اطلاعات دانش آموز
        <div>
          <b className="fw-light font-sm-2 font-md-3 "> نام و نام خانوادگی </b>
          :
          <span className="mx-1 font-sm-2 font-md-3"> {StudentDetail?.firstName}  {StudentDetail?.lastName}</span>
        </div>

      </div>
      <div className="">
        <ButtonCrud name="برگشت " icon={<IoArrowBackOutline />} onClick={() => navigaite('/')} />
      </div>
    </div>
  </div>;
}
