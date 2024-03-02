import React from 'react'
import SelectBox from '@components/forms/SelectBox';
import Spacer from '@components/global/spacer';
import ErrorText from '@components/forms/errorText';
import { useForm } from 'react-hook-form';
import { useQueryClient } from '@tanstack/react-query';

function ReportClass({confirmPdf , closePdf}) {
    const client = useQueryClient()
    const { register, handleSubmit, formState: { errors } } = useForm()
    const HandelCofirm = (data) => {
        confirmPdf(data)
        closePdf()
    }
    return (
        <form onSubmit={handleSubmit(HandelCofirm)}>

            <SelectBox
                label=" آزمون "
                labelclass="Input-Label-top text-muted font-sm-2"
                inputclass="font-sm-3  my-3 py-4-5"
                autoComplete='off'
                validation={register('testId', { required: "لطفا یک مقدار انتخاب کنید", })}
                loop={client.getQueryData(['Test_Get_Modal_studnetScore']) || []}
                selectedItem={''}
                Api="name"
            />
            {errors.testId && <ErrorText value="لطفا یک مقدار وارد کنید" />}
            <Spacer />

            <SelectBox
                label=" درس و پایه "
                labelclass="Input-Label-top text-muted font-sm-2"
                inputclass="font-sm-3  my-3 py-4-5"
                autoComplete='off'
                validation={register('lessonId', { required: "لطفا یک مقدار انتخاب کنید", })}
                loop={client.getQueryData(['Test_Get_Modal_selectListJoin']) || []}
                selectedItem={''}
                Api="name"
            />
            {errors.lessonId && <ErrorText value="لطفا یک مقدار انتخاب کنید" />}
            <Spacer />

            <dir className="d-flex justify-content-end">
                <div className="btn btn-secondary font-sm-2 font-md-3 " style={{ fontWeight: "200" }} onClick={closePdf}>
                    انصراف
                </div>
                <button className="btn btn-brand mx-2 font-sm-2 font-md-3 " style={{ fontWeight: "200" }} type='submit'>
                    چاپ
                </button>
            </dir>
        </form>
    )
}

export default ReportClass