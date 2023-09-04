import React, {useEffect, useState} from 'react';
import {Counter} from './Components/Counter/Counter';
import './App.css';
import {Settings} from './Components/Settings/Settings';

export function App() {
//=============below counting=============
    const [count, setCount] = useState(() => {
        return Number(localStorage.getItem('counterValue')) || 0
    });

    const increment = () => {
        if (count < maxValue) {
            setCount(count + 1)
        }
    }
    const reset = () => {
        setCount(minValue)
        localStorage.clear()
    }
    //=============below max Value=============
    const [maxValue, setMaxValue] = useState(() => {
        return Number(localStorage.getItem('maxValue')) || 0
    });
    const [minValue, setMinValue] = useState(() => {
        return Number(localStorage.getItem('minValue')) || 0
    });

    const handleMaxValueChange = (newValue: number) => {
        setMaxValue(newValue)
        localStorage.setItem('maxValue', newValue.toString());
    }
    const handleMinValueChange = (newValue: number) => {
        setMinValue(newValue)
        localStorage.setItem('minValue', newValue.toString());
    }



    const buttonHandler = () => {
        /*setCount(minValue)
        localStorage.setItem('counterValue', minValue.toString());*/

    }


    return (
        <div className="App">
            <Settings maxValue={maxValue}
                      minValue={minValue}
                      maxChange={handleMaxValueChange}
                      minChange={handleMinValueChange}
                      buttonHandler={buttonHandler}/>

            <Counter increment={increment}
                     maxValue={maxValue}
                     minValue={minValue}
                     count={count}
                     reset={reset}


                />
        </div>
    );
}


/*useEffect(() => {
        localStorage.setItem('maxValue', JSON.stringify(value))
    }, [value])
    useEffect(() => {
        let maxValueAsString = localStorage.getItem('maxValue')
        if (maxValueAsString !== null) {
            let newMaxValue = JSON.parse(maxValueAsString)
            setCount(newMaxValue)
        }
    }, [])*/


/* useEffect(() => {
    localStorage.setItem('counterValue', JSON.stringify(count))
}, [count])

useEffect(() => {
    let countAsString = localStorage.getItem('counterValue')
    if (countAsString !== null) {
        let newValue = JSON.parse(countAsString)
        setCount(newValue)
    }
}, [])*/


/*let maxValue = parseFloat(value.toString())
setValue(maxValue)
let minValue = parseFloat(value.toString())
setValue(minValue)*/

/*const inputMaxHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(parseInt(event.currentTarget.value))
}*/
//=============below min Value=============
/* const [minValue, setMinValue] = useState(() => {
     return Number(localStorage.getItem('minValue')) || 0
 });
 useEffect(() => {
     localStorage.setItem('minValue', JSON.stringify(minValue))
 }, [minValue])
 useEffect(() => {
     let minValueAsString = localStorage.getItem('minValue')
     if (minValueAsString !== null) {
         let newMinValue = JSON.parse(minValueAsString)
         setCount(newMinValue)
     }
 }, [])
 const inputMinHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
     setMinValue(parseInt(event.currentTarget.value))
 }
*/



