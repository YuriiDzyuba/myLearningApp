import {ImportExcelFile} from "../../../components/table/ImportExcelFile";
import React, {Fragment, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {ChoseTask} from "./section/ChoseTask";
import {EditorConvertToHTML} from "./section/EditorConvertToHTML";
import {ImportExcelFileToApp} from "./section/ImportExcelFileToApp";
import {onTextAreaChange} from "../../../redux/lessonToApp/SectionsReducer";

export const Section = ({num, getTaskType}) => {

    const isTypeOfTaskChosen = useSelector(state => state.section.content)


    return (
        <Fragment>
            <EditorConvertToHTML
                num={num}

            />
            <ChoseTask
                num={num}
                getTaskType={getTaskType}
            />
            {
                isTypeOfTaskChosen[num - 1].taskType &&
                <ImportExcelFileToApp
                    num={num}
                    selectFileHeader={"Select file"}
                    type={"sect" + num}
                />
            }
            {
                <div className='d-flex flex-row mt-1 justify-content-center'>
                    <div className="col-12 chooseFile">
                        <h6 className="text-center mb-3">or create your own list</h6>
                    </div>
                </div>
            }
        </Fragment>

    )
}
