import * as firebase from "firebase";

const CURRENT_ROW = "CURRENT_ROW"
const NEW_NUMBER = "NEW_NUMBER"
const NEW_HEADER = "NEW_HEADER"
const NEW_CONTENT = "NEW_CONTENT"
const NEW_PICTURE_URL = "NEW_PICTURE_URL"


let initialState = {
    tasks: []
}

export let chosenTasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case CURRENT_ROW:
            return {...state, ...action.payload}
        case NEW_NUMBER:
        case NEW_HEADER:
        case NEW_CONTENT:
        case NEW_PICTURE_URL:
            return {...state, ...action.payload}
        default :
            return state
    }
}

export const currentRowToStateAC = (payload) => ({type: CURRENT_ROW, payload: payload,})

export const onRowNumberChangeAC = (payload) => ({type: NEW_NUMBER, payload: payload,})

export const onHeaderChangeAC = (payload) => ({type: NEW_HEADER, payload: payload,})

export const onContentChangeAC = (payload) => ({type: NEW_CONTENT, payload: payload,})

export const onPictureUrlChangeAC = (payload) => ({type: NEW_PICTURE_URL, payload: payload,})








