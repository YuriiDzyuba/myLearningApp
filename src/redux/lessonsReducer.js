import firebase from "firebase";
import {setPhrasesToInitialStateAC} from "./phraseReducer";
import {setWordsToInitialStateAC} from "./wordsReducer";
import {setDescriptionToInitialStateAC} from "./newLessonDescriptionReducer";
import {setCurrentRowToInitialStateAC} from "./currentRowReducer";

const ADD_NEW_LESSON = "ADD_NEW_LESSON"
const LOAD_LESSONS = "LOAD_LESSONS"

let initialState = {
    loaded: false,
    createdLessons: []
}

export let lessonsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_LESSON:
            return {...state, createdLessons: [...state.createdLessons, action.payload]}
        case LOAD_LESSONS:
            return {
                loaded: true,
                createdLessons: action.payload
            }
        default :
            return state
    }
}

const addNewLessonToStateAC = (payload) => ({type: ADD_NEW_LESSON, payload,})

const loadLessonsToStateAC = (payload) => ({type: LOAD_LESSONS, payload})

export const loadLessons = (userID) => (dispatch) => {
    let lessons = firebase.database().ref(`${userID}/lessons`)
    lessons.on("value", (snapshot) => {
        const data = snapshot.val();
        console.log(data, "data")
        if (data){
            dispatch(loadLessonsToStateAC(Object.values(data)))
        } else dispatch(loadLessonsToStateAC(initialState))

    })
}

export const addLesson = (newLesson, userID) => {
    return (dispatch) => {
        firebase.database().ref(`${userID}/lessons/`).push(newLesson)
        dispatch(setPhrasesToInitialStateAC())
        dispatch(setWordsToInitialStateAC())
        dispatch(setDescriptionToInitialStateAC())
        dispatch(setCurrentRowToInitialStateAC())
    }
}





