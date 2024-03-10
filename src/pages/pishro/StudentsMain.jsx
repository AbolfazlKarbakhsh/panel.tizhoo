import React from 'react'
import Students from '@features/Students/Students'
import StudentContextProvider from '@context/Students/StudentContext';
import useGetData from "@hooks/useGetData";

function StudentsMain() {

  // get base and feild 
  useGetData("baseAndField/SelectList", "baseAndField_Get_Modal_studnet");
  // get school
  useGetData("school/SelectList", "school_Get_Modal_studnet");
  // get class
  useGetData("ClassRome/SelectList", "class_Get_Modal_studnet");
  // get city
  useGetData("CityProvince/province", "CityProvince_Get_Modal_studnet");
  // get Test Select List
  useGetData(`Test/SelectList`, "Test_Get_Modal_studnetScore");

  // const [data] = useGetData('ReportCard/printReportCard?testId=8&userId=10' , "Lopsodojidf")
  // console.log(data)


  return (

    <div className=" mio unload">
      <StudentContextProvider>
        <Students />
      </StudentContextProvider>
    </div>

  )
}

export default StudentsMain