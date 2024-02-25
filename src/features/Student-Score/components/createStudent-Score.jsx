import React from 'react';
import InputWithLabel from "@components/forms/input";
import ErrorText from '@components/forms/errorText';
import { useForm } from 'react-hook-form';
import { useAppContext } from "@context/AppContext";
import SelectBox from '@components/forms/SelectBox';
import Spacer from '@components/global/spacer';
import { useQueryClient } from '@tanstack/react-query';
import { useParams } from 'react-router';
import useGetDataParams from '@hooks/useGetDataParams';

const CreateStudentScore = ({ confirm, handleClose, BtnConfirm }) => {
    const { register, handleSubmit, formState: { errors }  } = useForm()
    const { editState } = useAppContext()
    const param = useParams()
    const HandelCofirm = (data) => {
        const newData = { ...data, studentId: param.id }
        confirm(newData)
        handleClose()
    }
    const client = useQueryClient()

    // const Baf_Feild = watch("baseAndFieldId")

    const [LessonsData] = useGetDataParams(
        [{ paramUrl: 'baseAndFieldId', paramKey:  param.baf }],
        "Lesson/selectList",
        "Leson_Get_Modal_studnentScore"
    )


    return (
        <form onSubmit={handleSubmit(HandelCofirm)}>
            <div className="my-3">

                <InputWithLabel
                    label=" نمره"
                    labelclass="Input-Label-top text-muted font-sm-2"
                    inputclass="font-sm-3 py-4-5 "
                    autoComplete='off'
                    validation={register('score', { required: true })}
                    value={editState.score}
                />

                {errors.name && <ErrorText value="لطفا یک مقدار وارد کنید" />}
                <Spacer sp="my-4" />
                

                {/* <SelectBox
                    label=" پایه و رشته "
                    labelclass="Input-Label-top text-muted font-sm-2"
                    inputclass="font-sm-3  my-3 py-4-5"
                    autoComplete='off'
                    validation={register('baseAndFieldId', { required: "لطفا یک مقدار انتخاب کنید", })}
                    loop={client.getQueryData(['baseAndField_Get_Modal_studnetScore']) || []}
                    selectedItem={param.baf || ''}
                />
                {errors.baseAndFieldId && <ErrorText value="لطفا یک مقدار وارد کنید" />}
                <Spacer /> */}

                
                <SelectBox
                    label=" دروس "
                    labelclass="Input-Label-top text-muted font-sm-2"
                    inputclass="font-sm-3  my-3 py-4-5"
                    autoComplete='off'
                    validation={register('lessonId', { required: "لطفا یک مقدار انتخاب کنید", })}
                    loop={LessonsData || []}
                    selectedItem={editState.lessonId}
                    Api="name"
                />
                {errors.lessonId && <ErrorText value="لطفا یک مقدار وارد کنید" />}
                <Spacer />


                <SelectBox
                    label=" آزمون "
                    labelclass="Input-Label-top text-muted font-sm-2"
                    inputclass="font-sm-3  my-3 py-4-5"
                    autoComplete='off'
                    validation={register('testId', { required: "لطفا یک مقدار انتخاب کنید", })}
                    loop={client.getQueryData(['Test_Get_Modal_studnetScore']) || []}
                    selectedItem={editState.testId}
                    Api="name"
                />
                {errors.testId && <ErrorText value="لطفا یک مقدار وارد کنید" />}
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

export default CreateStudentScore;
