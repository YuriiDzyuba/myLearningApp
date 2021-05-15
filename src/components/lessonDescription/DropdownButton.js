import React, {Fragment, useRef, useState} from "react";

export const DropdownButton = ({label, items, currentOrder, setCurrentOrder}) => {

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
                    {`${currentOrder}`}
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    {dropDown}
                </ul>
            </div>
        </Fragment>
    )
}
