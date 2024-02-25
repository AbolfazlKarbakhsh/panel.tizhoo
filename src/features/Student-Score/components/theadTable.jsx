import React from "react";
export default function TheadTable({ }) {
  return <thead className="thead-dark-custom ">
    <tr className="th-Remove-FontWeight flex-th-center text-center font2">
      <th scope="col">#</th>
      <th scope="col">Id</th>
      <th scope="col">  نام درس  </th>
      <th scope="col">  نام آزمون  </th>
      <th scope="col">  نمره   </th>
      <th scope="col">عملیات </th>
    </tr>
  </thead>;
}
