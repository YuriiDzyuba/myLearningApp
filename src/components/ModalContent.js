import React, {Fragment, useEffect, useRef, useState} from "react";
import "./modal.scss"
import {useDispatch, useSelector} from "react-redux";
import {
    onContentChangeAC,
    onHeaderChangeAC,
    onPictureUrlChangeAC,
    onRowNumberChangeAC
} from "../redux/currentRowReducer";
import {addChangedRowAC} from "../redux/wordsReducer";
import {InputField} from "./InputField";
import {DropdownButton} from "./lessonDescription/DropdownButton";
import {addChangedPhrasesRowAC} from "../redux/phraseReducer";

export const ModalContent = ({closeModal, type}) => {

    const dispatch = useDispatch()
    const currentRow = useSelector(state => state.currentRow)
    const items = useSelector(state => state[type].rows)
    const [previousNumber, setPreviousNumber] = useState("")
    const [currentOrder, setCurrentOrder] = useState(currentRow.rowNumber)
    const [origin, setOrigin] = useState(currentRow.origin)
    const [translation, setTranslation] = useState(currentRow.translation)
    const [pic, setPic] = useState(currentRow.pictureUrl)


    useEffect(() => {
        setPreviousNumber(currentRow.rowNumber)
    }, [])


    const onClickSaveButton = () => {

        switch (type) {
            case "words":
                dispatch(addChangedRowAC(
                    previousNumber,
                    currentOrder,
                    [origin, translation, pic]
                ))
                closeModal()
                return false
            case "phrases":
                dispatch(addChangedPhrasesRowAC(
                    previousNumber,
                    currentOrder,
                    [origin, translation, pic]
                ))
                closeModal()
                return false
            default:
                return false
        }

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
                    <InputField label={"origin"} value={origin} onChange={setOrigin}/>
                    <InputField label={"translation"} value={translation} onChange={setTranslation}/>
                    <InputField label={"picture URL"} value={pic} onChange={setPic}/>
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
