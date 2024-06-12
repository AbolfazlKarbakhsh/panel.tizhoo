import React from "react";
import CActiveTab from "@store/pishro/another/navs";

function HeadPaya() {
  const  ActiveTab  = CActiveTab(state => state.data);

  return (
    <thead className="thead-dark-custom ">
      <tr className="th-Remove-FontWeight flex-th-center text-center font2">
        <th scope="col">#</th>
        <th scope="col">id</th>
        <th scope="col"> نام آزمون </th>
        <th scope="col"> {ActiveTab == 3 || ActiveTab == 4 ? "توضیحات" : " مرحله"}  </th>
        <th scope="col"> وضعیت آزمون  </th>
        <th scope="col">  تاریخ شروع  </th>
        <th scope="col"> تاریخ انقضا </th>
        <th scope="col">  تاریخ ثبت نام </th>
        <th scope="col">   عملیات </th>
      </tr>
    </thead>
  );
}

export default HeadPaya;
