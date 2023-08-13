export const myReducer = (state, action) => {
    state = state + " " + action
    return state
}
export const crudReducer = (state, action) => {
    switch (action.type) {
        case 'add': {
            state.push(action.obj)
            return state
        }
        case 'delete': {
            state.splice(action.index, 1)
            return state
        }
        case 'edit': {
            state.splice(action.index, 1)
            return state
        }
        default: {
            return state
        }
    }
}