import React, { useReducer } from 'react'
import { myReducer } from './Reducer'

const ReducerComponent = () => {
    let [state, dispatch] = useReducer(myReducer, 'hello')
    return (
        <div>
            <h1>{state}</h1>
            <button onClick={() => dispatch('Mehul')}>Increment Task</button>
        </div>
    )
}

export default ReducerComponent