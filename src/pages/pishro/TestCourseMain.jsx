import React from 'react'
import Test from '@features/Tests/Test'
import useGetData from "@hooks/useGetData";

function TestCourseMain() {
  // get Test Select List
  useGetData(`Test/ListTestType`, "Test_Get_Tab_Test/ListTestType");
  useGetData(`baseAndField/SelectList`, "baseAndField_Get_Modal_Lesson");
  // get city
  useGetData("CityProvince/province", "CityProvince_Get_Modal_studnet");
  return (
    <div className='Mio unload'> 
      <Test />
    </div>
  )
}

export default TestCourseMain