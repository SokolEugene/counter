import React from 'react'
import s from './Counter.module.css'
import {Button} from '../Button/Button';


type CounterPropsType = {
    increment: () => void
    reset: () => void
    count: number
    maxValue: number

}
export const Counter = (props: CounterPropsType) => {


    return (
        <div className={s.counter}>
            <h3>Counter</h3>
            <div className={props.count === props.maxValue ? `${s.red}` : `${s.resultCounting}`}>{props.count}</div>
            <div className={s.buttonSection}><Button callBack={props.increment} disable={props.count >= props.maxValue} buttonName={'Inc'}/>
                <Button callBack={props.reset} buttonName={'Res'}/></div>


        </div>
    )
}


































/*import React, {useEffect, useState} from 'react';

export const Counter = () => {

    const [value, setValue] = useState(()=>{
        return Number(localStorage.getItem('counterValue')) || 0
    })

    useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify(value))
    }, [value])

    useEffect(() => {
        getFromLocalStorageHandler()
    }, [])
    const incHandler = () => {
        setValue(value + 1)
        // localStorage.setItem('counterValue', JSON.stringify(value))
    }
    /!* const setToLocalStorageHandler = () => {
         localStorage.setItem('counterValue', JSON.stringify(value))
     }*!/
    const getFromLocalStorageHandler = () => {

        let valueAsString = localStorage.getItem('counterValue')
        if (valueAsString !== null) {
            let newValue = JSON.parse(valueAsString)
            setValue(newValue)
        }


    }
    const clearLSHandler = () => {
        localStorage.clear()
        setValue(0)
    }
    /!*const removeItemLSHandler = () => {
        localStorage.removeItem('counterValue + 1')
    }*!/
    return (
        <div>
            <h1>{value}</h1>
            <button onClick={incHandler}>increment</button>
            {/!*<button onClick={getFromLocalStorageHandler}>getFromLocalStorage</button>*!/}
            <button onClick={clearLSHandler}>clearLS</button>
            {/!*<button onClick={removeItemLSHandler}>removeItemLS</button>*!/}
        </div>
    );
};*/


/*
import React, {useState} from 'react'
import s from './Counter.module.css'

export const Counter: React.FC = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        if (count < 5) {
            setCount(count + 1)
        }
    }
    const reset = () => {
        setCount(0)
    }

    return (
        <div>
            <h1>Counter</h1>
            <div  className={count === 5 ? `${s.red}` : `${s.resultCounting}`}>{count}</div>
            <button className={count === 5 ? `${s.disabled}` : `${s.button}`} onClick={increment}>+1</button>
            <button className={count === 0 ? `${s.disabled}` : `${s.button}`} onClick={reset}>Reset</button>

        </div>
    )
}

*/


//======================================================================================================================
//

