import React from "react";
import Modal from "@components/global/modal/modal";
import { useModal } from "@hooks/crudModal/useModal";
import { usePostData } from "@hooks/usePosrData";
import { useDeleteData } from "@hooks/useDeleteData";
import { usePutData } from "@hooks/usePutData";
import CreateClasses from "./components/createClasses";
import TableClasses from "./components/TableClasses";




function Classes() {

  //* configuration delete item 
  const handelCofrimDeleteModal = (data) => {
    DeleteBaseAndFeild(data)
  }
  const [DeleteBaseAndFeild] = useDeleteData("ClassRome_Del", "ClassRome", "ClassRome_Get")
  const [openDelete, hOpenClickDelModal, hCloseDelModal, confirmDelModal] = useModal(handelCofrimDeleteModal);



  //* configuration Add item 
  const handelCofrimCreate = (data) => {
    CreateBaseAndFeild(data)
  }
  const [CreateBaseAndFeild] = usePostData("ClassRome_Create", "ClassRome", "ClassRome_Get")
  const [openCreate, hOpenClickCreateModal, hCloseCreateModal, confirmCreateModal] = useModal(handelCofrimCreate);



    //* configuration Edit item 
    const handelCofrimEdit = (data) => {
      EditBaseAndFeild(data)
    }
    const [EditBaseAndFeild] = usePutData("ClassRome_Edit", "ClassRome", "ClassRome_Get")
    const [openEdit, clickOpenEdit, closeEditMobile, confirmEditModal] = useModal(handelCofrimEdit);
  


  return (
    <>
      {/* preview data on table  */}
      <TableClasses handleClickOpen={hOpenClickDelModal} openCreateModal={hOpenClickCreateModal}  clickOpenEdit={clickOpenEdit}/>

      {/* delete modal  */}
      <Modal open={openDelete} handleClose={hCloseDelModal} confirm={confirmDelModal} contents={{ confirm: "حذف", head: "  حذف کلاس " }}>
        آیا از حذف این آموزشگاه مطمن هستید؟
      </Modal>

      {/* add modal  */}
      <Modal open={openCreate} handleClose={hCloseCreateModal} confirm={confirmCreateModal} contents={{ confirm: "افزودن", head: "  افزودن سطر " }} defualtButtons={false}>
        <CreateClasses confirm={confirmCreateModal} handleClose={hCloseCreateModal} />
      </Modal>

       {/* edit modal  */}
       <Modal open={openEdit} handleClose={closeEditMobile} confirm={confirmEditModal} contents={{ confirm: " ویرایش", head: "  ویرایش سطر " }} defualtButtons={false}>
        <CreateClasses confirm={confirmEditModal} handleClose={closeEditMobile} />
      </Modal>
    </>
  );
}

export default Classes;