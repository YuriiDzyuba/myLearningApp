import * as firebase from "firebase";

const SET = "SET"
const CHANGED_ROW = "CHANGED_ROW"
const SET_WORDS_INITIAL_STATE = "SET_WORDS_INITIAL_STATE"

let initialState = {
    dataLoaded: false,
    cols: "",
    rows: ""
}

export let tableReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET:
            console.log("fdfgdfgdgdgdgdgf")
            return {...state, ...action.payload}
        case CHANGED_ROW:
            let newRowsArray = state.rows.filter((elem,index)=>index !== parseInt(action.previousNumber) - 1)
            newRowsArray.splice(action.newNumber-1, 0, action.payload )
            return {...state, rows: newRowsArray}
        case SET_WORDS_INITIAL_STATE:
            return initialState
        default :
            return state
    }
}

export const addToState = (payload) => ({type: SET, payload: payload,})

export const addChangedRowAC = (previousNumber, newNumber, payload) => (
    {
        type: CHANGED_ROW,
        previousNumber: previousNumber,
        newNumber: newNumber,
        payload: payload,
    })

export const setWordsToInitialStateAC = () => ({type: SET_WORDS_INITIAL_STATE})







