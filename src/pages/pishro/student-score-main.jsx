import React from 'react';
import useGetData from "@hooks/useGetData";
import { useParams } from 'react-router';
import StudentScore from '@features/Student-Score/Student-Score';

const StudentScoreMain = () => {
    const param = useParams()

    // get Test Select List
    useGetData(`Test/SelectList`, "Test_Get_Modal_studnetScore");
    
    // get base and feild 
    useGetData("baseAndField/SelectList", "baseAndField_Get_Modal_studnetScore");

    return (
        <div className='Mio unload'>
            <StudentScore />
        </div>
    );
}

export default StudentScoreMain;
