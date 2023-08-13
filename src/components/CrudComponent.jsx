import React, { useReducer } from 'react'
import { crudReducer } from './Reducer'

const CrudComponent = () => {
    const [state, dispatch] = useReducer(crudReducer, [])
    return (
        <div>
            {console.log(state)}
            <button onClick={() => dispatch({ type: 'add', obj: { name: 'Mehul', lastName: 'Waghela' } })}>ADD</button>
            <button onClick={() => dispatch({ type: 'delete', index: 0 })}>DELETE</button>
            <button onClick={() => dispatch({ type: 'edit', index: 0 })}>EDIT</button>
        </div>
    )
}

export default CrudComponent