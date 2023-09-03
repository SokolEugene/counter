import React from 'react';
import s from './Settings.module.css'
import {Input} from '../Input/Input';
import {Button} from '../Button/Button';

export type SettingsPropsType = {
    maxValue: number;
    minValue: number;
    maxChange: (newValue: number) => void;
    minChange: (newValue: number) => void;
}

export const Settings = (props: SettingsPropsType) => {

    return (
        <div className={s.settings}>
           <Input value={props.maxValue} onChange={props.maxChange}/>
           <Input value={props.minValue} onChange={props.minChange}/>
        </div>
    );
};

