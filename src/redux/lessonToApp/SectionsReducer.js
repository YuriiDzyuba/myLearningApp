import * as firebase from "firebase";

const ON_TEXTAREA_CHANGE = "ON_TEXTAREA_CHANGE"
const ADD_TASK_TYPE = "ADD_TASK_TYPE"
const ADD_TASK_CONTENT = "ADD_TASK_CONTENT"
const CHANGED = "CHANGED"


let initialState = {
    content: [
        {
            num: 1,
            html: "",
            taskType: "",
            taskContent: {}
        },
        {
            num: 2,
            html: "",
            taskType: "",
            taskContent: {}
        },
        {
            num: 3,
            html: "",
            taskType: "",
            taskContent: {}
        },
        {
            num: 4,
            html: "",
            taskType: "",
            taskContent: {}
        },
        {
            num: 5,
            html: "",
            taskType: "",
            taskContent: {}
        },
        {
            num: 6,
            html: "",
            taskType: "",
            taskContent: {}
        },
        {
            num: 7,
            html: "",
            taskType: "",
            taskContent: {}
        },
        {
            num: 8,
            html: "",
            taskType: "",
            taskContent: {}
        },
        {
            num: 9,
            html: "",
            taskType: "",
            taskContent: {}
        },
        {
            num: 10,
            html: "",
            taskType: "",
            taskContent: {}
        }
    ]
}


export let SectionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ON_TEXTAREA_CHANGE: {
            let stateCopy = {...state}
            stateCopy.content[action.num - 1].html = action.payload
            alert(`section ${action.num}: description has been added`)
            return {...stateCopy}
        }
        case ADD_TASK_TYPE: {
            let stateCopy = {...state}
            stateCopy.content[action.num - 1].taskType = action.payload
            return {...stateCopy}
        }
        case ADD_TASK_CONTENT: {
            let stateCopy = {...state}
            stateCopy.content[action.num - 1].taskContent = action.payload
            return {...stateCopy}
        }
        case CHANGED: {
            let stateCopy = {...state}
            let newRowsArray = stateCopy.content[action.num - 1].taskContent.rows.filter((elem,index)=>index !== parseInt(action.previousNumber) - 1)
            newRowsArray.splice(action.newNumber-1, 0, action.payload )
            stateCopy.content[action.num - 1].taskContent.rows= newRowsArray
            return {...stateCopy}
        }
        default :
            return state
    }
}


export const onTextAreaChange = (payload, num) => ({type: ON_TEXTAREA_CHANGE, payload, num})

export const addTaskType = (payload, num) => ({type: ADD_TASK_TYPE, payload, num})

export const addTaskContent = (payload, num) => ({type: ADD_TASK_CONTENT, payload, num})

export const addChangedRow = (previousNumber, newNumber, payload, num) => ({type: CHANGED, previousNumber, newNumber, payload, num})






