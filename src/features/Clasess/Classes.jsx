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
import ReportClass from "./components/ReportClass";
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

  //* Report Thchers at clases
  const handelReportStudentAll = data => ExportPdfAll({classRomeId: +data.id ,testId: +data.testId ,lessonId: +data.lessonId  })
  const [ExportPdfAll] = useFilePdfStudentAll("Report/printTeacher", "ReportCard_Get_Modal_Class_All")
  const [h_ReportAll, ModalReportAll] = useModalV2({ confirm: " چاپ ", head: "  چاپ کارنامه دبیر   " }, handelReportStudentAll);


  return (
    <>
      {/* preview data on table  */}
      <TableClasses handleClickOpen={hOpenClickDelModal} openCreateModal={hOpenClickCreateModal} clickOpenEdit={clickOpenEdit}  h_ReportAllOpen={h_ReportAll.open}/>

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
        <ReportClass  confirmPdf={h_ReportAll.confirm} closePdf={h_ReportAll.close}  />
      </ModalReportAll>
    </>
  );
}

export default Classes;
