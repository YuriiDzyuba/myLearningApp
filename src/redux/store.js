import {applyMiddleware, combineReducers, createStore} from "redux";
import {mainReducer} from "./mainReducer";
import thunkMiddleware from 'redux-thunk'
import {wordConstructorReducer} from "./tasksRedusers/wordConstructor/wordConstructorReducer";
import {grammarConstructorReduser} from "./tasksRedusers/grammarReduser/grammarConstructorReduser";
import {sentenceConstructorReducer} from "./tasksRedusers/sentenceConstructor/sentenceConstructorReduser";
import {translationWordsReducer} from "./tasksRedusers/translationWordsReducer/translationWordsReducer";
import {listenAndAnswerReducer} from "./tasksRedusers/listenAndAnswerReducer/listenAndAnswerReducer";
import {watchAndAnswerReducer} from "./tasksRedusers/watchAndAnswerReducer/watchAndAnswerReducer";
import {DifficultSentenceConstructorReducer} from "./tasksRedusers/grammarReduser/difficultSentenceConstructorReducer";
import {pasteWordsToTextReducer} from "./tasksRedusers/pasteWordsToTextReducer/pasteWordsToTextReduser";
import {pasteWordsToSentenceReduser} from "./tasksRedusers/pasteWordsToSentenceReducer/pasteWordsToSentenceReduser";
import {chooseVariantInTextReducer} from "./tasksRedusers/chooseVariantInTextReducer/chooseVariantInTextReducer";
import {chooseVariantInSentenceReducer} from "./tasksRedusers/chooseVariantInSentenceReducer/chooseVariantInSentenceReduser";
import {chooseFromVariantsReducer} from "./tasksRedusers/choseFromVariants/chooseFromVariantsReducer";
import {dragAndDropVertReducer} from "./tasksRedusers/dragAndDropVert/dragAndDropVertReducer";
import {dragAndDropHorReducer} from "./tasksRedusers/dragAndDropHor/dragAndDropHorReducer";
import {currentUserParams} from "./currentUserParams";
import {dragAndDrop4PicturesReducer} from "./tasksRedusers/dragAndDrop4Pic/dragAndDrop4PicturesReducer";
import {dragAndDropSortTo2HorizontalReducer} from "./tasksRedusers/dragAndDropSortTo2HorizontalReducer/dragAndDropSortTo2HorizontalReducer";


let reducers = combineReducers({
    tasks : mainReducer,
    words : wordConstructorReducer,
    grammar : grammarConstructorReduser,
    sentence: sentenceConstructorReducer,
    difficultSentence: DifficultSentenceConstructorReducer,
    translationWords: translationWordsReducer,
    listenAndAnswer: listenAndAnswerReducer,
    watchAndAnswer: watchAndAnswerReducer,
    wordsToText: pasteWordsToTextReducer,
    wordsToSentence: pasteWordsToSentenceReduser,
    variantInText: chooseVariantInTextReducer,
    variantInSentence: chooseVariantInSentenceReducer,
    chooseInVariants: chooseFromVariantsReducer,
    elemToDrag: dragAndDropVertReducer,
    elemToHorDrag: dragAndDropHorReducer,
    fourPics: dragAndDrop4PicturesReducer,
    twoAreas: dragAndDropSortTo2HorizontalReducer,
    parameters: currentUserParams,

});

export let store = createStore(reducers, applyMiddleware(thunkMiddleware))


window.store=store