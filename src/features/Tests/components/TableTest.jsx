import React, { useEffect, useState } from "react";
import Loader from "@components/global/serverState/Loader";
import { ConfigTest } from "@core/typeCrud";
import Table from "@components/table/Table";
import TablePaginaite from "@components/table/TablePaginaite";
import HeadPaya from "./table/HeadPaya";
import BodyPaya from "./table/BodyPaya";
import { IoMdAdd } from "react-icons/io";
import TabsMui from "@components/navs/Tabs";
import ButtonCrud from "@components/table/ButtonCrud";
import { useQueryClient } from "@tanstack/react-query";
import useGetDataParams from "@hooks/useGetDataParams";
import CActiveTab from "@store/pishro/another/navs";
import { useAppContext } from "@context/AppContext";

const config = ConfigTest;

function TableTest({ clickOpenEdit, hOpenClickCreateModal }) {
  //*configure tabs
  const [ActiveTab, setActiveTab] = useState(1);
  const client = useQueryClient();
  const TabsTitle =
    client.getQueryData(["Test_Get_Tab_Test/ListTestType"]) || [];
  const hChangeActiveTab = (event, newValue) => {
    setActiveTab(newValue);
  };

  //* cofiguration get item
  const [pageParam, setPageParam] = useState(1);
  const ParmsGetAllServiece = [
    { paramUrl: "page", paramKey: pageParam },
    { paramUrl: "pageSize", paramKey: 10 },
    { paramUrl: "type", paramKey: ActiveTab + 1 },
  ];
  const [BafData, BafPending, BafError] = useGetDataParams(
    ParmsGetAllServiece,
    config.api,
    config.get
  );

  //*paginate
  const handelChangePaginaite = (e, index) => {
    setPageParam(index);
  };

  //* zustand
  const { changeData } = CActiveTab((state) => state.actions);
  useEffect(() => {
    changeData(ActiveTab + 1);
  }, [ActiveTab]);

  const { setEditState } = useAppContext();

  return (
    <>
      {BafPending && <Loader />}
      {BafError && <Loader Error="In" />}
      {BafData?.data && !BafError && !BafPending && (
        <div className=" BoxTiels bg-white mt-2 rounded-3 px-4 unload m-3 mt-3">
          <div className="d-flex justify-content-between align-items-center">
            <ButtonCrud
              name="تعریف آزمون"
              icon={<IoMdAdd />}
              onClick={() => {hOpenClickCreateModal()
                setEditState('add')}}
            />
            <div className="font-sm-3 font-md-5 text-dark rtl">آزمون ها</div>
          </div>

          <div className="d-flex justify-content-center mt-2 mt-lg-0">
            {TabsTitle != undefined && (
              <TabsMui
                tabs={TabsTitle.map((i) => ({ ...i, name: i.name.slice(6) }))}
                handleChange={hChangeActiveTab}
                value={ActiveTab}
              />
            )}
          </div>

          <Table>
            <HeadPaya />
            <BodyPaya TestData={BafData?.data} clickOpenEdit={clickOpenEdit} />
          </Table>

          <TablePaginaite
            Data={BafData}
            handelChangePaginaite={handelChangePaginaite}
            pageParam={pageParam}
          />
        </div>
      )}
    </>
  );
}

export default TableTest;
