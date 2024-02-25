import React from "react";
import TheadTable from './theadTable';
import HeaderTabelLessons from "@components/global/headerTabelLessons";
import ButtonCrud from "@components/table/ButtonCrud";
import TablePaginaite from "@components/table/TablePaginaite";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import Table from "@components/table/Table";
import { useAppContext } from "@context/AppContext";
import { SiMicrosoftexcel } from "react-icons/si";

export function MainTable({
  openCreateModal,
  DataStudentScore,
  clickOpenEdit,
  handleClickOpen,
  handelChangePaginaite,
  pageParam
}) {
  const { setEditState } = useAppContext();

  return (
    <div className=" BoxTiels bg-white mt-2 rounded-3 px-4 unload m-3 mt-3">

      <HeaderTabelLessons nameHeading=" لیست نمرات" ModalAdd={() => openCreateModal()} ButtonPlusName="ثبت نمره">
        <ButtonCrud name=" ثبت نمره با Excel " icon={<SiMicrosoftexcel className="mx-1" />} onClick={() => {
        }} />
      </HeaderTabelLessons>

      <Table>
        <TheadTable />
        <tbody>
          {DataStudentScore?.data && DataStudentScore?.data.map((e, i) => {
            return (
              <tr key={i} className="font2">
                <td scope="row">{i + 1}</td>
                <td> {e.id} </td>
                <td> {e.lessonName} </td>
                <td> {e.testName} </td>
                <td> {e.score} </td>
                <td className="d-flex justify-content-center">
                  <ButtonCrud name="ویرایش" icon={<FaRegEdit />} onClick={() => {
                    clickOpenEdit(e.id);
                    setEditState({
                      studentId: e.studentId,
                      lessonId: e.lessonId,
                      testId: e.testId,
                      score: e.score,
                    });
                  }} />
                  <ButtonCrud name="حذف " icon={<MdDeleteForever />} onClick={() => {
                    handleClickOpen(e.id);
                  }} />
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>


      <div>
        <TablePaginaite Data={DataStudentScore} handelChangePaginaite={handelChangePaginaite} pageParam={pageParam} />
      </div>
    </div>
  )
}
