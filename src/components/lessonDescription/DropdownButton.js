import React, {Fragment, useRef, useState} from "react";
import {useSelector} from "react-redux";

export const DropdownButton = ({items, currentOrder, setCurrentOrder}) => {


    const orderButton = useRef()

    let dropDown = items.map((e, i) => {
        return (
            <li
                key={i}
            >
                <span
                    style={{cursor:"pointer"}}
                    onClick={() => {
                        setCurrentOrder(i+1)
                        orderButton.current.click()
                    }}
                    className="dropdown-item"
                   >{i+1}
                </span>
            </li>
        )
    })

    return (
        <Fragment>
            <label htmlFor="basic-url" className="form-label">{"choose order :"}</label>
            <div className="dropdown">
                <button
                    ref={orderButton}
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{width: "100%"}}
                >
                    {`order in spreadsheet - ${currentOrder}`}
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    {dropDown}
                </ul>
            </div>
        </Fragment>
    )
}
