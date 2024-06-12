import React from 'react'
import { FaRegEdit } from "react-icons/fa";
import BasicPopover from '@components/forms/Poppover';
import { MdDeleteForever } from "react-icons/md";
import ButtonCrud from '@components/table/ButtonCrud';
import Spacer from "@components/global/spacer";

function TableButtons({clickOpenEdit , handelEditStudent , e, handleClickOpen , clickOpenPdf}) {
    return (
        <BasicPopover >
            <div className="p-1 d-flex flex-column justify-content-around rtl">
                <ButtonCrud name="ویرایش" icon={<FaRegEdit />} onClick={() => { clickOpenEdit(e.id) ; handelEditStudent(e) }} />
                <Spacer sp="my-1" />
                <ButtonCrud name="حذف " icon={<MdDeleteForever />} onClick={() => {handleClickOpen(e.id)}} />
            </div>
        </BasicPopover>
    )
}

export default TableButtons