import React, {Fragment} from "react";
import {useDispatch} from "react-redux";

export const InputField = ({label, value, id, onChange}) => {
    const dispatch = useDispatch()
    return (
        <Fragment>
            <label htmlFor="basic-url" className="form-label">{label}</label>
            <div className="input-group mb-3">
                <input type="text"
                       className="form-control"
                       id={id}
                       aria-label="Sizing example input"
                       aria-describedby="inputGroup-sizing-default"
                       value={value}
                       onChange={(event) => {
                           dispatch(onChange(event.target.value))

                       }}

                />
            </div>
        </Fragment>
    )
}
