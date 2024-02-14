import React, { useState } from "react";
import HeaderTabelLessons from "@components/global/headerTabelLessons";
import useGetDataPaginaite from "@hooks/useGetDataPaginaite";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import Loader from "@components/global/serverState/Loader";
import { Pagination, Stack } from "@mui/material";
import { useAppContext } from "@context/AppContext";
import useGetData from "@hooks/useGetData";

function TableClasses({ handleClickOpen, openCreateModal, clickOpenEdit }) {
  const { setEditState } = useAppContext()

  const [ ,isPendingAcademys ,isErrorAcademys] = useGetData("school/selectList","school_Get_Modal");


  //* cofiguration get item 
  const [pageParam, setPageParam] = useState(1);
  const { BafData, BafPending, BafError } = useGetDataPaginaite(pageParam , 10 , "ClassRome" , "ClassRome_Get");




  const handelChangePaginaite = (e, index) => {
    setPageParam(index);
  };
  return (
    <>
      {(BafPending || isPendingAcademys) && <Loader />}
      {(BafError || isErrorAcademys ) && <Loader Error="In" />}
      {(BafData?.data && !BafError) && (
        <div className=" BoxTiels bg-white mt-2 rounded-3 px-4 unload m-3 mt-3">
          <HeaderTabelLessons nameHeading="  کلاس ها" ModalAdd={() => openCreateModal()} />

          <div className={`row mt-2 rtl`}>
            <div className="col-12 px-0 mt-1 mx-0 unload position-relative px-2 px-lg-3 ">
              <div className="row ">
                <div className="table-responsive-lg no-scroll rounded-1 mt-4 p-0 col-12  ">
                  <table class="table table-light-td width-mobile-table-600">
                    <thead class="thead-dark-custom ">
                      <tr className="th-Remove-FontWeight">
                        <th scope="col">#</th>
                        <th scope="col"> نام کلاس </th>
                        <th scope="col"> نام آموزشگاه </th>
                        <th scope="col">عملیات </th>
                      </tr>
                    </thead>
                    <tbody>
                      {BafData?.data &&
                        BafData?.data.map((e, i) => {
                          return (
                            <tr>
                              <td scope="row">{i + 1}</td>
                              <td> {e.title} </td>
                              <td> {e.schoolName} </td>
                              <td className="d-flex justify-content-start">
                                <button
                                  className={`btn  btn-global mx-2 my-1 my-md-0 px-2  font3 centerAll`}
                                  onClick={() => { clickOpenEdit(e.id); setEditState({ title: e.title, schoolName: e.schoolName, schoolId: e.schoolId  }) }}
                                >
                                  <span className="font1 me-1" >ویرایش</span>
                                  <span
                                    className=" font5 ct mx-1"
                                    style={{ marginTop: "-4px" }}
                                  >
                                    <FaRegEdit />
                                  </span>
                                </button>

                                <button
                                  className={`btn  btn-global mx-2 my-1 my-md-0 px-2 font3 centerAll`}
                                  onClick={() => handleClickOpen(e.id)}
                                >
                                  <span className="font1">حذف</span>
                                  <span
                                    className="font5 ct mx-1"
                                    style={{ marginTop: "-5px" }}
                                  >
                                    <MdDeleteForever />
                                  </span>
                                </button>
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

export default TableClasses;
