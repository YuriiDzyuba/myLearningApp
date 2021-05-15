import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import {mainReducer} from "./mainReducer";
import thunk from 'redux-thunk'
import {wordsReducer} from "./wordsReducer";
import {phraseReducer} from "./phraseReducer";
import {currentRowReducer} from "./currentRowReducer";
import {availableTasksReducer} from "./availableTasksReducer";
import {lessonsReducer} from "./lessonsReducer";
import {chosenTasksReducer} from "./chosenTasksReducer";
import {newLessonDescriptionReducer} from "./newLessonDescriptionReducer";
import {lessonToAppReducer} from "./lessonToApp/lessonToAppReducer";
import {SectionsReducer} from "./lessonToApp/SectionsReducer";
import {tableReducer} from "./lessonToApp/tableReducer";



let rootReducer = combineReducers({
    lessonToApp:lessonToAppReducer,
    section:SectionsReducer,
    table:tableReducer,
    lessons:lessonsReducer,
    words: wordsReducer,
    phrases: phraseReducer,
    currentRow: currentRowReducer,
    availableTasks: availableTasksReducer,
    chosenTasks:chosenTasksReducer,
    newLessonDescription: newLessonDescriptionReducer

});

export let store = createStore(rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)


window.store = store
