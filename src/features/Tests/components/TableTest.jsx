import React, { useState } from "react";
import useGetDataPaginaite from "@hooks/useGetDataPaginaite";
import Loader from "@components/global/serverState/Loader";
import { Pagination, Stack } from "@mui/material";
import {ConfigTest} from '@core/typeCrud';
const config = ConfigTest;

function TableTest() {

  //* cofiguration get item 
  const [pageParam, setPageParam] = useState(1);
  const { BafData, BafPending, BafError } = useGetDataPaginaite(pageParam , 10 , config.api , config.get);


  const handelChangePaginaite = (e, index) => {
    setPageParam(index);
  };
  return (
    <>
      {(BafPending ) && <Loader />}
      {(BafError  ) && <Loader Error="In" />}
      {(BafData?.data && !BafError && !BafPending ) && (
        <div className=" BoxTiels bg-white mt-2 rounded-3 px-4 unload m-3 mt-3">
          <div className="font-sm-3 font-md-5 text-dark rtl">
            آزمون ها
          </div>

          <div className={`row mt-2 rtl`}>
            <div className="col-12 px-0 mt-1 mx-0 unload position-relative px-2 px-lg-3 ">
              <div className="row ">
                <div className="table-responsive-lg no-scroll rounded-1 mt-4 p-0 col-12  ">
                  <table className="table table-light-td width-mobile-table-600">
                    <thead className="thead-dark-custom ">
                      <tr className="th-Remove-FontWeight">
                        <th scope="col">#</th>
                        <th scope="col">id</th>
                        <th scope="col"> نام آزمون </th>
                        <th scope="col"> تاریخ انقضا    </th>
                      </tr>
                    </thead>
                    <tbody>
                      {BafData?.data &&
                        BafData?.data.map((e, i) => {
                          return (
                            <tr key={i}>
                              <td scope="row">{i + 1}</td>
                              <td>{e.id}</td>
                              <td>{e.name}</td>
                              <td>{e.expireDate}</td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Stack spacing={20}>
              <Pagination
                count={BafData?.totalCount}
                variant="outlined"
                shape="rounded"
                className="fff"
                color="secondary"
                onChange={handelChangePaginaite}
                defaultPage={pageParam}
              />
            </Stack>
          </div>
        </div>
      )}
    </>
  );
}

export default TableTest;
