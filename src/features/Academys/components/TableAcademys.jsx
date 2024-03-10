import React, { useState } from "react";
import HeaderTabelLessons from "@components/global/headerTabelLessons";
import useGetDataPaginaite from "@hooks/useGetDataPaginaite";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import Loader from "@components/global/serverState/Loader";
import { Pagination, Stack } from "@mui/material";
import { useAppContext } from "@context/AppContext";
import ButtonCrud from "@components/table/ButtonCrud";
import { TbReport } from "react-icons/tb";


function TableAcademys({ handleClickOpen, openCreateModal, clickOpenEdit , openReportMGTecher }) {
  const { setEditState } = useAppContext()
  // cofiguration get item 
  const [pageParam, setPageParam] = useState(1);
  const { BafData, BafPending, BafError } = useGetDataPaginaite(
    pageParam,
    10,
    "school",
    "school_Get"
  );
  const handelChangePaginaite = (e, index) => {
    setPageParam(index);
  };
  return (
    <>
      {BafPending && <Loader />}
      {BafError && <Loader Error="In" />}
      {(BafData?.data && !BafError) && (
        <div className=" BoxTiels bg-white mt-2 rounded-3 px-4 unload m-3 mt-3">
          <HeaderTabelLessons nameHeading=" آموزشگاه ها" ModalAdd={() => openCreateModal()} />

          <div className={`row mt-2 rtl`}>
            <div className="col-12 px-0 mt-1 mx-0 unload position-relative px-2 px-lg-3 ">
              <div className="row ">
                <div className="table-responsive-lg no-scroll rounded-1 mt-4 p-0 col-12  ">
                  <table className="table table-light-td width-mobile-table-600">
                    <thead className="thead-dark-custom ">
                      <tr className="th-Remove-FontWeight">
                        <th scope="col">#</th>
                        <th scope="col">Id</th>
                        <th scope="col"> نام آموزشگاه </th>
                        <th scope="col">عملیات </th>
                      </tr>
                    </thead>
                    <tbody>
                      {BafData?.data &&
                        BafData?.data.map((e, i) => {
                          return (
                            <tr key={i}>
                              <td scope="row">{i + 1}</td>
                              <td> {e.id} </td>
                              <td> {e.title} </td>
                              <td className="d-flex justify-content-center">
                                <ButtonCrud name="گزارش مدیر" icon={<TbReport />} onClick={() => {openReportMGTecher( e.id)} } />
                                <ButtonCrud name="ویرایش" icon={<FaRegEdit />} onClick={() => { clickOpenEdit(e.id); setEditState(e.title) }} />
                                <ButtonCrud name="حذف " icon={<MdDeleteForever />} onClick={() => handleClickOpen(e.id)} />
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div>
            <Stack spacing={20}>
              <Pagination
                count={BafData?.totalCount}
                variant="outlined"
                shape="rounded"
                className="fff"
                color="secondary"
                onChange={handelChangePaginaite}
                defaultPage={pageParam}
              />
            </Stack>
          </div>
        </div>
      )}
    </>
  );
}

export default TableAcademys;
