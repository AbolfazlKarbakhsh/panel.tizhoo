import React from 'react';

const SelectBox = ({ label, id, inputclass = '', labelclass = '', validation = '', autoComplete = '', loop , selectedItem  }) => {
    return (
        <div className='position-relative'>
            {
                label && (<label className={`form-label  ${labelclass}`} htmlFor={id}>{label}</label>)
            }
            <select
                class={`form-control form-control-lg  Fvazir  ${inputclass}`}
                id={id} 
                {...validation}
                autoComplete={autoComplete}
                defaultValue={selectedItem ? selectedItem : "none"}
            >
                <option value={"none"}  className='Fvazir  disabled' disabled > انتخاب کنید</option>
                {loop.map((e) => {
                    return (
                        <option value={e.id} className='Fvazir' key={e.title + e.id}>  {e.title}</option>
                    )
                })}
            </select>
        </div>
    );
}

export default SelectBox;
