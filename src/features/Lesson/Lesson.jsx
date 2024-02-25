import React from "react";
import Modal from "@components/global/modal/modal";
import { useModal } from "@hooks/crudModal/useModal";
import { usePostData } from "@hooks/usePosrData";
import { useDeleteData } from "@hooks/useDeleteData";
import { usePutData } from "@hooks/usePutData";
import TableLesson from "./components/TableLesson";
import CreateLesson from "./components/createLesson";
import {ConfigLesson} from '@core/typeCrud';
const config = ConfigLesson;



function Lesson() {

  //* configuration delete item 
  const handelCofrimDeleteModal = (data) => {
    DeleteLesson(data)
  }
  const [DeleteLesson] = useDeleteData( config.del , config.api, config.get)
  const [openDelete, hOpenClickDelModal, hCloseDelModal, confirmDelModal] = useModal(handelCofrimDeleteModal);



  //* configuration Add item 
  const handelCofrimCreate = (data) => {
    CreateLessonApi(data)
  }
  const [CreateLessonApi] = usePostData( config.create, config.api, config.get)
  const [openCreate, hOpenClickCreateModal, hCloseCreateModal, confirmCreateModal] = useModal(handelCofrimCreate);



    //* configuration Edit item 
    const handelCofrimEdit = (data) => {
      EditLesson(data)
    }
    const [EditLesson] = usePutData(config.edit, config.api, config.get)
    const [openEdit, clickOpenEdit, closeEditMobile, confirmEditModal] = useModal(handelCofrimEdit);
  


  return (
    <>
      {/* preview data on table  */}
      <TableLesson handleClickOpen={hOpenClickDelModal} openCreateModal={hOpenClickCreateModal}  clickOpenEdit={clickOpenEdit}/>

      {/* delete modal  */}
      <Modal open={openDelete} handleClose={hCloseDelModal} confirm={confirmDelModal} contents={{ confirm: "حذف", head: "  حذف درس " }}>
        آیا از حذف این درس مطمن هستید؟
      </Modal>

      {/* add modal  */}
      <Modal open={openCreate} handleClose={hCloseCreateModal} confirm={confirmCreateModal} contents={{ confirm: "افزودن", head: "  افزودن سطر " }} defualtButtons={false}>
        <CreateLesson confirm={confirmCreateModal} handleClose={hCloseCreateModal} BtnConfirm="افزودن"/>
      </Modal>

       {/* edit modal  */}
       <Modal open={openEdit} handleClose={closeEditMobile} confirm={confirmEditModal} contents={{ confirm: " ویرایش", head: "  ویرایش سطر " }} defualtButtons={false}>
        <CreateLesson confirm={confirmEditModal} handleClose={closeEditMobile} BtnConfirm="ویرایش"/>
      </Modal>
    </>
  );
}

export default Lesson;
