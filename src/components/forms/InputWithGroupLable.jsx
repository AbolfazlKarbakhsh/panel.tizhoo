import React, { useState } from 'react';
import { FaEyeSlash } from 'react-icons/fa';
import { IoEyeSharp } from "react-icons/io5";
const InputWithGroupLable = ({ label, type = 'text', id, inputclass = '', labelclass = '', validation = ''
    , placeholder = '', value = '', autoComplete = '' }) => {
        const [password, setpassword] = useState(true);
        const helperPass = () => {
            setpassword(v => !v)
        }
    return (
            <div class="input-group mb-3 position-relative">
                {
                    label && (<label className={`form-label z-10  ${labelclass}`} htmlFor={id}>{label}</label>)
                }
                <div class="input-group-prepend">
                    <span class="input-group-text lable_input" id={id}  onClick={helperPass}> {!password ? <IoEyeSharp /> : <FaEyeSlash />} </span>
                </div>
                <input
                    type={password ? 'password' : 'text'}
                    className={`form-control form-control-lg   ${inputclass}`}
                    id={id} placeholder={placeholder}
                    {...validation}
                    defaultValue={value}
                    autoComplete={autoComplete}

                />
            </div>
    );
}

export default InputWithGroupLable;
