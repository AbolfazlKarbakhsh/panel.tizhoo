import React from "react";
import SideBarHeader from "./SideBarHeader";
import { NavLink } from "react-router-dom";
import ButtonsSidebar from "./ButtonsSidebar";
import { IoExitOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useAppContext } from "@context/AppContext";
import PersnalDetails from "./PersnalDetails";
import { useQueryClient } from "@tanstack/react-query";
import { Skeleton } from "@mui/material";
function SideBar() {
  const { gigaMenu, DrawerGigaMenu } = useAppContext();
  const HandelExitAccount = () => {
    localStorage.removeItem("t_a#@$sdf_k");
  };
  const client = useQueryClient();
  const roleId = client.getQueryData(["UserManagement_CurrentUser_catch"]);

  return (
    <div
      className="col-5 col-md-3 col-lg-2  gigamenu px-0"
      style={{ right: gigaMenu ? "0" : "" }}
    >
      <div className="RightGigiMenu h-sm-auto position-relative">
        <div className="w-100">
          <SideBarHeader imgClass="hide-img-769" />

          {roleId != undefined && (
            <PersnalDetails
              className="d-flex d-lg-none "
              semat={roleId.roleName}
              name={roleId.firstName  + " "  + roleId.lastName}
            />
          )}
        </div>

        {/* <!-- buttons  Pges--> */}
        <div className="AvatarFix sizeBtn pt-2 pb-2">
          <ButtonsSidebar />
        </div>

        {/* <!-- buttons  Mangage--> */}
        <div className="AvatarFix sizeBtn pt-2 pb-2 ">
          <NavLink
            to="/login"
            className={`nav btn btnRightNav IconSet activeBtn `}
            onClick={HandelExitAccount}
            role="button"
            aria-pressed="false"
          >
            <span className="font2 items"> خروج از حساب </span>
            <IoExitOutline className={`font7  ct-green-dark `} />
          </NavLink>
        </div>

        {/* <!-- exit btn  --> */}
        <div
          className={` IconSet d-block  d-md-none cl-gray pointer effect mt-3 font9 position-absolute sidebar-exit-posation`}
          onClick={DrawerGigaMenu}
        >
          <div
            className="btn sidebar-color rounded effect"
            style={{ padding: ".4rem .5rem" }}
          >
            <IoClose className=" text-white  " style={{ fontSize: "1.3rem" }} />
          </div>
        </div>

        {roleId != undefined ? (
          <PersnalDetails
            className="d-lg-flex d-none "
            semat={roleId.roleName}
            name={roleId.firstName + " " + roleId.lastName}
          />
        ) : (
          <Skeleton
            variant="rounded"
            width={"100%"}
            height={56}
            sx={{ bgcolor: "grey.600" }}
          />
        )}

        <div className="d-lg-none"></div>
      </div>
    </div>
  );
}

export default SideBar;
