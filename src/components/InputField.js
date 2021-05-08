import React, {Fragment} from "react";

export const InputField = ({label, value, onChange}) => {
    return (
        <Fragment>
            <label htmlFor="basic-url" className="form-label">{label}</label>
            <div className="input-group mb-3">
                <input type="text"
                       className="form-control"
                       aria-label="Sizing example input"
                       aria-describedby="inputGroup-sizing-default"
                        value={value}
                       onChange={(event) => {
                           onChange(event.target.value)
                       }}

                />
            </div>
        </Fragment>
    )
}
