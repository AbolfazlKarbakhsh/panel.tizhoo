import React, { useEffect } from "react";
import InputWithLabel from "@components/forms/input";
import { useForm } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";
import sortUserMangement from "@store/pishro/another/sortUserMangement";

const SortEngine = () => {
  const { register, watch } = useForm();
  const client = useQueryClient();
  const { changeMobile, changeUserName } = sortUserMangement(
    (state) => state.actions
  );

  useEffect(() => {
    changeMobile(watch("mobile"));
  }, [watch("mobile")]);

  useEffect(() => {
    changeUserName(watch("userName"));
  }, [watch("userName")]);

  return (
    <div className="BoxTiels bg-white mt-2 rounded-3 px-4 unload m-3 mt-3 ">
      <div className="text-dark   font-sm-3 font-md-5 rtl d-flex justify-content-between align-items-center">
        <div> مرتب سازی</div>
      </div>
      <div className="row mt-lg-2 justify-content-end">
        <div className="col-md-6 col-lg-4 col-12 mt-3 ">
          <InputWithLabel
            label="  شماره تلفن      "
            labelclass="Input-Label-top text-muted font-sm-2"
            inputclass="font-sm-3 py-4-5 "
            autoComplete="off"
            type="text"
            validation={register("mobile")}
            value={""}
          />
        </div>
        <div className="col-md-6 col-lg-4 col-12 mt-3">
          <InputWithLabel
            label="  نام کاربری     "
            labelclass="Input-Label-top text-muted font-sm-2"
            inputclass="font-sm-3 py-4-5 "
            autoComplete="off"
            type="text"
            validation={register("userName")}
            value={""}
          />
        </div>
      </div>
    </div>
  );
};

export default SortEngine;
