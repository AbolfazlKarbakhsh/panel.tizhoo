import React from "react";
import Modal from "@components/global/modal/modal";
import { useModal } from "@hooks/crudModal/useModal";
import { usePostData } from "@hooks/usePosrData";
import { useDeleteData } from "@hooks/useDeleteData";
import { useModalV2 } from "@hooks/crudModal/useModalV2";
import { usePutData } from "@hooks/usePutData";
import { UserManagement } from '@core/typeCrud';
import TableUserMangement from "./components/TableUserMangement";
import CreateUserMangement from "./components/CreateUserMangement";
import SortEngine from "./components/SortEngine";


const config = UserManagement;


function UserMangement() {

  //* configuration delete item 
  const handelCofrimDeleteModal = data => DeleteLesson(data)
  const [DeleteLesson] = useDeleteData(config.del, config.api, config.get)
  const [openDelete, hOpenClickDelModal, hCloseDelModal, confirmDelModal] = useModal(handelCofrimDeleteModal);

  //* configuration Add item 
  const handelCofrimCreate = data => CreateStudent(data)
  const [CreateStudent] = usePostData(config.create, config.api, config.get)
  const [h_Create, ModalCreate] = useModalV2({ confirm: " افزودن", head: "  افزودن اطلاعات  نماینده " }, handelCofrimCreate);

  //* configuration Edit item 
  const handelCofrimEdit = data => EditStudent(data)
  const [EditStudent] = usePutData(config.edit, config.api, config.get)
  const [h_Edit, ModalEdit] = useModalV2({ confirm: " ویرایش", head: "  ویرایش اطلاعات  نماینده " }, handelCofrimEdit);




  return (
    <>
      <SortEngine />

      {/*preview data on table*/}
      <TableUserMangement handleClickOpen={hOpenClickDelModal} openCreateModal={h_Create.open} clickOpenEdit={h_Edit.open}  />

      {/*delete modal*/}
      <Modal open={openDelete} handleClose={hCloseDelModal} confirm={confirmDelModal} contents={{ confirm: "حذف", head: "  حذف  نماینده " }}>
        آیا از حذف این  نماینده مطمن هستید؟
      </Modal>

      {/*add modal*/}
      <ModalCreate >
        <CreateUserMangement confirm={h_Create.confirm} handleClose={h_Create.close} BtnConfirm="افزودن" stateCrud="add" />
      </ModalCreate>

      {/*edit modal*/}
      <ModalEdit>
        <CreateUserMangement confirm={h_Edit.confirm} handleClose={h_Edit.close} BtnConfirm="ویرایش" />
      </ModalEdit>

    </>
  );
}

export default UserMangement;