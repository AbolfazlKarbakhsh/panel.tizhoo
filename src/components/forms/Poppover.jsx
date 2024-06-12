import * as React from "react";
import Popover from "@mui/material/Popover";
import { FaUserGear } from "react-icons/fa6";

export default function Poppover({ children, name, Button }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    < >
      {Button != undefined ? (
        <div
          className={`btnRightNav d-flex align-items-center btn justify-content-around  IconSet  ${
            Button.logic ? "activeBtn3" : "activeBtn"
          } `}
          role="button"
          aria-pressed="false"
          onClick={handleClick}
        >
          <span className="font2 items  w-100 mt-0 "> {Button.name}</span>
          {Button.icon}
        </div>
      ) : (
        <button
          className={`btn  btn-global mx-2 my-1 my-md-0 px-2  font3 centerAll  `}
          aria-describedby={id}
          variant="contained"
          onClick={handleClick}
        >
          <span className="font1 me-1">{name ? name : "عملیات"}</span>
          <span className=" font5 ct mx-1" style={{ marginTop: "-4px" }}>
            <FaUserGear />
          </span>
        </button>
      )}

      <div className="rtl">
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          className=""
        >
          {children}
        </Popover>
      </div>
    </>
  );
}
