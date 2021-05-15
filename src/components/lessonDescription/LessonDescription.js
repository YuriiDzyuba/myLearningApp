import React, {Fragment, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {InputField} from "../InputField";
import {DropdownButton} from "./DropdownButton";
import {
    addLessonDescriptionAC,
    addLessonNameAC, addLessonNumberAC,
    addLessonPictureUrlChangeAC
} from "../../redux/newLessonDescriptionReducer";


export const LessonDescription = () => {
    const dispatch = useDispatch()
    const newLessonDescription = useSelector(state => state.newLessonDescription)

    const setCurrentOrder = (val) => {
        dispatch(addLessonNumberAC(val))
    }

    const setName = (val) => {
        dispatch(addLessonNameAC(val))
    }

    const setDescription = (val) => {
        dispatch(addLessonDescriptionAC(val))
    }

    const setPic = (val) => {
        dispatch(addLessonPictureUrlChangeAC(val))
    }

    return (
        <Fragment>
            <div className='d-flex flex-row mt-3 justify-content-center'>
                <h3>Write lesson headers and description </h3>
            </div>
            <div className='row'>
                <div className="col-2 pl-3">
                    <DropdownButton
                        label={"рівень:"}
                        items={["",""]}
                        currentOrder={newLessonDescription.lessonNumber}
                        setCurrentOrder={setCurrentOrder}
                    />
                </div>
                <div className="col-2 pl-3">
                    <DropdownButton
                        label={"юніт:"}
                        items={["",""]}
                        currentOrder={newLessonDescription.lessonNumber}
                        setCurrentOrder={setCurrentOrder}
                    />
                </div>
                <div className="col-2 pl-3">
                    <DropdownButton
                        label={"номер:"}
                        items={["",""]}
                        currentOrder={newLessonDescription.lessonNumber}
                        setCurrentOrder={setCurrentOrder}
                    />
                </div>
                <div className="col-2 pl-3">
                    <DropdownButton
                        label={"тип:"}
                        items={["",""]}
                        currentOrder={newLessonDescription.lessonNumber}
                        setCurrentOrder={setCurrentOrder}
                    />
                </div>
                <div className="col-4">
                    <InputField
                        label={"lesson name / header :"}
                        value={newLessonDescription.name}
                        onChange={setName}
                    />
                </div>
            </div>
            <div className='d-flex flex-row mt-3 justify-content-center'>
                <div className="col-12">
                    <InputField label={"lesson description :"}
                                value={newLessonDescription.description}
                                onChange={setDescription}
                    />
                    <InputField label={"lesson picture URL :"}
                                value={newLessonDescription.pictureUrl}
                                onChange={setPic}
                    />
                </div>
            </div>
        </Fragment>
    )
}
