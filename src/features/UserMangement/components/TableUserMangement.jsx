import React, { useEffect, useState } from "react";
import HeaderTabelLessons from "@components/global/headerTabelLessons";
import Loader from "@components/global/serverState/Loader";
import TablePaginaite from "@components/table/TablePaginaite";
import Table from "@components/table/Table";
import { Pagination, Stack } from "@mui/material";
import useGetDataParams from "@hooks/useGetDataParams";
import { useAppContext } from "@context/AppContext";
import TableButtons from "./TableButtons";
import { UserManagement } from "@core/typeCrud";
import { useQueryClient } from "@tanstack/react-query";
import sortUserMangement from "@store/pishro/another/sortUserMangement";
import TheadMangement from "./theadMangement";
const config = UserManagement;

function TableUserMangement({
  handleClickOpen,
  openCreateModal,
  clickOpenEdit,
  clickOpenPdf,
}) {
  const { setEditState } = useAppContext();

  //#region  cofiguration get items
  const client = useQueryClient();
  const roleId =
    client.getQueryData(["UserManagement_CurrentUser_catch"]) || 10;

  const [pageParam, setPageParam] = useState(1);
  const [SizeParam, setSizeParam] = useState(10);
  const dataParams = sortUserMangement((state) => state.data);

  const ParmsGetAllServiece = [
    { paramUrl: "page", paramKey: pageParam },
    { paramUrl: "pageSize", paramKey: SizeParam },
    { paramUrl: "roleId", paramKey: roleId },
    { paramUrl: "userName", paramKey: dataParams.mobile },
    { paramUrl: "mobile", paramKey: dataParams.userName },
  ];
  const [DataStudent, PendingStudent, ErrorStudent] = useGetDataParams(
    ParmsGetAllServiece,
    config.api,
    config.get
  );
  //#endregion

  const handelChangePaginaite = (e, index) => {
    setPageParam(index);
  };
  const handelEditStudent = (e) => {
    setEditState({
      firstname: e.firstname,
      lastname: e.lastname,
      userName: e.username,
      mobile: e.mobile,
      roleId: e.roleId,
    });
  };

  return (
    <>
      {PendingStudent && <Loader />}
      {ErrorStudent && <Loader Error="In" />}
      {DataStudent?.data && !ErrorStudent && (
        <div className=" BoxTiels bg-white mt-2 rounded-3 px-4 unload m-3 mt-3">
          <HeaderTabelLessons
            nameHeading="نمایندگان "
            ModalAdd={() => openCreateModal()}
          ></HeaderTabelLessons>

          <Table>
            <TheadMangement />
            <tbody>
              {DataStudent?.data &&
                DataStudent?.data.map((e, i) => {
                  return (
                    <tr key={i} className="text-center font2">
                      <td scope="row">{i + 1}</td>
                      <td scope="row">{e.id}</td>
                      <td> {e.firstname} </td>
                      <td> {e.lastname} </td>
                      <td> {e.username} </td>
                      <td> {e.mobile} </td>
                      <td> {e.roleName} </td>

                      <td className="d-flex justify-content-center">
                        <TableButtons
                          clickOpenEdit={clickOpenEdit}
                          handelEditStudent={handelEditStudent}
                          e={e}
                          handleClickOpen={handleClickOpen}
                          clickOpenPdf={clickOpenPdf}
                        />
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        </div>
      )}
      {/*Pagination*/}
      <div className="BoxTiels bg-white mt-1  rounded-3 px-4 mx-3 mb-3">
        <Stack spacing={20}>
          <div className="d-flex justify-content-md-between  justify-content-around flex-wrap align-items-center ">
            <TablePaginaite
              Data={DataStudent}
              handelChangePaginaite={handelChangePaginaite}
              pageParam={pageParam}
            />
          </div>
        </Stack>
      </div>
    </>
  );
}

export default TableUserMangement;
