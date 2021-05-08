import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import {mainReducer} from "./mainReducer";
import thunkMiddleware from 'redux-thunk'
import {wordsReducer} from "./wordsReducer";
import {phraseReducer} from "./phraseReducer";
import {currentRowReducer} from "./currentRowReducer";
import {availableTasksReducer} from "./availableTasksReducer";
import {lessonsReducer} from "./lessonsReducer";
import {chosenTasksReducer} from "./chosenTasksReducer";
import {newLessonDescriptionReducer} from "./newLessonDescriptionReducer";


let reducers = combineReducers({
   // tasks: mainReducer,
    lessons:lessonsReducer,
    words: wordsReducer,
    phrases: phraseReducer,
    currentRow: currentRowReducer,
    availableTasks: availableTasksReducer,
    chosenTasks:chosenTasksReducer,
    newLessonDescription: newLessonDescriptionReducer

});

export let store = createStore(reducers,
    composeWithDevTools(
        applyMiddleware(thunkMiddleware)
    )
)


window.store = store
