import React, {Fragment, useContext} from 'react'
import {useHistory} from 'react-router-dom'
import {ImportExcelFile} from "../components/table/ImportExcelFile";
import {useDispatch, useSelector} from "react-redux";
import {AddTasks} from "../components/AddTasks";
import {LessonDescription} from "../components/lessonDescription/LessonDescription";
import {addLesson, addNewLessonToStateAC} from "../redux/lessonsReducer";
import uuid from 'react-uuid'
import {FireBaseContext} from "../context/FireBaseContext";
import {useAuthState} from "react-firebase-hooks/auth";

export const CreateLesson = () => {

    const {auth} = useContext(FireBaseContext)
    const [user, loading, error] = useAuthState(auth)
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    const history = useHistory()

    const createNewLesson = async ()=>{
        let newLesson = {
            id: uuid(),
            name: state.newLessonDescription.name,
            description:state.newLessonDescription.description,
            pic:state.newLessonDescription.pictureUrl,
            content:{
                words:state.words,
                phrases:state.phrases,
                tasks:state.availableTasks.tasks.filter(e=> {
                   if (e.enable)
                       return e.id
                })
            }
        }
        console.log(newLesson,"newLesson")
        await dispatch(addLesson(newLesson,user.uid))
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
