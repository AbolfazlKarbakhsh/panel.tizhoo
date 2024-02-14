import React from 'react';
import InputWithLabel from "@components/forms/input";
import ErrorText from '@components/forms/errorText';
import { useForm } from 'react-hook-form';
import { useAppContext } from "@context/AppContext";

const CreateAcademys = ({ confirm, handleClose }) => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const {editState } = useAppContext()
    const HandelCofirm = (data) => {
        confirm(data)
        handleClose()
    }
    return (
        <form onSubmit={handleSubmit(HandelCofirm)}>
            <div className="my-3">
                <InputWithLabel
                    label=" نام آموزشگاه  "
                    labelclass="Input-Label-top text-muted font-sm-2"
                    inputclass="font-sm-3 py-4-5 "
                    autoComplete='off'
                    validation={register('title', { required: true })}
                    value={editState}
                />
                {errors.title && <ErrorText value="لطفا یک مقدار وارد کنید" />}

            </div>

            <dir className="d-flex justify-content-end">
                <div className="btn btn-secondary font-sm-2 font-md-3 " style={{ fontWeight: "200" }} onClick={handleClose}>
                    انصراف
                </div>
                <button className="btn btn-brand mx-2 font-sm-2 font-md-3 " style={{ fontWeight: "200" }}  type='submit'>
                    افزودن
                </button>
            </dir>
        </form>
    );
}

export default CreateAcademys;
