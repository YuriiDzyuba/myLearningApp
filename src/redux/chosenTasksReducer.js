import * as firebase from "firebase";

const CURRENT_ROW = "CURRENT_ROW"
const NEW_NUMBER = "NEW_NUMBER"
const NEW_HEADER = "NEW_HEADER"
const NEW_CONTENT = "NEW_CONTENT"
const NEW_PICTURE_URL = "NEW_PICTURE_URL"


let initialState = {
    tasks: [
        {
            id: 1,
            name: "dnd",
            title:"dnd",
            description: "desk",
            enable: false,
            pic: "https://user-images.githubusercontent.com/2182637/53611918-54c1ff80-3c24-11e9-9917-66ac3cef513d.png",
            settings: {}
        },
        {
            id: 2,
            name: "translateWords",
            title:"translateWords",
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








