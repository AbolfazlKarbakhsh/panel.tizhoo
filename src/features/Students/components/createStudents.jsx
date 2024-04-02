import React, { useEffect, useRef } from 'react';
import InputWithLabel from "@components/forms/input";
import SelectBox from '@components/forms/SelectBox';
import Spacer from '@components/global/spacer';
import ErrorText from '@components/forms/errorText';
import { useForm } from 'react-hook-form';
import { useAppContext } from "@context/AppContext";
import { useQueryClient } from '@tanstack/react-query';
import LineColor from '@components/global/lineColor';
import useGetDataParams from '@hooks/useGetDataParams';
import { useStudentAcademyData } from '@store/pishro/student/studentStore';


const CreateStudents = ({ confirm, handleClose, BtnConfirm, stateCrud }) => {

    const { register, handleSubmit, formState: { errors }, watch } = useForm()
    

    // edit modal sefualt values
    const { editState } = useAppContext()
    const client = useQueryClient()


    // modal before data and Save
    const { school, classStudent } = useStudentAcademyData(state => state.data);
    const { changeSchool, changeClass } = useStudentAcademyData(state => state.actions);
    useEffect(() => {
        (watch("schoolId") != "") && changeSchool(watch("schoolId"));
        (watch("classId") != "") && changeClass(watch("classId"));
    }, [watch("schoolId"), watch("classId")]);



    // submit and save  form in server
    const saveBtn = useRef()
    const HandelCofirm = (data) => {
        confirm(data);
        editState.length == undefined && handleClose();
    }
    document.addEventListener("keyup" , (e) => {
        if( e.ctrlKey && e.key === "q" ) {
           saveBtn.current.click()
        }
    })


    // classes get data 
    const schoolParm = watch("schoolId")

    const [ClasesData] = useGetDataParams(
        [{ paramUrl: 'schoolId', paramKey: (schoolParm != undefined && schoolParm != '') ? schoolParm : (editState.schoolId || school) }],
        "ClassRome/SelectList",
        "schoolParm_Get_Modal_studnent"
    )


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
                        validation={register('firstName', { required: true })}
                        value={editState.firstName || ''}
                    />
                    {errors.firstName && <ErrorText value="لطفا یک مقدار وارد کنید" />}
                    <Spacer sp="my-4" />


                    <InputWithLabel
                        label=" نام خانوادگی   "
                        labelclass="Input-Label-top text-muted font-sm-2"
                        inputclass="font-sm-3 py-4-5 "
                        autoComplete='off'
                        validation={register('lastName', { required: true })}
                        value={editState.lastName || ''}
                    />
                    {errors.lastName && <ErrorText value="لطفا یک مقدار وارد کنید" />}
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


                    <InputWithLabel
                        label="  کد ملی    "
                        labelclass="Input-Label-top text-muted font-sm-2"
                        inputclass="font-sm-3 py-4-5 "
                        autoComplete='off'
                        type="text"
                        validation={register('nationalCode', { required: "لطفا یک مقدار وارد کنید", minLength: 10, maxLength: 10 })}
                        value={editState.nationalCode || ''}

                    />
                    {errors.nationalCode && <ErrorText value=" کد ملی  وارد شده صحیح نمی باشد  " />}
                    <Spacer sp="my-4" />
                </section>

                <LineColor />

                {/* select list  */}
                <SelectBox
                    label=" آموزشگاه   "
                    labelclass="Input-Label-top text-muted font-sm-2"
                    inputclass="font-sm-3  my-3 py-4-5"
                    autoComplete='off'
                    validation={register('schoolId', { required: "لطفا یک مقدار انتخاب کنید", })}
                    loop={client.getQueryData(['school_Get_Modal_studnet']) || []}
                    selectedItem={editState.schoolId || school}
                />
                {errors.schoolId && <ErrorText value="لطفا یک مقدار انتخاب  کنید" />}
                <Spacer />


                <SelectBox
                    label=" کلاس "
                    labelclass="Input-Label-top text-muted font-sm-2"
                    inputclass="font-sm-3  my-3 py-4-5"
                    autoComplete='off'
                    validation={register('classId', { required: "لطفا یک مقدار انتخاب کنید", })}
                    loop={ ClasesData || []}
                    selectedItem={editState.classId || classStudent}
                />
                {errors.classId && <ErrorText value="لطفا یک مقدار انتخاب  کنید" />}
                <Spacer />



                {
                    stateCrud == "add" && (
                        <>
                            <LineColor />

                            <InputWithLabel
                                label=" پسورد   "
                                labelclass="Input-Label-top text-muted font-sm-2"
                                inputclass="font-sm-3 py-4-5 "
                                autoComplete='off'
                                validation={register('Password', { required: true })}
                                value={'Aa123'}
                            />
                            {errors.Password && <ErrorText value=" پسورد وارد شده صحیح نمی باشد " />}
                            <Spacer sp="my-4" />


                            <InputWithLabel
                                label=" تکرار پسورد "
                                labelclass="Input-Label-top text-muted font-sm-2"
                                inputclass="font-sm-3 py-4-5 "
                                autoComplete='off'
                                validation={register('RePassword', {
                                    required: true, validate: value => {
                                        if (value !== watch('Password')) return false
                                    }
                                })}
                                value={'Aa123'}
                            />
                            {errors.RePassword && <ErrorText value=" تکرار پسورد وارد شده صحیح نمی باشد " />}
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

export default CreateStudents;
