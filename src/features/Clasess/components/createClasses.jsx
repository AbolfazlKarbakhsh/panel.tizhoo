import React from 'react';
import InputWithLabel from "@components/forms/input";
import ErrorText from '@components/forms/errorText';
import { useForm } from 'react-hook-form';
import { useAppContext } from "@context/AppContext";
import SelectBox from '@components/forms/SelectBox';
import Spacer from '@components/global/spacer';
import { useQueryClient } from '@tanstack/react-query';

const CreateClasses = ({ confirm, handleClose }) => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { editState } = useAppContext()
    const HandelCofirm = (data) => {
        confirm(data)
        handleClose()
    }
    const client = useQueryClient()
    console.log(client.getQueriesData('school_Get_Modal')[0][1])
    return (
        <form onSubmit={handleSubmit(HandelCofirm)}>
            <div className="my-3">

                <InputWithLabel
                    label=" نام کلاس  "
                    labelclass="Input-Label-top text-muted font-sm-2"
                    inputclass="font-sm-3 py-4-5 "
                    autoComplete='off'
                    validation={register('title', { required: true })}
                    value={editState.title}
                />

                {errors.title && <ErrorText value="لطفا یک مقدار وارد کنید" />}
                
                <Spacer  sp="my-4"/>

                <SelectBox
                    label=" نام آموزشگاه  "
                    labelclass="Input-Label-top text-muted font-sm-2"
                    inputclass="font-sm-3  my-3 py-4-5"
                    autoComplete='off'
                    validation={register('schoolId', { required: "لطفا یک مقدار انتخاب کنید" , })}
                    loop={client.getQueriesData('school_Get_Modal')[0][1]}
                    selectedItem={editState.schoolId}
                />
                 {errors.schoolId && <ErrorText value="لطفا یک مقدار وارد کنید" />}
                <Spacer />

            </div>

            <dir className="d-flex justify-content-end">
                <div className="btn btn-secondary font-sm-2 font-md-3 " style={{ fontWeight: "200" }} onClick={handleClose}>
                    انصراف
                </div>
                <button className="btn btn-brand mx-2 font-sm-2 font-md-3 " style={{ fontWeight: "200" }} type='submit'>
                    افزودن
                </button>
            </dir>
        </form>
    );
}

export default CreateClasses;
