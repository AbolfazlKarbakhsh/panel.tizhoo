import React from 'react'
import Academys from '@features/Academys/Academys'
import useGetData from "@hooks/useGetData";

function AcademyMain() {
  // get Test Select List
  useGetData(`Test/SelectList`, "Test_Get_Modal_studnetScore");
  return (
    <div className=" mio unload">
     <Academys />
    </div>
  )
}

export default AcademyMain