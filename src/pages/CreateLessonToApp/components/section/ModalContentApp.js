import React, {Fragment, useEffect, useRef, useState} from "react";
import "../../../../components/table/modal.scss"
import {useDispatch, useSelector} from "react-redux";
import {DropdownButton} from "../../../../components/lessonDescription/DropdownButton";
import {InputField} from "../../../../components/InputField";
import {addChangedRow} from "../../../../redux/lessonToApp/SectionsReducer";
import {setCurrentRowToInitialStateAC} from "../../../../redux/currentRowReducer";
import {InputFieldModal} from "./InputFieldModal";

export const ModalContentApp = ({closeModal, num}) => {

    const dispatch = useDispatch()
    const currentRow = useSelector(state => state.currentRow)
    const items = useSelector(state => state.section.content[num - 1].taskContent.rows)
    const [previousNumber, setPreviousNumber] = useState("")
    const [currentOrder, setCurrentOrder] = useState(currentRow.rowNumber)
    const [origin, setOrigin] = useState(currentRow.origin)
    const [translation, setTranslation] = useState(currentRow.translation)
    const [pic, setPic] = useState(currentRow.pictureUrl)


    useEffect(() => {
        setPreviousNumber(currentRow.rowNumber)
    }, [])

    const onClickSaveButton = () => {
        dispatch(addChangedRow(
            previousNumber,
            currentOrder,
            [origin, translation, pic],
            num
        ))
        dispatch(setCurrentRowToInitialStateAC())
        closeModal()
    }

    return (
        <Fragment>
            <div className='d-flex flex-row mt-3 justify-content-between'>
                <div className="col-2">
                    <DropdownButton
                        items={items}
                        currentOrder={currentOrder}
                        setCurrentOrder={setCurrentOrder}
                    />
                </div>
                <div>
                    <button
                        type="button"
                        className="btn btn-outline-danger"
                        onClick={closeModal}
                    >
                        Close
                    </button>
                </div>
            </div>
            <div className='d-flex flex-row mt-3 justify-content-center'>
                <div className="col-12">
                    <InputFieldModal label={"origin"} value={origin} onChange={setOrigin}/>
                    <InputFieldModal label={"translation"} value={translation} onChange={setTranslation}/>
                    <InputFieldModal label={"picture URL"} value={pic} onChange={setPic}/>
                </div>
            </div>
            <div className='d-flex flex-row mt-3 justify-content-center'>
                <button
                    type="button"
                    className="btn btn-outline-success"
                    onClick={onClickSaveButton}
                >
                    Save
                </button>
            </div>
        </Fragment>
    )
}
