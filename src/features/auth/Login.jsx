import React from 'react';
import LoginMain from './LoginMain';
import { httpService } from '@core/http-service';
import { redirect } from 'react-router';

const Login = () => {

    return (
        <>
            <LoginMain />
        </>
    );
}


export const loginAction = async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData)
    const respanse = await httpService.post('/login', data)
     if(respanse.status === 200){
        localStorage.setItem('t_a#@$sdf_k' , respanse?.data.token)
            return redirect('/')
     }
}



export default Login;
