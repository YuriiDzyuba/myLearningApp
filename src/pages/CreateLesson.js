import React, {Fragment} from 'react'
import {useHistory} from 'react-router-dom'
import {ImportExcelFile} from "../components/table/ImportExcelFile";
import {useDispatch, useSelector} from "react-redux";
import {AddTasks} from "../components/AddTasks";
import {LessonDescription} from "../components/lessonDescription/LessonDescription";
import {addNewLessonToStateAC} from "../redux/lessonsReducer";
import uuid from 'react-uuid'
import {setPhrasesToInitialStateAC} from "../redux/phraseReducer";
import {setWordsToInitialStateAC} from "../redux/wordsReducer";
import {setDescriptionToInitialStateAC} from "../redux/newLessonDescriptionReducer";
import {setCurrentRowToInitialStateAC} from "../redux/currentRowReducer";

export const CreateLesson = () => {

    const dispatch = useDispatch()
    const state = useSelector(state => state)
    const history = useHistory()

    const createNewLesson = ()=>{
        dispatch(addNewLessonToStateAC(
            {
                id: uuid(),
                name: state.newLessonDescription.name,
                description:state.newLessonDescription.description,
                pic:state.newLessonDescription.pictureUrl,
                content:{
                    words:state.words,
                    phrases:state.phrases,
                    tasks:state.availableTasks.tasks.filter(e=>e.enable)
                }
            }
        ))
        dispatch(setPhrasesToInitialStateAC())
        dispatch(setWordsToInitialStateAC())
        dispatch(setDescriptionToInitialStateAC())
        dispatch(setCurrentRowToInitialStateAC())
        history.push(`/`)
    }



    return (
        <Fragment>
            <div className='d-flex flex-row mt-3 justify-content-center'>
                <div className="p-2">
                    <h3>Create new lesson</h3>
                </div>
            </div>
            <ImportExcelFile selectFileHeader={"Select file with words"} type={"words"}/>
            {
                !state.words.dataLoaded
                &&
                <div className='d-flex flex-row mt-1 justify-content-center'>
                    <div className="col-12 chooseFile">
                        <h6 className="text-center mb-3">or create your own list</h6>
                    </div>
                </div>
            }
            <ImportExcelFile selectFileHeader={"Select file with phrases"} type={"phrases"}/>
            {
                !state.phrases.dataLoaded
                &&
                <div className='d-flex flex-row mt-1 justify-content-center'>
                    <div className="col-12 chooseFile">
                        <h6 className="text-center mb-3">or create your own list</h6>
                    </div>
                </div>
            }
            {
                // state.phrases.dataLoaded
                // ||
                // state.words.dataLoaded
                //
               <AddTasks/>
            }
            {
                // state.phrases.dataLoaded
                // ||
                // state.words.dataLoaded
                //
                <Fragment>
                    <LessonDescription/>
                    <div className='d-flex flex-row mt-3 justify-content-center'>
                        <div>
                            <button
                                type="button"
                                className="btn btn-success"
                                onClick={createNewLesson}
                            >
                                Create lesson
                            </button>
                        </div>
                    </div>
                </Fragment>

            }
        </Fragment>


    )
}
