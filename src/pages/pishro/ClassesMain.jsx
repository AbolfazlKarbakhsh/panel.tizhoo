import React from 'react'
import Classes from '@features/Clasess/Classes'
import useGetData from '@hooks/useGetData';

function ClassesMain() {
  // get Test Select List
  useGetData(`Test/SelectList`, "Test_Get_Modal_studnetScore");
  // get Test Select List
  useGetData(`Lesson/selectListJoin`, "Test_Get_Modal_selectListJoin");

  // get base and feild 
  useGetData("baseAndField/SelectList", "baseAndField_Get_Modal_Class");
  return (
    <div className=" mio unload">
      <Classes />
    </div>
  )
}

export default ClassesMain