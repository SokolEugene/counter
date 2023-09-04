import s from './Button.module.css';
import React from 'react';



type ButtonPropsType = {
    callBack: ()=>void
    disable?: boolean
    buttonName: string
}
export const Button = (props:ButtonPropsType) => {
    return (
        <div >
            <button className={props.disable ? `${s.disabled}` : `${s.button}`} onClick={props.callBack}>{props.buttonName}</button>
        </div>
    );
};






