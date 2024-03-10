import React from "react";
import Modal from "@components/global/modal/modal";
import { useModal } from "@hooks/crudModal/useModal";
import { usePostData } from "@hooks/usePosrData";
import { useDeleteData } from "@hooks/useDeleteData";
import useFilePdfStudent from "@hooks/Report/useFilePdfStudent";
import { useModalV2 } from "@hooks/crudModal/useModalV2";
import { usePutData } from "@hooks/usePutData";
import useFilePdfStudentAll from "@hooks/Report/useFilePdfStudents";
import { ConfigStudents } from '@core/typeCrud';
import useStudentData from "@store/pishro/student/studentStore";
import TableStudents from "./components/TableStudents";
import CreateStudents from "./components/createStudents";
import SortEngine from "./components/SortEngine";
import ReportStudent from "./components/Reports/ReportStudent";
const config = ConfigStudents;


function Students() {

  const DataStudent = useStudentData(state => state.data)
  //* configuration delete item 
  const handelCofrimDeleteModal = data => DeleteLesson(data)
  const [DeleteLesson] = useDeleteData(config.del, config.api, config.get)
  const [openDelete, hOpenClickDelModal, hCloseDelModal, confirmDelModal] = useModal(handelCofrimDeleteModal);

  //* configuration Add item 
  const handelCofrimCreate = data => CreateStudent(data)
  const [CreateStudent] = usePostData(config.create, config.api, config.get)
  const [h_Create, ModalCreate] = useModalV2({ confirm: " افزودن", head: "  افزودن اطلاعات دانش آموز " }, handelCofrimCreate);

  //* configuration Edit item 
  const handelCofrimEdit = data => EditStudent(data)
  const [EditStudent] = usePutData(config.edit, config.api, config.get)
  const [h_Edit, ModalEdit] = useModalV2({ confirm: " ویرایش", head: "  ویرایش اطلاعات دانش آموز " }, handelCofrimEdit);


  //* configuration Pdf a student  
  const handelReportStudent = data => ExportPdf({ userId: data.id, testId: data.testId })
  const [ExportPdf] = useFilePdfStudent("ReportCard/printReportCard", "ReportCard_Get_Modal_studnent")
  const [h_Report, ModalReport] = useModalV2({ confirm: " گزارش ", head: "  گزارش کارنامه  " }, handelReportStudent);

  //* configuration Pdf fOR All Students  
  const handelReportStudentAll = dataS => ExportPdfAll({ usersId: DataStudent, testId: +dataS.testId })
  const [ExportPdfAll] = useFilePdfStudentAll("ReportCard/printReportCardGroup", "ReportCard_Get_Modal_studnent_All")
  const [h_ReportAll, ModalReportAll] = useModalV2({ confirm: " گزارش ", head: "  گزارش کارنامه گروهی   " }, handelReportStudentAll);


  
  return (
    <>
      {/* 3-8-20 */}
      {/* sort Students  */}
      <SortEngine h_ReportAll={h_ReportAll.open} />

      {/*preview data on table*/}
      <TableStudents handleClickOpen={hOpenClickDelModal} openCreateModal={h_Create.open} clickOpenEdit={h_Edit.open} clickOpenPdf={h_Report.open} />


      {/*delete modal*/}
      <Modal open={openDelete} handleClose={hCloseDelModal} confirm={confirmDelModal} contents={{ confirm: "حذف", head: "  حذف دانش آموز " }}>
        آیا از حذف این دانش آموز مطمن هستید؟
      </Modal>

      {/*add modal*/}
      <ModalCreate >
        <CreateStudents confirm={h_Create.confirm} handleClose={h_Create.close} BtnConfirm="افزودن" stateCrud="add" />
      </ModalCreate>

      {/*edit modal*/}
      <ModalEdit>
        <CreateStudents confirm={h_Edit.confirm} handleClose={h_Edit.close} BtnConfirm="ویرایش" />
      </ModalEdit>

      {/*Export Pdf Student modal*/}
      <ModalReport>
        <ReportStudent confirmPdf={h_Report.confirm} closePdf={h_Report.close} />
      </ModalReport>

      {/*Export All Pdf Student modal*/}
      <ModalReportAll>
        <ReportStudent confirmPdf={h_ReportAll.confirm} closePdf={h_ReportAll.close} />
      </ModalReportAll>

    </>
  );
}

export default Students;