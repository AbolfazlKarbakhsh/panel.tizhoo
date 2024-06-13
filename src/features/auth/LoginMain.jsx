import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Logo from '@assets/images/Logo-green.png'
import InputWithGroupLable from '@components/forms/InputWithGroupLable';
import InputWithLabel from '@components/forms/input';
import LineColor from '@components/global/lineColor';
import Spacer from '@components/global/spacer';
import ErrorText from '@components/forms/errorText';
import useRouterAction from '@hooks/useRouterAction';
import { toast } from 'react-toastify';

const LoginMain = () => {
    const { register, formState: { errors, isValid }, handleSubmit } = useForm()
    const { onSubmit, isSubmiting, routeErrors } = useRouterAction(false);
    useEffect(() => {
        toast.error(routeErrors?.response?.data?.result?.message, {
            position: "top-left"
        });
    }, [routeErrors ]);



    return (
        <form className='centerAll ' onSubmit={handleSubmit(onSubmit)}>
            <div className='pt-5 w-320 h-100' >
                <div className="card border-0">
                    <div className="card-body " style={{ backgroundColor: '#fff' }}>

                        <div className="centerAll">
                            <img src={Logo} alt="Tizhoo" className='img-fluid' style={{ width: '90px' }} />
                        </div>

                        <h1 className='mt-3 font-sm-6  font-md-7 text-center'>پلتفرم  مدیریت کارنامه </h1>

                        <p className='lead font-sm-2 font-md-2 text-center px-1 pt-2'>
                            جهت ورود لازم است از طریق نام کاربری و رمز عبور خود اقدام نمایید
                        </p>


                        <LineColor />


                        <Spacer sp="mt-4-5 pt-4" />


                        <InputWithLabel
                            label="نام کاربری "
                            labelclass="Input-Label-top text-muted font-sm-2"
                            inputclass="font-sm-3 py-4-5 text-left-important"
                            validation={register('userName', { required: true })}
                            autoComplete = 'off'
                        />
                        {errors.userName && <ErrorText value="لطفا یک مقدار وارد کنید" />}



                        <Spacer sp="mt-4-5" />


                        <InputWithGroupLable
                            label="گذرواژه  "
                            labelclass="Input-Label-top text-muted font-sm-2"
                            inputclass="font-sm-3 py-4-5 text-left-important"
                            validation={register('password', { required: true })}
                            autoComplete = 'off'

                        />
                        {errors.password && <ErrorText value="لطفا یک مقدار وارد کنید" />}


                        <Spacer sp="mt-5 " />

                        <div className="d-grid">
                            <button className={`btn ${isValid ? 'btn-brand' : ' btn-secondary disabled'}`}
                                style={{ padding: '.8rem 0px' }}
                                type='submit'
                                disabled={!isValid}
                            >
                                {isSubmiting ? "در حال بارگیری" : 'تایید و ادامه'}
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </form>
    );
}

export default LoginMain;
