import React from "react";
import Modal from "@components/global/modal/modal";
import { useModal } from "@hooks/crudModal/useModal";
import { usePostData } from "@hooks/usePosrData";
import { useDeleteData } from "@hooks/useDeleteData";
import { usePutData } from "@hooks/usePutData";
import CreateAcademys from "./components/createAcademys";
import TableAcademys from "./components/TableAcademys";



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

  return (
    <>
      {/* preview data on table  */}
      <TableAcademys handleClickOpen={hOpenClickDelModal} openCreateModal={hOpenClickCreateModal} clickOpenEdit={clickOpenEdit} />

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
    </>
  );
}

export default Academys;
