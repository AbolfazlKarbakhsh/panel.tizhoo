import React, { useEffect, useState } from "react";
import InputWithLabel from "@components/forms/input";
import ErrorText from "@components/forms/errorText";
import { Controller, useForm } from "react-hook-form";
import { useAppContext } from "@context/AppContext";
import SelectBox from "@components/forms/SelectBox";
import Spacer from "@components/global/spacer";
import { useQueryClient } from "@tanstack/react-query";
import { DatePicker } from "zaman";
import MultipleSelectChip_Mui from "./multiSelect";
import useGetDataParams from "@hooks/useGetDataParams";
import CActiveTab from "@store/pishro/another/navs";

const TestModal = ({ confirm, handleClose, BtnConfirm }) => {
  const {
    register,
    watch,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const { editState } = useAppContext();
  const ActiveTab = CActiveTab((state) => state.data);
  const [BafActive, setBafActive] = useState(0);

  const HandelCofirm = (data) => {
    confirm({
      ...data,
      type: ActiveTab,
      testDetails: data.lessons,
      id: editState?.id,
    });

    editState != 'add' && handleClose();
  };
  const client = useQueryClient();
  const province = watch("provinceId");

  const [citysData] = useGetDataParams(
    [
      {
        paramUrl: "provinceId",
        paramKey:
          province != undefined && province != ""
            ? province
            : editState.provinceId,
      },
    ],
    "CityProvince/city",
    "City_Get_Modal_studnent"
  );
  useEffect(() => {
    if (
      editState.baseAndFieldId != null &&
      editState.baseAndFieldId != undefined
    ) {
      setBafActive((i) => editState.baseAndFieldId);
    }
  }, [editState.baseAndFieldId]);

  useEffect(() => {
    if (watch("baseAndFieldId") != undefined) {
      setBafActive(watch("baseAndFieldId"));
    }
  }, [watch("baseAndFieldId")]);


  return (
    <form onSubmit={handleSubmit(HandelCofirm)}>
      <div className="my-3 ">
        {/* //NormalFeilds */}
        <div>
          <InputWithLabel
            label=" نام آزمون  "
            labelclass="Input-Label-top text-muted font-sm-2"
            inputclass="font-sm-3 py-4-5 "
            autoComplete="off"
            validation={register("name", { required: true })}
            value={editState.name}
          />

          {errors.name && <ErrorText value="لطفا یک مقدار وارد کنید" />}

          <Spacer sp="my-4" />

          <InputWithLabel
            label={
              ActiveTab == 3 || ActiveTab == 4 ? "توضیحات" : " مرحله آزمون   "
            }
            labelclass="Input-Label-top text-muted font-sm-2"
            inputclass="font-sm-3 py-4-5 "
            autoComplete="off"
            validation={register("description", { required: true })}
            value={editState.description}
          />

          {errors.description && <ErrorText value="لطفا یک مقدار وارد کنید" />}

          <Spacer sp="my-4" />

          {(ActiveTab == 3 || ActiveTab == 4) && (
            <>
              <SelectBox
                label="پایه و رشته "
                labelclass="Input-Label-top text-muted font-sm-2"
                inputclass="font-sm-3  my-3 py-4-5"
                autoComplete="off"
                validation={register("baseAndFieldId", {
                  required: "لطفا یک مقدار انتخاب کنید",
                })}
                loop={
                  client.getQueryData(["baseAndField_Get_Modal_Lesson"]) || []
                }
                selectedItem={editState.baseAndFieldId}
              />
              {errors.baseAndFieldId && (
                <ErrorText value="لطفا یک مقدار وارد کنید" />
              )}
            </>
          )}
          <Spacer sp="my-4" />
        </div>

   
        {ActiveTab == 4 || ActiveTab == 3 ? (
          BafActive != 0 && <MultipleSelectChip_Mui
          baf={BafActive}
          control={control}
          register={register}
          errors={errors}
          editState={editState}
        />
        ) : (
          <MultipleSelectChip_Mui
            baf={0}
            control={control}
            register={register}
            errors={errors}
            editState={editState}
          />
        )}
        <Spacer sp="my-4" />

        {/* //province and city  */}
        {(
          (ActiveTab == 3 || ActiveTab == 4) && (
            <div>
              <SelectBox
                label=" استان "
                labelclass="Input-Label-top text-muted font-sm-2"
                inputclass="font-sm-3 py-4-5 "
                autoComplete="off"
                validation={register("provinceId", {
                  required: "لطفا یک مقدار انتخاب کنید",
                })}
                loop={
                  client.getQueryData(["CityProvince_Get_Modal_studnet"]) || []
                }
                selectedItem={editState.provinceId || ""}
                Api="name"
              />
              {errors.provinceId && (
                <ErrorText value="لطفا یک مقدار انتخاب  کنید" />
              )}

              <Spacer sp="my-4" />
              {citysData ? (
                <>
                  <SelectBox
                    label=" شهرستان "
                    labelclass="Input-Label-top text-muted font-sm-2"
                    inputclass="font-sm-3  my-3 py-4-5"
                    autoComplete="off"
                    validation={register("cityId", {
                      required: "لطفا یک مقدار انتخاب کنید",
                    })}
                    loop={citysData || []}
                    selectedItem={editState.cityId || ""}
                    Api="name"
                  />
                  {errors.cityId && (
                    <ErrorText value="لطفا یک مقدار انتخاب  کنید" />
                  )}
                  <Spacer />
                </>
              ) : (
                ""
              )}
            </div>
          ))}

        <Spacer sp="my-4" />

        <div className="d-flex justify-content-between ">
          <div>
            <label htmlFor="" className="text-dark  mb-1 font2">
              {" "}
              ثبت نام آزمون
            </label>
            <Controller
              name="registerDate"
              control={control}
              rules={{ required: "لطفا یک مقدار انتخاب کنید" }}
              defaultValue={editState.registerDate}
              render={({ field }) => (
                <DatePicker
                  onChange={(e) => field.onChange(e.value.toJSON())}
                  className="zaman-config"
                  inputAttributes={{ dir: "ltr", name: "registerDate" }}
                  inputClass="form-control font3 py-2"
                  defaultValue={editState.registerDate}
                />
              )}
            />
            {errors.registerDate && (
              <ErrorText value="لطفا یک مقدار انتخاب کنید" />
            )}
          </div>
          <div className="mx-3">
            <label htmlFor="" className="text-dark mb-1 font2">
              {" "}
              شروع آزمون
            </label>
            <Controller
              name="startDate"
              control={control}
              rules={{ required: "لطفا یک مقدار انتخاب کنید" }}
              defaultValue={editState.startDate}
              render={({ field }) => (
                <DatePicker
                  onChange={(e) => field.onChange(e.value.toJSON())}
                  className="zaman-config"
                  inputAttributes={{ dir: "ltr", name: "startDate" }}
                  inputClass="form-control font3 py-2"
                  defaultValue={editState.startDate}
                />
              )}
            />
            {errors.startDate && (
              <ErrorText value="لطفا یک مقدار انتخاب کنید" />
            )}
          </div>
          <div>
            <label htmlFor="" className="text-dark mb-1 font2">
              {" "}
              پایان آزمون
            </label>

            <Controller
              name="expireDate"
              control={control}
              rules={{ required: "لطفا یک مقدار انتخاب کنید" }}
              defaultValue={editState.expireDate}
              render={({ field }) => (
                <DatePicker
                  onChange={(e) => field.onChange(e.value.toJSON())}
                  className="zaman-config"
                  inputAttributes={{
                    dir: "ltr",
                    name: "expireDate",
                    value: editState.expireDate,
                  }}
                  inputClass="form-control font3 py-2"
                  defaultValue={editState.expireDate}
                  rangeValue={editState.expireDate || null}
                />
              )}
            />
            {errors.expireDate && (
              <ErrorText value="لطفا یک مقدار انتخاب کنید" />
            )}
          </div>
        </div>
      </div>

      <dir className="d-flex justify-content-end">
        <div
          className="btn btn-secondary font-sm-2 font-md-3 "
          style={{ fontWeight: "200" }}
          onClick={handleClose}
        >
          انصراف
        </div>
        <button
          className="btn btn-brand mx-2 font-sm-2 font-md-3 "
          style={{ fontWeight: "200" }}
          type="submit"
        >
          {BtnConfirm}
        </button>
      </dir>
    </form>
  );
};

export default TestModal;
