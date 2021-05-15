import * as firebase from "firebase";

const CHOSE_TASK = "CHOSE_TASK"

const RESET_TASK = "RESET_TASK"

let initialState = {
    chosen: "",
    available: {
        dndTo4pic: "dndTo4pic",
        dnd2VertColumn: "dnd2VertColumn",
        translateWord: "translateWord",
        translateSentence: "translateSentence",
        listenAndChose: "listenAndChose"
    }

}

export let availableTasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHOSE_TASK:
            return {...state, chosen: action.payload}
        case RESET_TASK:
            return {initialState}
        default :
            return state
    }
}

export const choseTaskAC = (payload) => ({type: CHOSE_TASK, payload})

export const resetStateAC = () => ({type: RESET_TASK})










