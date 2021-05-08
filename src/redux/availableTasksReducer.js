import * as firebase from "firebase";

const CHOOSE_TASK = "CHOOSE_TASK"

const RESET_TASK = "RESET_TASK"

let initialState = {
    tasks: [
        {
            id: 1,
            name: "dnd",
            title: "dnd",
            description: "desk",
            enable: false,
            pic: "https://user-images.githubusercontent.com/2182637/53611918-54c1ff80-3c24-11e9-9917-66ac3cef513d.png",
            settings: {}
        },
        {
            id: 2,
            name: "translateWords",
            title: "translateWords",
            description: "desk",
            enable: false,
            pic: "https://user-images.githubusercontent.com/2182637/53611918-54c1ff80-3c24-11e9-9917-66ac3cef513d.png",
            settings: {}
        },
        {
            id: 3,
            name: "createPhrases",
            title: "createPhrases",
            description: "desk",
            enable: false,
            pic: "https://user-images.githubusercontent.com/2182637/53611918-54c1ff80-3c24-11e9-9917-66ac3cef513d.png",
            settings: {}
        },
        {
            id: 4,
            name: "pasteWords",
            title: "pasteWords",
            description: "desk",
            enable: false,
            pic: "https://user-images.githubusercontent.com/2182637/53611918-54c1ff80-3c24-11e9-9917-66ac3cef513d.png",
            settings: {}
        }, {
            id: 4,
            name: "pasteWords",
            title: "pasteWords",
            description: "desk",
            enable: false,
            pic: "https://user-images.githubusercontent.com/2182637/53611918-54c1ff80-3c24-11e9-9917-66ac3cef513d.png",
            settings: {}
        }, {
            id: 4,
            name: "pasteWords",
            title: "pasteWords",
            description: "desk",
            enable: false,
            pic: "https://user-images.githubusercontent.com/2182637/53611918-54c1ff80-3c24-11e9-9917-66ac3cef513d.png",
            settings: {}
        },
    ]

}

export let availableTasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHOOSE_TASK:
            return {...state, ...state.tasks[action.id].enable = action.payload}
        case RESET_TASK:
            return {initialState}
        default :
            return state
    }
}

export const choseTaskAC = (id, payload) => ({type: CHOOSE_TASK, id: id, payload: payload,})

export const resetStateAC = () => ({type: RESET_TASK})










