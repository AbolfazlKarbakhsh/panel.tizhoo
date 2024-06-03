import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router";
import SideBar from "./SideBar";
import { useAppContext } from "@context/AppContext";
import DarkPanel from "@components/global/darkPanel";
import HeaderMobile from "./headerMobile";
import useGetData from "@hooks/useGetData";
import { Skeleton } from "@mui/material";

function MainLayout() {
  const { gigaMenu, DrawerGigaMenu } = useAppContext();
  const StateToken = localStorage.getItem("t_a#@$sdf_k");
  const [roleState, setRoleState] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (StateToken == null) {
      navigate("/login");
    }
  }, [StateToken]);

  const [personalData] = useGetData(
    "UserManagement/CurrentUser",
    "UserManagement_CurrentUser_catch"
  );

  useEffect(() => {
    if (personalData != undefined) {
      switch (personalData.roleId) {
        case 2:
          navigate("/Student");
          setRoleState(true);
          break;
        case 6:
          navigate("/Taechar");
          setRoleState(true);
          break;
        default:
          setRoleState(true)
          break;
      }
    }
  }, [personalData]);

  return (
    <>
      {StateToken && (
        <div className="CenterBox animatinLoad ">
          <div className="PanelCenter row m-0">
            <div
              className="col-12 col-md-9 col-lg-10 mainContent px-2"
              style={{ overflow: "auto" }}
            >
              <div className=" mio unload position-relative ">
                <HeaderMobile />
                {roleState ? (
                  <Outlet />
                ) : (
                  <div className="px-4 mt-3">
                    <Skeleton
                      variant="rounded"
                      width={"100%"}
                      height={100}
                      className="my-1 "
                    />
                    <Skeleton
                      variant="rounded"
                      width={"100%"}
                      height={250}
                      className="my-1 mt-3 "
                    />
                  </div>
                )}
              </div>
            </div>

            <SideBar />
            <DarkPanel
              openState={gigaMenu}
              method={DrawerGigaMenu}
              className="hide-right-768"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default MainLayout;
