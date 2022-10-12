import { createStore } from 'redux'

const INITIAL_STATE = {
    step: 0,
    name: ""
}

function counterReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case actions.SET_STEP:
            return { ...state, step: action.payload.step }
        case actions.SET_NAME:
            return { ...state, name: action.payload.name }
        default:
            return state
    }
}

export const actions = {
    SET_STEP: 'set/step',
    SET_NAME: 'set/name'
}

export const store = createStore(counterReducer)

