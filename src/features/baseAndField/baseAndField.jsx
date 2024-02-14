import React from "react";
import Modal from "@components/global/modal/modal";
import { useModal } from "@hooks/crudModal/useModal";
import { usePostData } from "@hooks/usePosrData";
import { useDeleteData } from "@hooks/useDeleteData";
import { usePutData } from "@hooks/usePutData";
import CreateBaf from "./components/createBaf";
import TableBaseAndFeild from "./components/TableBaseAndFeild";



function BaseAndField() {

  //* configuration delete item 
  const handelCofrimDeleteModal = (data) => {
    DeleteBaseAndFeild(data)
  }
  const [DeleteBaseAndFeild] = useDeleteData("baseAndField_Del", "baseAndField", "baseAndFeild_Get")
  const [openDelete, hOpenClickDelModal, hCloseDelModal, confirmDelModal] = useModal(handelCofrimDeleteModal);



  //* configuration Add item 
  const handelCofrimCreate = (data) => {
    CreateBaseAndFeild(data)
  }
  const [CreateBaseAndFeild] = usePostData("baseAndField_Create", "baseAndField", "baseAndFeild_Get")
  const [openCreate, hOpenClickCreateModal, hCloseCreateModal, confirmCreateModal] = useModal(handelCofrimCreate);



    //* configuration Edit item 
    const handelCofrimEdit = (data) => {
      EditBaseAndFeild(data)
    }
    const [EditBaseAndFeild] = usePutData("baseAndField_Edit", "baseAndField", "baseAndFeild_Get")
    const [openEdit, clickOpenEdit, closeEditMobile, confirmEditModal] = useModal(handelCofrimEdit);
  


  return (
    <>
      {/* preview data on table  */}
      <TableBaseAndFeild handleClickOpen={hOpenClickDelModal} openCreateModal={hOpenClickCreateModal}  clickOpenEdit={clickOpenEdit}/>

      {/* delete modal  */}
      <Modal open={openDelete} handleClose={hCloseDelModal} confirm={confirmDelModal} contents={{ confirm: "حذف", head: "حذف پایه و رشته" }}>
        آیا از حذف پایه و رشته مطمن هستید؟
      </Modal>

      {/* add modal  */}
      <Modal open={openCreate} handleClose={hCloseCreateModal} confirm={confirmCreateModal} contents={{ confirm: "افزودن", head: "  افزودن سطر " }} defualtButtons={false}>
        <CreateBaf confirm={confirmCreateModal} handleClose={hCloseCreateModal} />
      </Modal>

       {/* edit modal  */}
       <Modal open={openEdit} handleClose={closeEditMobile} confirm={confirmEditModal} contents={{ confirm: " ویرایش", head: "  ویرایش سطر " }} defualtButtons={false}>
        <CreateBaf confirm={confirmEditModal} handleClose={closeEditMobile} />
      </Modal>
    </>
  );
}

export default BaseAndField;
