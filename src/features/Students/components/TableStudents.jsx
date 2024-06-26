import React, { useEffect, useState } from "react";
import HeaderTabelLessons from "@components/global/headerTabelLessons";
import Loader from "@components/global/serverState/Loader";
import { Pagination, Stack } from "@mui/material";
import useGetDataParams from "@hooks/useGetDataParams";
import { useAppContext } from "@context/AppContext";
import { useStudentContext } from "@context/Students/StudentContext";
import { ConfigStudents } from '@core/typeCrud';
import TableButtons from "./TableButtons";
import useStudentData from "@store/pishro/student/studentStore";
import SelectPaginate from "@components/table/SelectPaginaote";
import ExcelScore from "../../Student-Score/components/ExcelScore";
const config = ConfigStudents;


function TableStudents({ handleClickOpen, openCreateModal, clickOpenEdit, clickOpenPdf }) {
  const { setEditState } = useAppContext()
  const { changeData } = useStudentData(state => state.actions)
  //* cofiguration get items 
  const [pageParam, setPageParam] = useState(1);
  const [SizeParam, setSizeParam] = useState(10);
  const { SortStudentState: { baseAndFieldId, schoolId, mobile } } = useStudentContext()
  const ParmsGetAllServiece = [
    { paramUrl: 'page', paramKey: pageParam },
    { paramUrl: 'pageSize', paramKey: SizeParam },
    { paramUrl: 'baseAndFieldId', paramKey: baseAndFieldId },
    { paramUrl: 'schoolId', paramKey: schoolId },
    { paramUrl: 'mobile', paramKey: mobile },
  ]
  const [DataStudent, PendingStudent, ErrorStudent] = useGetDataParams(ParmsGetAllServiece, config.api, config.get)
  useEffect(() => {
    if (DataStudent) {
      changeData(DataStudent?.data)
    }
  }, [DataStudent]);

  const handelChangePaginaite = (e, index) => {
    setPageParam(index);
  };
  const handelEditStudent = (e) => {
    setEditState(
      {
        firstName: e.firstName,
        lastName: e.lastName,
        userName: e.userName,
        mobile: e.mobile,
        nationalCode: e.nationalCode,
        classId: e.classRomeId,
        schoolId: e.schoolId,
        baseAndFieldTitle: e.baseAndFieldTitle,
        baseAndField: e.baseAndFieldId,
        provinceId: e.provinceId,
        cityId: e.cityId
      }
    )
  }


  return (
    <>
      {(PendingStudent) && <Loader />}
      {(ErrorStudent) && <Loader Error="In" />}
      {(DataStudent?.data && !ErrorStudent) && (
        <div className=" BoxTiels bg-white mt-2 rounded-3 px-4 unload m-3 mt-3">

          <HeaderTabelLessons nameHeading="دانش آموزان" ModalAdd={() => openCreateModal()} >
            <ExcelScore />
          </HeaderTabelLessons>

          <div className={`row  rtl`}>
            <div className="col-12 px-0 mt-1 mx-0 unload position-relative px-2 px-lg-3 ">
              <div className="row ">
                <div className="table-responsive-lg no-scroll rounded-1 mt-4 p-0 col-12  ">
                  <table className="table table-light-td width-mobile-table-600">
                    <thead className="thead-dark-custom ">
                      <tr className="th-Remove-FontWeight flex-th-center text-center font2">
                        <th scope="col">#</th>
                        <th scope="col">id</th>
                        <th scope="col"> نام   </th>
                        <th scope="col"> نام خانوادگی   </th>
                        <th scope="col"> نام کاربری   </th>
                        <th scope="col"> تلفن    </th>
                        <th scope="col">  کلاس   </th>
                        <th scope="col">  استان   </th>
                        <th scope="col">   آموزشگاه    </th>
                        <th scope="col"> پایه و رشته     </th>
                        <th scope="col">عملیات </th>
                      </tr>
                    </thead>
                    <tbody>
                      {DataStudent?.data &&
                        DataStudent?.data.map((e, i) => {
                          return (
                            <tr key={i} className="text-center font2">

                              <td scope="row">{i + 1}</td>
                              <td scope="row">{e.id}</td>
                              <td> {e.firstName} </td>
                              <td> {e.lastName} </td>
                              <td> {e.userName} </td>
                              <td> {e.mobile} </td>
                              <td> {e.classRome} </td>
                              <td> {e.province} </td>
                              <td> {e.school} </td>
                              <td> {e.baseAndField} </td>

                              <td className="d-flex justify-content-center">
                                <TableButtons clickOpenEdit={clickOpenEdit} handelEditStudent={handelEditStudent} e={e} handleClickOpen={handleClickOpen} clickOpenPdf={clickOpenPdf} />
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


        </div>
      )}

      <div className="BoxTiels bg-white mt-1  rounded-3 px-4 mx-3 mb-3" >
        <Stack spacing={20}>
          <div className="d-flex justify-content-md-between  justify-content-around flex-wrap align-items-center ">

            <Pagination
              count={DataStudent?.totalCount}
              variant="outlined"
              shape="rounded"
              className="fff"
              color="secondary"
              onChange={handelChangePaginaite}
              defaultPage={pageParam}
            />
            <SelectPaginate name="StuSize" setState={setSizeParam} />
          </div>
        </Stack>

      </div>
    </>
  );
}

export default TableStudents;
