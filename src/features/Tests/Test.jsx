import React from "react";
import TableTest from "./components/TableTest";
import Modal from "@components/global/modal/modal";
import { useModal } from "@hooks/crudModal/useModal";
import { usePostData } from "@hooks/usePosrData";
import { usePutData } from "@hooks/usePutData";
import { ConfigTest } from "@core/typeCrud";
import TestModal from "./components/createTest";
const config = ConfigTest;

function Test() {
  //* configuration Add item
  const handelCofrimCreate = (data) => {
    CreateTest(data);
  };
  const [CreateTest] = usePostData( config.create, config.api, config.get)
  const [openCreate, hOpenClickCreateModal, hCloseCreateModal, confirmCreateModal] = useModal(handelCofrimCreate);


  //* configuration Edit item
  const handelCofrimEdit = (data) => {
    EditTest(data);
  };
  const [EditTest] = usePutData(config.edit, config.api, config.get)
  const [openEdit, clickOpenEdit, closeEditMobile, confirmEditModal] = useModal(handelCofrimEdit);
 
  return (
    <>
      <TableTest hOpenClickCreateModal={hOpenClickCreateModal} clickOpenEdit={clickOpenEdit}/>
        {/* add modal  */}
        <Modal open={openCreate} handleClose={hCloseCreateModal} confirm={confirmCreateModal} contents={{ confirm: "افزودن آزمون", head: "   تعریف آزمون " }} defualtButtons={false}>
        <TestModal confirm={confirmCreateModal} handleClose={hCloseCreateModal} BtnConfirm="افزودن"/>
      </Modal>

       {/* edit modal  */}
       <Modal open={openEdit} handleClose={closeEditMobile} confirm={confirmEditModal} contents={{ confirm: " ویرایش آزمون", head: "  ویرایش آزمون " }} defualtButtons={false}>
        <TestModal confirm={confirmEditModal} handleClose={closeEditMobile} BtnConfirm="ویرایش"/>
      </Modal>
    </>
  );
}

export default Test;
