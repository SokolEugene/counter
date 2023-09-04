import React from 'react';
import s from './Settings.module.css'
import {Input} from '../Input/Input';
import {Button} from '../Button/Button';

export type SettingsPropsType = {
    maxValue: number
    minValue: number
    maxChange: (newValue: number) => void
    minChange: (newValue: number) => void
    buttonHandler: () => void
}

export const Settings = (props: SettingsPropsType) => {


    return (
        <div className={s.settings}>
            <div className={s.inputSection}>
                <Input value={props.maxValue}
                       onChange={props.maxChange}
                       maxValue={props.maxValue}
                       minValue={props.minValue}
                       name={"Max value:"}/>
                <Input value={props.minValue}
                       onChange={props.minChange}
                       maxValue={props.maxValue}
                       minValue={props.minValue}
                       name={"Min value:"}/>
            </div>

            <Button callBack={props.buttonHandler}
                    buttonName={'set'}
                    disable={props.minValue >= props.maxValue || props.minValue < 0 || props.maxValue < 0}/>

        </div>
    );
};




