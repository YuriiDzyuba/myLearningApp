const NEW_LESSON_NUMBER = "NEW_LESSON_NUMBER"
const NEW_LESSON_NAME = "NEW_LESSON_NAME"
const NEW_LESSON_DESCRIPTION = "NEW_LESSON_DESCRIPTION"
const NEW_LESSON_PICTURE_URL = "NEW_LESSON_PICTURE_URL"


let initialState = {
    id: null,
    lessonNumber: 1,
    name: "",
    description: "",
    pictureUrl: ""
}

export let newLessonDescriptionReducer = (state = initialState, action) => {
    switch (action.type) {
        case NEW_LESSON_NUMBER:
            return {...state, lessonNumber: action.text}
        case NEW_LESSON_NAME:
            return {...state, name: action.text}
        case NEW_LESSON_DESCRIPTION:
            return {...state, description: action.text}
        case NEW_LESSON_PICTURE_URL:
            return {...state, pictureUrl: action.text}
        default :
            return state
    }
}


export const addLessonNumberAC = (text) => ({type: NEW_LESSON_NUMBER, text: text,})

export const addLessonNameAC = (text) => ({type: NEW_LESSON_NAME, text: text,})

export const addLessonDescriptionAC = (text) => ({type: NEW_LESSON_DESCRIPTION, text: text,})

export const addLessonPictureUrlChangeAC = (text) => ({type: NEW_LESSON_PICTURE_URL, text: text,})








