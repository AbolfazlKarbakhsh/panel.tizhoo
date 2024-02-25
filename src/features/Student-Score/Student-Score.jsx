import React from "react";
import Modal from "@components/global/modal/modal";
import { useModal } from "@hooks/crudModal/useModal";
import { usePostData } from "@hooks/usePosrData";
import { useDeleteData } from "@hooks/useDeleteData";
import { usePutData } from "@hooks/usePutData";
import {ConfigStudentScore} from '@core/typeCrud';
import CreateStudentScore from "./components/createStudent-Score";
import TableStudentScore from "./components/TableStudent-Score";
const config = ConfigStudentScore;



function StudentScore() {

  //* configuration delete item 
  const handelCofrimDeleteModal = (data) => {
    DeleteStudentScore(data)
  }
  const [DeleteStudentScore] = useDeleteData( config.del , config.api, config.get)
  const [openDelete, hOpenClickDelModal, hCloseDelModal, confirmDelModal] = useModal(handelCofrimDeleteModal);



  //* configuration Add item 
  const handelCofrimCreate = (data) => {
    CreateStudentScoreApi(data)
  }
  const [CreateStudentScoreApi] = usePostData( config.create, config.api, config.get)
  const [openCreate, hOpenClickCreateModal, hCloseCreateModal, confirmCreateModal] = useModal(handelCofrimCreate);



    //* configuration Edit item 
    const handelCofrimEdit = (data) => {
      EditStudentScore(data)
    }
    const [EditStudentScore] = usePutData(config.edit, config.api, config.get)
    const [openEdit, clickOpenEdit, closeEditMobile, confirmEditModal] = useModal(handelCofrimEdit);
  


  return (
    <>
      {/* preview data on table  */}
      <TableStudentScore handleClickOpen={hOpenClickDelModal} openCreateModal={hOpenClickCreateModal}  clickOpenEdit={clickOpenEdit}/>

      {/* delete modal  */}
      <Modal open={openDelete} handleClose={hCloseDelModal} confirm={confirmDelModal} contents={{ confirm: "حذف", head: "  حذف نمره " }}>
        آیا از حذف این نمره مطمن هستید؟
      </Modal>

      {/* add modal  */}
      <Modal open={openCreate} handleClose={hCloseCreateModal} confirm={confirmCreateModal} contents={{ confirm: "افزودن", head: "   ثبت نمره " }} defualtButtons={false}>
        <CreateStudentScore confirm={confirmCreateModal} handleClose={hCloseCreateModal} BtnConfirm="افزودن"/>
      </Modal>

       {/* edit modal  */}
       <Modal open={openEdit} handleClose={closeEditMobile} confirm={confirmEditModal} contents={{ confirm: " ویرایش", head: "  ویرایش نمره " }} defualtButtons={false}>
        <CreateStudentScore confirm={confirmEditModal} handleClose={closeEditMobile} BtnConfirm="ویرایش"/>
      </Modal>
    </>
  );
}

export default StudentScore;
