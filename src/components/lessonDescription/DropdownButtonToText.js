import React, {Fragment, useRef} from "react";
import {useDispatch} from "react-redux";

export const DropdownButtonToText = ({label, items, num, currentValue, setCurrentValue}) => {
    const dispatch = useDispatch()
    const orderButton = useRef()
    let itemArr
    items.length>0 ? itemArr=items : itemArr=[""]
    let dropDown = itemArr.map((e, i) => {
        return (
            <li
                key={i}
            >
                <span
                    style={{cursor:"pointer"}}
                    onClick={() => {
                        dispatch(setCurrentValue(e, num))
                        orderButton.current.click()
                    }}
                    className="dropdown-item"
                >{e}
                </span>
            </li>
        )
    })

    return (
        <Fragment>
            <label htmlFor="basic-url" className="form-label">{label}</label>
            <div className="dropdown">
                <button
                    ref={orderButton}
                    className="btn btn-outline-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{width: "100%"}}
                >
                    {`${currentValue}`}
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    {dropDown}
                </ul>
            </div>
        </Fragment>
    )
}
