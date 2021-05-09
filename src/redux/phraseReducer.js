import * as firebase from "firebase";

const PHRASE_SET = "PHRASE_SET"
const CHANGED_PHRASE_ROW = "CHANGED_PHRASE_ROW"
const SET_PHRASE_INITIAL_STATE = "SET_PHRASE_INITIAL_STATE"

let initialState = {
    dataLoaded: false,
    cols: "",
    rows: ""
}

export let phraseReducer = (state = initialState, action) => {
    switch (action.type) {
        case PHRASE_SET:
            return {...state, ...action.payload}
        case CHANGED_PHRASE_ROW:
            let newRowsArray = state.rows.filter((elem,index)=>index !== parseInt(action.previousNumber) - 1)
            newRowsArray.splice(action.newNumber-1, 0, action.payload )
            return {...state, rows: newRowsArray}
        case SET_PHRASE_INITIAL_STATE:
            return initialState
        default :
            return state
    }
}

export const addPhrasesToStateAC = (payload) => ({type: PHRASE_SET, payload: payload,})

export const addChangedPhrasesRowAC = (previousNumber, newNumber, payload) => (
    {
        type: CHANGED_PHRASE_ROW,
        previousNumber: previousNumber,
        newNumber: newNumber,
        payload: payload,
    })

export const setPhrasesToInitialStateAC = () => ({type: SET_PHRASE_INITIAL_STATE})







