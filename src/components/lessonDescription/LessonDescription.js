import React, {Fragment, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {InputField} from "./InputField";
import {DropdownButton} from "./lessonDescription/DropdownButton";

export const LessonDescription = () => {
    //  const dispatch = useDispatch()
    // const currentRow = useSelector(state => state.currentRow)
    //const [order, setOrder] = useState("")
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [pic, setPic] = useState("")
    return (
        <Fragment>
            <div className='d-flex flex-row mt-3 justify-content-center'>
                <h3>Write lesson description </h3>
            </div>
            <div className='d-flex flex-row mt-3 justify-content-between'>
                <div className="col-1">
                    <DropdownButton/>
                </div>
                <div className="col-10">
                    <InputField label={"lesson name / header :"} value={name} onChange={setName}/>
                </div>
            </div>
            <div className='d-flex flex-row mt-3 justify-content-center'>
                <div className="col-12">
                    <InputField label={"lesson description :"} value={description} onChange={setDescription}/>
                    <InputField label={"lesson picture URL :"} value={pic} onChange={setPic}/>
                </div>
            </div>
            <div className='d-flex flex-row mt-3 justify-content-center'>
                <div>
                    <button
                        type="button"
                        className="btn btn-success"
                        onClick={()=>{console.log("dfdddddddddddddddddddddddd")}}
                    >
                        Create lesson
                    </button>
                </div>
            </div>
        </Fragment>
    )
}
