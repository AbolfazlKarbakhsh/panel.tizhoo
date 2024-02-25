import React from 'react'
import Students from '@features/Students/Students'
import useGetData from "@hooks/useGetData";
import StudentContextProvider from '@context/Students/StudentContext';
function StudentsMain() {


  // get base and feild 
  useGetData("baseAndField/SelectList", "baseAndField_Get_Modal_studnet");
  // get school
  useGetData("school/SelectList", "school_Get_Modal_studnet");
  // get class
  useGetData("ClassRome/SelectList", "class_Get_Modal_studnet");
  // get city
  useGetData("CityProvince/province", "CityProvince_Get_Modal_studnet");


  return (
    
    <div className=" mio unload">
      <StudentContextProvider>
        <Students />
      </StudentContextProvider>
    </div>

  )
}

export default StudentsMain