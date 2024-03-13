import React from "react";
import Modal from "@components/global/modal/modal";
import { useModal } from "@hooks/crudModal/useModal";
import { usePostData } from "@hooks/usePosrData";
import { useDeleteData } from "@hooks/useDeleteData";
import { usePutData } from "@hooks/usePutData";
import CreateClasses from "./components/createClasses";
import TableClasses from "./components/TableClasses";
import { useModalV2 } from "@hooks/crudModal/useModalV2";
import { ConfigClass } from '@core/typeCrud';
import useFilePdfStudentAll from "@hooks/Report/useFilePdfStudents";
import Report from "@components/report/report";
import useFileExcelStudentAll from "@hooks/Report/useFileExcelStudents";
import ReportClass from "./Reports/ReportClass";
const config = ConfigClass;

function Classes() {


  //* configuration delete item 
  const handelCofrimDeleteModal = data => DeleteBaseAndFeild(data)
  const [DeleteBaseAndFeild] = useDeleteData(config.del, config.api, config.get)
  const [openDelete, hOpenClickDelModal, hCloseDelModal, confirmDelModal] = useModal(handelCofrimDeleteModal);

  //* configuration Add item 
  const handelCofrimCreate = data => CreateBaseAndFeild(data)
  const [CreateBaseAndFeild] = usePostData(config.create, config.api, config.get)
  const [openCreate, hOpenClickCreateModal, hCloseCreateModal, confirmCreateModal] = useModal(handelCofrimCreate);

  //* configuration Edit item 
  const handelCofrimEdit = data => EditBaseAndFeild(data)
  const [EditBaseAndFeild] = usePutData(config.edit, config.api, config.get)
  const [openEdit, clickOpenEdit, closeEditMobile, confirmEditModal] = useModal(handelCofrimEdit);


  //* Report techear at clases
  const handelReportStudentAll = data => {
    const params = { classRomeId: +data.id, testId: +data.testId, lessonId: +data.lessonId }
    data.ReportType == 0 ? ExportExcelAll(params) : ExportPdfAll(params)
  }
  const [ExportPdfAll] = useFilePdfStudentAll("Report/printTeacher", "ReportCard_Get_Modal_Class_All")
  const [ExportExcelAll] = useFileExcelStudentAll("Report/printTeacherExcel", "ReportCard_Get_Modal_Class_Excel")
  const [h_ReportAll, ModalReportAll] = useModalV2({ confirm: " گزارش ", head: "  گزارش کارنامه دبیر   " }, handelReportStudentAll);



  //* Report managment student at clases
  const handelReportManagmentStudent = data => {
    const params = { classRomeId: +data.id, testId: +data.testId }
    data.ReportType == 0 ? ExportExcelManageStudent(params) : ExportPdfManageStudent(params)
  }
  const [ExportPdfManageStudent] = useFilePdfStudentAll("Report/printManagementStudent", "ReportCard_Get_ManageStudent_pdf")
  const [ExportExcelManageStudent] = useFileExcelStudentAll("Report/printManagementStudentExcel", "ReportCard_Get_ManageStudent_Excel")
  const [h_ReportManageStudent, ModalReportManageStudent] = useModalV2({ confirm: " گزارش ", head: "  گزارش  مدیریت دانش آموز   " }, handelReportManagmentStudent);


  return (
    <>
      {/* preview data on table  */}
      <TableClasses handleClickOpen={hOpenClickDelModal} openCreateModal={hOpenClickCreateModal} clickOpenEdit={clickOpenEdit}
        h_ReportAllOpen={h_ReportAll.open} h_openMangeStudent={h_ReportManageStudent.open} />

      {/* delete modal  */}
      <Modal open={openDelete} handleClose={hCloseDelModal} confirm={confirmDelModal} contents={{ confirm: "حذف", head: "  حذف کلاس " }}>
        آیا از حذف این آموزشگاه مطمن هستید؟
      </Modal>

      {/* add modal  */}
      <Modal open={openCreate} handleClose={hCloseCreateModal} confirm={confirmCreateModal} contents={{ confirm: "افزودن", head: "  افزودن سطر " }} defualtButtons={false}>
        <CreateClasses confirm={confirmCreateModal} handleClose={hCloseCreateModal} BtnConfirm="افزودن" />
      </Modal>

      {/* edit modal  */}
      <Modal open={openEdit} handleClose={closeEditMobile} confirm={confirmEditModal} contents={{ confirm: " ویرایش", head: "  ویرایش سطر " }} defualtButtons={false}>
        <CreateClasses confirm={confirmEditModal} handleClose={closeEditMobile} BtnConfirm="ویرایش" />
      </Modal>

      <ModalReportAll>
        <ReportClass confirmPdf={h_ReportAll.confirm} closePdf={h_ReportAll.close} />
      </ModalReportAll>

      <ModalReportManageStudent >
        <Report confirmPdf={h_ReportManageStudent.confirm} closePdf={h_ReportManageStudent.close} />
      </ModalReportManageStudent>
    </>
  );
}

export default Classes;
