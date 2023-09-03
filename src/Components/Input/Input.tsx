import React from 'react';

type InputProps = {
    value: number;
    onChange: (newValue: number) => void;
};

export const Input = (props: InputProps) => {
    const handleInputChange  = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = parseInt(event.currentTarget.value)
        if (!isNaN(newValue)) {
            props.onChange(newValue);
        }
    }
    return <div>
        <input type="number" value={props.value} onChange={handleInputChange}/>
    </div>
}