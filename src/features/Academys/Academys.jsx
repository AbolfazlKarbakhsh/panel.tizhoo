import React from "react";
import Modal from "@components/global/modal/modal";
import { useModal } from "@hooks/crudModal/useModal";
import { usePostData } from "@hooks/usePosrData";
import { useDeleteData } from "@hooks/useDeleteData";
import { usePutData } from "@hooks/usePutData";
import { useModalV2 } from "@hooks/crudModal/useModalV2";
import useFileExcelStudentAll from "@hooks/Report/useFileExcelStudents";
import useFilePdfStudentAll from "@hooks/Report/useFilePdfStudents";
import CreateAcademys from "./components/createAcademys";
import TableAcademys from "./components/TableAcademys";
import Report from "@components/report/report";



function Academys() {

  //* configuration delete item 
  const handelCofrimDeleteModal = (data) => {
    DeleteBaseAndFeild(data)
  }
  const [DeleteBaseAndFeild] = useDeleteData("school_Del", "school", "school_Get")
  const [openDelete, hOpenClickDelModal, hCloseDelModal, confirmDelModal] = useModal(handelCofrimDeleteModal);


  //* configuration Add item 
  const handelCofrimCreate = (data) => {
    CreateBaseAndFeild(data)
  }
  const [CreateBaseAndFeild] = usePostData("school_Create", "school", "school_Get")
  const [openCreate, hOpenClickCreateModal, hCloseCreateModal, confirmCreateModal] = useModal(handelCofrimCreate);


  //* configuration Edit item 
  const handelCofrimEdit = (data) => {
    EditBaseAndFeild(data)
  }
  const [EditBaseAndFeild] = usePutData("school_Edit", "school", "school_Get")
  const [openEdit, clickOpenEdit, closeEditMobile, confirmEditModal] = useModal(handelCofrimEdit);


  //* configuration Pdf a student  
  const handelReportStudent =  data => {
    const params = { schoolId: +data.id, testId: +data.testId }
    data.ReportType == 0 ? ExportExcel(params) : ExportPdf(params)
  }
  const [ExportPdf] = useFilePdfStudentAll("Report/printManagementTeacher", "ReportCard_Get_Modal_ManageMentTecher_pdf")
  const [ExportExcel] = useFileExcelStudentAll("Report/printManagementTeacherExcel", "ReportCard_Get_Modal_ManageMentTecher_excel")
  const [h_Report, ModalReport] = useModalV2({ confirm: " گزارش ", head: "  گزارش مدیر  " }, handelReportStudent);


  return (
    <>
      {/* preview data on table  */}
      <TableAcademys handleClickOpen={hOpenClickDelModal} openCreateModal={hOpenClickCreateModal} clickOpenEdit={clickOpenEdit} openReportMGTecher={h_Report.open} />

      {/* delete modal  */}
      <Modal open={openDelete} handleClose={hCloseDelModal} confirm={confirmDelModal} contents={{ confirm: "حذف", head: "  حذف آموزشگاه " }}>
        آیا از حذف این آموزشگاه مطمن هستید؟
      </Modal>

      {/* add modal  */}
      <Modal open={openCreate} handleClose={hCloseCreateModal} confirm={confirmCreateModal} contents={{ confirm: "افزودن", head: "  افزودن سطر " }} defualtButtons={false}>
        <CreateAcademys confirm={confirmCreateModal} handleClose={hCloseCreateModal} />
      </Modal>

      {/* edit modal  */}
      <Modal open={openEdit} handleClose={closeEditMobile} confirm={confirmEditModal} contents={{ confirm: " ویرایش", head: "  ویرایش سطر " }} defualtButtons={false}>
        <CreateAcademys confirm={confirmEditModal} handleClose={closeEditMobile} />
      </Modal>


      {/*Export Pdf Student modal*/}
      <ModalReport>
        <Report confirmPdf={h_Report.confirm} closePdf={h_Report.close} />
      </ModalReport>
    </>
  );
}

export default Academys;
