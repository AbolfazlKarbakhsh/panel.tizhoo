import { MainTable } from './MainTable';
import { DetailUser } from './DetailUser';
import React, { useState } from "react";
import { useParams } from "react-router";
import Loader from "@components/global/serverState/Loader";
import useGetDataParams from "@hooks/useGetDataParams";
import useGetData from "@hooks/useGetData";
import { ConfigStudentScore } from '@core/typeCrud';
const config = ConfigStudentScore;



function TableStudentScore({ handleClickOpen, openCreateModal, clickOpenEdit }) {
  const param = useParams()

  //* cofiguration get item 
  const [pageParam, setPageParam] = useState(1);
  const ParmsGetAllServiece = [
    { paramUrl: 'page', paramKey: pageParam },
    { paramUrl: 'pageSize', paramKey: 10 },
    { paramUrl: 'studentId', paramKey: param.id },
  ]
  const [DataStudentScore, PendingStudentScore, ErrorStudentScore] = useGetDataParams(ParmsGetAllServiece, config.api, config.get)
  const [StudentDetail] = useGetData(`Students/${param.id}`, "Student_Detail")

  const handelChangePaginaite = (e, index) => {
    setPageParam(index);
  };


  return (
    <>
      {(PendingStudentScore) && <Loader />}
      {(ErrorStudentScore) && <Loader Error="In" />}


      {(DataStudentScore?.data && !ErrorStudentScore && !PendingStudentScore) && (
        <>
          <DetailUser StudentDetail={StudentDetail} />
          <MainTable openCreateModal={openCreateModal} DataStudentScore={DataStudentScore}  clickOpenEdit={clickOpenEdit}  handleClickOpen={handleClickOpen} handelChangePaginaite={handelChangePaginaite} pageParam={pageParam} />
        </>

      )}
    </>
  );
}

export default TableStudentScore;

