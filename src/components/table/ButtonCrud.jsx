import React from 'react';

const ButtonCrud = ({onClick = () => {} , name = '' , icon = ''}) => {
    return (
        <button
            className={`btn  btn-global mx-2  my-md-0 px-2  font3 centerAll`}
            onClick={onClick}
        >
            <span className="font1 me-1" > {name} </span>
            <span
                className=" font5 ct mx-1"
                style={{ marginTop: "-4px" }}
            >
                {icon}
            </span>
        </button>
    );
}

export default ButtonCrud;
