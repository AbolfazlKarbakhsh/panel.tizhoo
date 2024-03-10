import React, { useEffect, useRef } from 'react'
import { SiMicrosoftexcel } from "react-icons/si";
import ButtonCrud from "@components/table/ButtonCrud";
import { usePostData } from '@hooks/usePosrData';

function ExcelScore() {
    const [PostExelScore] = usePostData("ExcelScore_post","ReportCard/GroupAdd","ReportCard_Get" , "multipart/form-data")
    
    const choiseFile = useRef()

    const HandelFile = () => {
        choiseFile.current.click()
    }
    const handelChangeFile = (e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append("file", file);
        PostExelScore(formData)
    }

    return (
        <div>
            <ButtonCrud name=" ثبت نمره با Excel " icon={<SiMicrosoftexcel className="mx-1" />} onClick={() => HandelFile()} />
            <input type="file" className='d-none' accept=" .xlsx, .xls "
                ref={choiseFile}
                onChange={handelChangeFile}
            />
        </div>
    )
}

export default ExcelScore