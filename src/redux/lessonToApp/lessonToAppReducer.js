import firebase from "firebase";


const CHANGE_NAME = "CHANGE_NAME"
const CHANGE_DESCRIPTION = "CHANGE_DESCRIPTION"
const CHANGE_PIC_URL = "CHANGE_PIC_URL"
const CHANGE_LEVEL = "CHANGE_LEVEL"
const CHANGE_UNIT = "CHANGE_UNIT"
const CHANGE_LESSON_NUMBER = "CHANGE_LESSON_NUMBER"
const CHANGE_TYPE = "CHANGE_TYPE"
const CHANGE_SECTIONS_QUANTITY = "CHANGE_SECTIONS_QUANTITY"
const ADD_CONTENT = "ADD_CONTENT"



let initialState = {
    name: "",
    description: "",
    picURL: "",
    level: {
        chosen: "",
        available: ["elementary", "pre-Intermediate", "Intermediate", ""]
    },
    unit: {
        chosen: "",
        available: [1, 2, 3, 4, 5, 6],
    },
    lessonNumber: {
        chosen: "",
        available: [1, 2, 3, 4, 5, 6],
    },
    type: {
        chosen: "",
        available: ["free", "not Free"]
    },
    sections: {
        chosen: "",
        available: [1, 2, 3, 4, 5, 6]
    },
}


export let lessonToAppReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_NAME:
            return {...state, name: action.payload}
        case CHANGE_DESCRIPTION:
            return {...state, description: action.payload}
        case CHANGE_PIC_URL:
            return {...state, picURL: action.payload}
        case CHANGE_LEVEL: {
            let stateCopy = {...state}
            stateCopy.level.chosen = action.payload
            return {...stateCopy}
        }
        case CHANGE_UNIT: {
            let stateCopy = {...state}
            stateCopy.unit.chosen = action.payload
            return {...stateCopy}
        }
        case CHANGE_LESSON_NUMBER: {
            let stateCopy = {...state}
            stateCopy.lessonNumber.chosen = action.payload
            return {...stateCopy}
        }
        case CHANGE_TYPE: {
            let stateCopy = {...state}
            stateCopy.type.chosen = action.payload
            return {...stateCopy}
        }
        case CHANGE_SECTIONS_QUANTITY: {
            let stateCopy = {...state}
            stateCopy.sections.chosen = action.payload

            return {...stateCopy}
        }
        case ADD_CONTENT:
            return {...state, content:action.payload}
        default :
            return state
    }
}


export const changeName = (payload) => ({type: CHANGE_NAME, payload})

export const changeDescription = (payload) => ({type: CHANGE_DESCRIPTION, payload})

export const changePicURL = (payload) => ({type: CHANGE_PIC_URL, payload})

export const changeLevel = (payload) => ({type: CHANGE_LEVEL, payload})

export const changeUnit = (payload) => ({type: CHANGE_UNIT, payload})

export const changeLessonNumber = (payload) => ({type: CHANGE_LESSON_NUMBER, payload})

export const changeType = (payload) => ({type: CHANGE_TYPE, payload})

export const changeSectionsQuantity = (payload) => ({type: CHANGE_SECTIONS_QUANTITY, payload})

export const addContent = (payload) => ({type: ADD_CONTENT, payload})

export const addLessonToDB = (newLesson, userID, level, unit, lessonNumber) => {
    return (dispatch) => {
        firebase.database().ref(`${userID}/lessons/${level}/unit-${unit}/`).push(newLesson)
    }
}





