import React, { useState } from "react";
import useGetDataPaginaite from "@hooks/useGetDataPaginaite";
import Loader from "@components/global/serverState/Loader";
import { ConfigTest } from "@core/typeCrud";
import Table from "@components/table/Table";
import TablePaginaite from "@components/table/TablePaginaite";
import HeadPaya from "./table/HeadPaya";
import BodyPaya from "./table/BodyPaya";
const config = ConfigTest;

function TableTest() {
  //* cofiguration get item
  const [pageParam, setPageParam] = useState(1);
  const { BafData, BafPending, BafError } = useGetDataPaginaite(
    pageParam,
    10,
    config.api,
    config.get
  );

  const handelChangePaginaite = (e, index) => {
    setPageParam(index);
  };
  return (
    <>
      {BafPending && <Loader />}
      {BafError && <Loader Error="In" />}
      {BafData?.data && !BafError && !BafPending && (
        <div className=" BoxTiels bg-white mt-2 rounded-3 px-4 unload m-3 mt-3">
          <div className="font-sm-3 font-md-5 text-dark rtl">آزمون ها</div>

          <Table>
            <HeadPaya />
            <BodyPaya TestData={BafData?.data} />
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
