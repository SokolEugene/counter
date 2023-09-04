import React from 'react';
import s from './Input.module.css'
type InputProps = {
    value: number
    onChange: (newValue: number) => void;
    name: string
    maxValue: number
    minValue: number
};


export const Input = (props: InputProps) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = parseInt(event.currentTarget.value)
        if (!isNaN(newValue)) {
            props.onChange(newValue);
        }
    }
    return <div>
        <span>{props.name}</span>
        <input className={props.minValue >= props.maxValue || props.minValue < 0 || props.maxValue < 0 ? s.errorInput : s.input} type="number" value={props.value} onChange={handleInputChange}/>
    </div>
}