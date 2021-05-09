import * as firebase from "firebase";

const ADD_NEW_LESSON = "ADD_NEW_LESSON"

let initialState = {
    createdLessons: [
        {
            id: 1,
            name: "les1",
            description: "description",
            pic: "https://cdn.mos.cms.futurecdn.net/eAHwsumMLJoJjTckiVBBDV-320-80.jpg",
            content: {
                words: {},
                phrases: {},
                tasks: {}
            }
        },
        {
            id: 2,
            name: "les2",
            description: "description",
            pic: "https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            content: {
                words: {},
                phrases: {},
                tasks: {}
            }
        },
        {
            id: 3,
            name: "les3",
            description: "description",
            pic: "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg",
            content: {
                words: {},
                phrases: {},
                tasks: {}
            }
        }
    ]
}


export let lessonsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_LESSON:
            return {...state, createdLessons:[...state.createdLessons, action.payload]}

        default :
            return state
    }
}

export const addNewLessonToStateAC = (payload) => ({type: ADD_NEW_LESSON, payload: payload,})








