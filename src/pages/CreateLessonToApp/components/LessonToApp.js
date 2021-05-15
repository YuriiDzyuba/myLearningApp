import React, {Fragment, useEffect, useState} from "react";
import {InputField} from "../../../components/InputField";
import {DropdownButtonToText} from "../../../components/lessonDescription/DropdownButtonToText";
import {Section} from "./Section";
import "./lessonToApp.scss"
import {useDispatch, useSelector} from "react-redux";
import {
    changeDescription,
    changeLessonNumber,
    changeLevel, changeName, changePicURL,
    changeSectionsQuantity,
    changeType,
    changeUnit
} from "../../../redux/lessonToApp/lessonToAppReducer";


export const LessonToApp = () => {

    const state = useSelector(state => state.lessonToApp)

    useEffect(() => {
        getSections()
    },[state.sections.chosen])


    let sections = null

    const getSections = () => {
        if (state.sections.chosen) {
            sections=[]
            console.log("tyta")
            for (let i = 0; i < state.sections.chosen; i++) {
                sections.push(<div key={i}
                              className={`sect-${i % 2 === 0 ? "Odd" : "Even"}`}
                >
                    <Section
                        num={i + 1}
                    />
                </div>)
            } return sections
        } else return null
    }

    return (
        <Fragment>
            <div className='d-flex flex-row mt-3 justify-content-center'>
                <h3>Write lesson headers and description </h3>
            </div>
            <div className='row'>
                <div className="col-2 pl-3">
                    <DropdownButtonToText
                        label={"рівень:"}
                        items={state.level.available}
                        id={"changeLevel"}
                        currentValue={state.level.chosen}
                        setCurrentValue={changeLevel}
                    />
                </div>
                <div className="col-2 pl-3">
                    <DropdownButtonToText
                        label={"юніт:"}
                        items={state.unit.available}
                        id={"changeUnit"}
                        currentValue={state.unit.chosen}
                        setCurrentValue={changeUnit}
                    />
                </div>
                <div className="col-2 pl-3">
                    <DropdownButtonToText
                        label={"номер:"}
                        items={state.lessonNumber.available}
                        id={"changeLessonNumber"}
                        currentValue={state.lessonNumber.chosen}
                        setCurrentValue={changeLessonNumber}
                    />
                </div>
                <div className="col-2 pl-3">
                    <DropdownButtonToText
                        label={"тип:"}
                        items={state.type.available}
                        id={"changeType"}
                        currentValue={state.type.chosen}
                        setCurrentValue={changeType}
                    />
                </div>
                <div className="col-2 pl-3">
                    <DropdownButtonToText
                        label={"кол секций"}
                        items={state.sections.available}
                        id={"changeSectionsQuantity"}
                        currentValue={state.sections.chosen}
                        setCurrentValue={changeSectionsQuantity}
                    />
                </div>

            </div>
            <div className='d-flex flex-row mt-3 justify-content-center'>
                <div className="col-12">
                    <InputField label={"lesson name / header :"}
                                value={state.name}
                                id={"name"}
                                onChange={changeName}
                    />
                    <InputField label={"lesson description :"}
                                value={state.description}
                                id={"description"}
                                onChange={changeDescription}
                    />
                    <InputField label={"lesson picture URL :"}
                                value={state.picURL}
                                id={"picURL"}
                                onChange={changePicURL}
                    />
                </div>
            </div>
            {getSections()}
        </Fragment>
    )
}
