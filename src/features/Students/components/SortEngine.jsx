import React, { useEffect } from 'react';
import SelectBox from '@components/forms/SelectBox';
import InputWithLabel from "@components/forms/input";
import ButtonCrud from '@components/table/ButtonCrud';
import { useForm } from 'react-hook-form';
import { useQueryClient } from '@tanstack/react-query';
import { useStudentContext } from "@context/Students/StudentContext";
import { TbReport } from 'react-icons/tb';

const SortEngine = ({h_ReportAll}) => {
    const { register, watch } = useForm()
    const client = useQueryClient()
    const { dispatchSortStudent } = useStudentContext()

    useEffect(() => {
        dispatchSortStudent({ type: "ChangeMobile", mobile: watch('mobile') })
    }, [watch('mobile')]);

    useEffect(() => {
        dispatchSortStudent({ type: "ChangeBAF", baseAndFieldId: watch('baseAndField') })
    }, [watch('baseAndField')]);

    useEffect(() => {
        dispatchSortStudent({ type: "ChangeAccademy", schoolId: watch('schoolId') })
    }, [watch('schoolId')]);



    return (
        <div className="BoxTiels bg-white mt-2 rounded-3 px-4 unload m-3 mt-3 ">
            <div className='text-dark   font-sm-3 font-md-5 rtl d-flex justify-content-between align-content-center' >
               <div> مرتب سازی</div>
               <ButtonCrud name=" چاپ کارنامه گروهی " icon={<TbReport />} onClick={h_ReportAll}/>
            </div>
            <div className='row mt-lg-2 justify-content-end'>

                <div className="col-md-6 col-lg-4 col-12 mt-3">
                    <SelectBox
                        label=" آموزشگاه   "
                        labelclass="Input-Label-top text-muted font-sm-2"
                        inputclass="font-sm-3   py-4-5 rtl"
                        autoComplete='off'
                        validation={register('schoolId')}
                        loop={client.getQueryData(['school_Get_Modal_studnet']) || []}
                        selectedItem={''}
                        NoChoise={true}
                    />
                </div>

                <div className="col-md-6 col-lg-4 col-12 mt-3 " >
                    <SelectBox
                        label=" پایه و رشته   "
                        labelclass="Input-Label-top text-muted font-sm-2"
                        inputclass="font-sm-3   py-4-5 rtl"
                        autoComplete='off'
                        validation={register('baseAndField')}
                        loop={client.getQueryData(['baseAndField_Get_Modal_studnet']) || []}
                        selectedItem={''}
                        NoChoise={true}
                    />
                </div>

                <div className="col-md-6 col-lg-4 col-12 mt-3">
                    <InputWithLabel
                        label="  شماره موبایل    "
                        labelclass="Input-Label-top text-muted font-sm-2"
                        inputclass="font-sm-3 py-4-5 "
                        autoComplete='off'
                        type="text"
                        validation={register('mobile')}
                        value={''}
                   
                    />
                </div>
            </div>
        </div>
    );
}

export default SortEngine;
