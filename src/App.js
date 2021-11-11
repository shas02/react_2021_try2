import React from "react";
import './App.css';
import {useSelector, useDispatch} from "react-redux";

const Counter = () => {
    const counter = useSelector((state) => state.counter)


    const dispatch = useDispatch();
    const [value, setValue] = React.useState(10)
    return (
        <div>
            <h1>Counter: {counter}</h1>

            <input type="number" value={value} onChange={({target: {value}}) => {
                setValue(value)
            }
            }/>

            <button onClick={() => {
                dispatch({type: 'INC_CUSTOM', payload: Number(value)})
            }
            }>INC CUSTOM
            </button>

            <button onClick={() => {
                dispatch({type: 'INC'})
            }
            }>INC
            </button>
            <button onClick={() => {
                dispatch({type: 'DEC'})
            }
            }>DEC
            </button>
            <button onClick={() => {
                dispatch({type: 'RESET'})
            }
            }>RESET
            </button>
        </div>

    )
}

function App() {

    const [isOn, setIsOn] = React.useState(true);


    return (
        <div className="App">
            {isOn && <Counter/>}
            <button onClick={() => {
                setIsOn(prev => !prev)
            }
            }>toggle
            </button>
        </div>
    );
}

export default App;