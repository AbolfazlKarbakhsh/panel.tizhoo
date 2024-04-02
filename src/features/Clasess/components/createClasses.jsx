import React from 'react';
import InputWithLabel from "@components/forms/input";
import ErrorText from '@components/forms/errorText';
import { useForm } from 'react-hook-form';
import { useAppContext } from "@context/AppContext";
import SelectBox from '@components/forms/SelectBox';
import Spacer from '@components/global/spacer';
import { useQueryClient } from '@tanstack/react-query';


const CreateClasses = ({ confirm, handleClose , BtnConfirm}) => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { editState } = useAppContext()
    const HandelCofirm = (data) => {
        confirm(data)
        handleClose()
    }
    const client = useQueryClient()

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
                    loop={client.getQueryData(['school_Get_Modal_ClassRome'])}
                    selectedItem={editState.schoolId}
                />
                 {errors.schoolId && <ErrorText value="لطفا یک مقدار وارد کنید" />}
                <Spacer />

                <SelectBox
                    label=" پایه و رشته   "
                    labelclass="Input-Label-top text-muted font-sm-2"
                    inputclass="font-sm-3  my-3 py-4-5"
                    autoComplete='off'
                    validation={register('baseAndFieldId', { required: "لطفا یک مقدار انتخاب کنید" , })}
                    loop={client.getQueryData(['baseAndField_Get_Modal_Class']) || ''}
                    selectedItem={editState.baseAndFieldId || ''}
                />
                 {errors.baseAndFieldId && <ErrorText value="لطفا یک مقدار وارد کنید" />}
                <Spacer />

            </div>

            <dir className="d-flex justify-content-end">
                <div className="btn btn-secondary font-sm-2 font-md-3 " style={{ fontWeight: "200" }} onClick={handleClose}>
                    انصراف
                </div>
                <button className="btn btn-brand mx-2 font-sm-2 font-md-3 " style={{ fontWeight: "200" }} type='submit'>
                    {BtnConfirm}
                </button>
            </dir>
        </form>
    );
}

export default CreateClasses;
