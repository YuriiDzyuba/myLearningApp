import React, {Fragment, useContext, useState} from 'react'
import {useHistory} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import {addLesson, addNewLessonToStateAC} from "../../redux/lessonsReducer";
import {FireBaseContext} from "../../context/FireBaseContext";
import {useAuthState} from "react-firebase-hooks/auth";
import {EditorConvertToHTML} from "./components/section/EditorConvertToHTML";
import {Section} from "./components/Section";
import {LessonToApp} from "./components/LessonToApp";
import {addContent, addLessonToDB} from "../../redux/lessonToApp/lessonToAppReducer";

export const CreateLessonToApp = () => {

    const {auth} = useContext(FireBaseContext)
    const [user, loading, error] = useAuthState(auth)

    const dispatch = useDispatch()
    const state = useSelector(state => state)
    console.log(state,"state")
    const history = useHistory()

    const createNewLesson = () => {
        let contentToLesson = state.section.content.filter((e)=>e.html!=="" ||e.taskType!=="")
        console.log(contentToLesson,"contentToLesson")
        // let newLesson = state.lessonToApp
        // let lessonToBD = {
        //     name:newLesson.name,
        //     description:newLesson.description,
        //     picURL:newLesson.picURL,
        //     level:newLesson.level.chosen,
        //     unit:newLesson.unit.chosen,
        //     lessonNumber:newLesson.lessonNumber.chosen,
        //     type: newLesson.type.chosen,
        //     sections:newLesson.sections.chosen,
        //     content:contentToLesson
        // }
       // dispatch(addLessonToDB(lessonToBD, user.uid, newLesson.level.chosen, newLesson.unit.chosen,))

        const arr = [1,1,2,4,6,2,3,6,23,2,64,6,335,4,46,5,6,3,5,56,4,4,5,5]
        let total = []

       for (let i =0; i<arr.length; i++){
           let res = arr.filter((elem,index)=>
              ( arr[i] === elem && index!== i)
           )
           if (!res.length) {
               total.push(arr[i])
           }
       }
        console.log(total,"total")
    }


    return (
        <Fragment>
            <div className='d-flex flex-row mt-3 justify-content-center'>
                <div className="p-2">
                    <h3>Create new lesson</h3>
                </div>
            </div>

            <LessonToApp/>

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


    )
}
