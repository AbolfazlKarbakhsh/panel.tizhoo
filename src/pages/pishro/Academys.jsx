import React from 'react'
import Academys from '@features/Academys/Academys'
import useGetData from "@hooks/useGetData";

function AcademyMain() {
  // get Test Select List
  useGetData(`Test/SelectList`, "Test_Get_Modal_studnetScore");
  // get city
  useGetData("CityProvince/province", "CityProvince_Get_Modal_studnet");
  return (
    <div className=" mio unload">
     <Academys />
    </div>
  )
}

export default AcademyMain