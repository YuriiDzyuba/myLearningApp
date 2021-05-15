import React, {Fragment, useEffect, useState} from "react";
import {taskList} from "../../../../list/taskList";
import {DropdownButtonToText} from "../../../../components/lessonDescription/DropdownButtonToText";
import {useSelector} from "react-redux";
import {choseTaskAC} from "../../../../redux/availableTasksReducer";
import {addTaskType} from "../../../../redux/lessonToApp/SectionsReducer";

export const ChoseTask = ({num, getTaskType}) => {

    const tasks = useSelector(state => state.availableTasks)
    const content = useSelector(state => state.section.content)
    console.log(content[num - 1], "content")

    return (
        <Fragment>
            <hr/>
            <div className='d-flex flex-row mt-5 justify-content-center'>

                <h3>{`Add task to section-${num}`}</h3>
            </div>
            <div className='d-flex flex-row mt-3 justify-content-center'>

                <div className="col-2 pl-3">
                    <DropdownButtonToText
                        num={num}
                        label={"вибери тип завдання:"}
                        items={Object.values(tasks.available)}
                        currentValue={content[num - 1].taskType}
                        setCurrentValue={addTaskType}
                    />
                </div>
            </div>
        </Fragment>

    )
}
