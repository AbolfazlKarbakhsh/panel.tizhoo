import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function Modal({ children , open, handleClose, confirm, contents , defualtButtons = true  }) {
  return (
    <>
      <Dialog
        dir="rtl"
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth={true}
        maxWidth={'sm'}
      >
        <DialogTitle id="alert-dialog-title">
          <div className="Fvazir font-sm-4 font-lg-5">{contents.head}</div>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <div className="Fvazir font-sm-4 font-lg-3">
           {children}
          </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions className={!defualtButtons && 'd-none'}>
          <button
            className="btn btn-secondary font-sm-2 font-md-3 "
            style={{ fontWeight: "200" }}
            onClick={handleClose}
          >
            انصراف
          </button>
          <button
            className="btn btn-brand mx-2 font-sm-2 font-md-3 "
            style={{ fontWeight: "200" }}
            onClick={() => {
              confirm();
              handleClose();
            }}
          >
            {contents.confirm}
          </button>
        </DialogActions>
      </Dialog>
    </>
  );
}
