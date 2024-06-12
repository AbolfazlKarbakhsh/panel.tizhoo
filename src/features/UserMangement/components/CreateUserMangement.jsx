import React, { useEffect, useRef } from 'react';
import InputWithLabel from "@components/forms/input";
import SelectBox from '@components/forms/SelectBox';
import Spacer from '@components/global/spacer';
import ErrorText from '@components/forms/errorText';
import { useForm } from 'react-hook-form';
import { useAppContext } from "@context/AppContext";
import { useQueryClient } from '@tanstack/react-query';
import LineColor from '@components/global/lineColor';

const CreateUserMangement = ({ confirm, handleClose, BtnConfirm, stateCrud }) => {
    const { register, handleSubmit, formState: { errors }, watch } = useForm()



    // edit modal sefualt values
    const { editState } = useAppContext()
    const client = useQueryClient()
    // get role id
    const roles =
        client.getQueryData(["Roles_Get_Modal"]) || 10;


    // submit and save  form in server
    const saveBtn = useRef()
    const HandelCofirm = (data) => {
        confirm({ ...data });
        editState.length == undefined && handleClose();
    }
    document.addEventListener("keyup", (e) => {
        if (e.ctrlKey && e.key === "q") {
            saveBtn.current.click()
        }
    })


    return (
        <form onSubmit={handleSubmit(HandelCofirm)}>
            <div className="my-3">


                {/* inputs  */}
                <section>
                    <InputWithLabel
                        label=" نام   "
                        labelclass="Input-Label-top text-muted font-sm-2"
                        inputclass="font-sm-3 py-4-5 "
                        autoComplete='off'
                        validation={register('firstname', { required: true })}
                        value={editState.firstname || ''}
                    />
                    {errors.firstname && <ErrorText value="لطفا یک مقدار وارد کنید" />}
                    <Spacer sp="my-4" />


                    <InputWithLabel
                        label=" نام خانوادگی   "
                        labelclass="Input-Label-top text-muted font-sm-2"
                        inputclass="font-sm-3 py-4-5 "
                        autoComplete='off'
                        validation={register('lastname', { required: true })}
                        value={editState.lastname || ''}
                    />
                    {errors.lastname && <ErrorText value="لطفا یک مقدار وارد کنید" />}
                    <Spacer sp="my-4" />


                    <InputWithLabel
                        label="  نام کاربری    "
                        labelclass="Input-Label-top text-muted font-sm-2"
                        inputclass="font-sm-3 py-4-5 "
                        autoComplete='off'
                        type="text"
                        validation={register('userName', { required: "لطفا یک مقدار وارد کنید" })}
                        value={editState.userName || ''}

                    />
                    {errors.userName && <ErrorText value="لطفا یک مقدار وارد کنید" />}
                    <Spacer sp="my-4" />


                    <InputWithLabel
                        label="  تلفن    "
                        labelclass="Input-Label-top text-muted font-sm-2"
                        inputclass="font-sm-3 py-4-5 "
                        autoComplete='off'
                        type="text"
                        validation={register('mobile', { required: "لطفا یک مقدار وارد کنید", minLength: 11, maxLength: 11 })}
                        value={editState.mobile || ''}

                    />
                    {errors.mobile && <ErrorText value=" شماره تلفن وارد شده صحیح نمی باشد  " />}
                    <Spacer sp="my-4" />


                    {/* select list  */}
                    <SelectBox
                        label=" سمت   "
                        labelclass="Input-Label-top text-muted font-sm-2"
                        inputclass="font-sm-3  my-3 py-4-5"
                        autoComplete='off'
                        validation={register('roleId', { required: "لطفا یک مقدار انتخاب کنید", })}
                        loop={roles || []}
                        selectedItem={editState.roleId}
                        Api="name"
                    />
                    {errors.roleId && <ErrorText value="لطفا یک مقدار انتخاب  کنید" />}
                    <Spacer />
                </section>
                {
                    stateCrud == "add" && (
                        <>
                            <LineColor />

                            <InputWithLabel
                                label=" پسورد   "
                                labelclass="Input-Label-top text-muted font-sm-2"
                                inputclass="font-sm-3 py-4-5 "
                                autoComplete='off'
                                validation={register('password', { required: true })}
                                value={'Aa123'}
                            />
                            {errors.password && <ErrorText value=" پسورد وارد شده صحیح نمی باشد " />}
                            <Spacer sp="my-4" />


                            <InputWithLabel
                                label=" تکرار پسورد "
                                labelclass="Input-Label-top text-muted font-sm-2"
                                inputclass="font-sm-3 py-4-5 "
                                autoComplete='off'
                                validation={register('rePassword', {
                                    required: true, validate: value => {
                                        if (value !== watch('password')) return false
                                    }
                                })}
                                value={'Aa123'}
                            />
                            {errors.rePassword && <ErrorText value=" تکرار پسورد وارد شده صحیح نمی باشد " />}
                            <Spacer sp="my-4" />
                        </>
                    )
                }


            </div>

            <dir className="d-flex justify-content-end">
                <div className="btn btn-secondary font-sm-2 font-md-3 " style={{ fontWeight: "200" }} onClick={handleClose}>
                    بستن
                </div>
                <button className="btn btn-brand mx-2 font-sm-2 font-md-3 " style={{ fontWeight: "200" }} type='submit' ref={saveBtn}>
                    {BtnConfirm}   ( <code className='text-white'>ctrl + q</code>)
                </button>
            </dir>
        </form>
    );
}

export default CreateUserMangement;
