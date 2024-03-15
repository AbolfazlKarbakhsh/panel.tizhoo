import React from 'react';
import InputWithLabel from "@components/forms/input";
import ErrorText from '@components/forms/errorText';
import { useForm } from 'react-hook-form';
import { useAppContext } from "@context/AppContext";
import useGetDataParams from '@hooks/useGetDataParams';
import { useQueryClient } from '@tanstack/react-query';
import SelectBox from '@components/forms/SelectBox';
import Spacer from '@components/global/spacer';

const CreateAcademys = ({ confirm, handleClose }) => {
    const client = useQueryClient()
    const { register, handleSubmit, formState: { errors }, watch } = useForm()
    const { editState } = useAppContext()
    const province = watch("provinceId")

    const [citysData] = useGetDataParams(
        [{ paramUrl: 'provinceId', paramKey: (province != undefined && province != '') ? province : editState.provinceId }],
        "CityProvince/city",
        "City_Get_Modal_studnent"
    )
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
                    value={editState.title}
                />
                {errors.title && <ErrorText value="لطفا یک مقدار وارد کنید" />}
            </div>


            <SelectBox
                label=" استان "
                labelclass="Input-Label-top text-muted font-sm-2"
                inputclass="font-sm-3 "
                autoComplete='off'
                validation={register('provinceId', { required: "لطفا یک مقدار انتخاب کنید", })}
                loop={client.getQueryData(['CityProvince_Get_Modal_studnet']) || []}
                selectedItem={editState.provinceId || ''}
                Api="name"
            />
            {errors.provinceId && <ErrorText value="لطفا یک مقدار انتخاب  کنید" />}
            <Spacer />


            {
                (citysData) ? (<>
                    <SelectBox
                        label=" شهرستان "
                        labelclass="Input-Label-top text-muted font-sm-2"
                        inputclass="font-sm-3  my-3 py-4-5"
                        autoComplete='off'
                        validation={register('cityId', { required: "لطفا یک مقدار انتخاب کنید", })}
                        loop={citysData || []}
                        selectedItem={editState.cityId || ''}
                        Api="name"
                    />
                    {errors.cityId && <ErrorText value="لطفا یک مقدار انتخاب  کنید" />}
                    <Spacer />

                </>) : ''
            }

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

export default CreateAcademys;
