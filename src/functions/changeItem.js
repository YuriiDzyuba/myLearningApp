import React, {Fragment, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";

export const ChangeItem = (type) => {
   // const dispatch = useDispatch()
    //const table = useSelector(state => state[type])

    return (
        <div className="modal-dialog modal-fullscreen-sm-down">
            <div className="input-group input-group-sm mb-3">
                <span className="input-group-text" id="inputGroup-sizing-sm">Small</span>
                <input type="text" className="form-control" aria-label="Sizing example input"
                       aria-describedby="inputGroup-sizing-sm"/>
            </div>
        </div>
    )
}
