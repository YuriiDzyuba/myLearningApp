import * as firebase from "firebase";

const WORD_SET = "WORD_SET"
const B_B = "B_B"
const C_C = "C_C"

let initialState = {
    dataLoaded: false,
    cols: "",
    rows: ""
}

export let wordsReducer = (state = initialState, action) => {
    switch (action.type) {
        case WORD_SET:
            return {...state,...action.payload}
        case B_B:
            return {...state, password: action.text}
        case C_C:
            return {...state, register: action.text}
        default :
            return state
    }
}

export const addWordsToStateAC = (payload) => ({type: WORD_SET, payload: payload,})

export const bbbbAC = (text) => ({type: B_B, text: text,})

export const ccccAC = () => ({type: C_C,})







