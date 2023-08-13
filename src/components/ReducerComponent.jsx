import React, { useReducer } from 'react'
import { myReducer } from './Reducer'

/* in reducer we have state and dispatch available.
State means any data which we store and dispatch is method which we call to take particular work from useReducer.
In state we can store any data and use reducer has two parameter one is reducer function name and 2 nd parameter is data which westore in state.
to use reducer call dispath method with any data. reducer function do work according to data

in  regular practice state is array and we pass from dispatch it is object in which first key is type : which work we want to do from useReducer that is set in object type key and second key is any data which we have to pass do that particular work
and in useReducer function we regular use switch case according to data pass switch case check work and data and do that work and return state*/
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