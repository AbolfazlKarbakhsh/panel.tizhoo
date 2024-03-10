import React from 'react'
import Spacer from "@components/global/spacer";
import { FaClipboardList } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import BasicPopover from '@components/forms/Poppover';
import { MdDeleteForever } from "react-icons/md";
import ButtonCrud from '@components/table/ButtonCrud';
import { useNavigate } from 'react-router';
import { TbReport } from "react-icons/tb";

function TableButtons({clickOpenEdit , handelEditStudent , e, handleClickOpen , clickOpenPdf}) {
    const navigate = useNavigate()
    return (
        <BasicPopover >
            <div className="p-1 d-flex flex-column justify-content-around rtl">
                <ButtonCrud name="ثبت نمرات" icon={<FaClipboardList />} onClick={() => {navigate(`/student-score/${e.id}/${e.baseAndFieldId}`)} } />
                <Spacer sp="my-1" />
                <ButtonCrud name="گزارش کارنامه " icon={<TbReport />} onClick={() => {clickOpenPdf(e.id)} }/>
                <Spacer sp="my-1" />
                <ButtonCrud name="ویرایش" icon={<FaRegEdit />} onClick={() => { clickOpenEdit(e.id) ; handelEditStudent(e) }} />
                <Spacer sp="my-1" />
                <ButtonCrud name="حذف " icon={<MdDeleteForever />} onClick={() => {handleClickOpen(e.id)}} />
            </div>
        </BasicPopover>
    )
}

export default TableButtons