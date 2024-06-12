import React from "react";
import { TiTick } from "react-icons/ti"; 
import { RiCloseFill } from "react-icons/ri"; 
import { FaRegEdit } from "react-icons/fa";
import ButtonCrud from "@components/table/ButtonCrud";
import { Switch } from "@mui/material";
import {ConfigRemove , ConfigRestore} from '@core/typeCrud';
import { usePutData } from "@hooks/usePutData";
import { useAppContext } from "@context/AppContext";


function BodyPaya({ TestData , clickOpenEdit }) {
  const [SRemoveTest] = usePutData( ConfigRemove.del , ConfigRemove.api,'Test_Get')
  const [SRestoreTest] = usePutData( ConfigRestore.del , ConfigRestore.api, 'Test_Get')
  const { setEditState } = useAppContext();
  const handelEditState = (e) =>{
    setEditState({
      id:e.id,
      name:e.name,
      description:e.description,
      startDate:e.startDate,
      expireDate:e.expireDate,
      registerDate:e.registerDate,
      baseAndFieldId:e.baseAndFieldId,
      provinceId:e.provinceId,
      cityId:e.cityId,
      details:e.details
    })
  }
  
  return (
    <tbody>
      {TestData &&
        TestData.map((e, i) => {
          return (
            <tr key={i} className={`bg-opacity-10  ${e.isRemove ? 'bg-danger' : 'bg-success'} `}>
              <td scope="row">{i + 1}</td>
              <td>{e.id}</td>
              <td>{e.name}</td>
              <td > {e.description} </td>
              <td > {e.isRemove ? <div><RiCloseFill /></div> : <div><TiTick /></div>} </td>
              <td > {e.pStartDate} </td>
              <td > {e.pExpireDate} </td>
              <td > {e.pRegisterDate} </td>
              <td className="d-flex justify-content-center">
              <ButtonCrud name="ویرایش" icon={<FaRegEdit />} onClick={() => {clickOpenEdit();handelEditState(e)}} />
              <Switch checked={e.isRemove}  color="error" onClick={() => e.isRemove? SRestoreTest({id:e.id}) : SRemoveTest({id:e.id})} /> 
              </td>
            </tr>
          );
        })}


    </tbody>
  );
}

export default BodyPaya;
