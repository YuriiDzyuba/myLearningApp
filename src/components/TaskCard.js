import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {choseTaskAC} from "../redux/availableTasksReducer";


export const TaskCard = ({content, id})=>{

    const dispatch = useDispatch()
    const addTaskHandler = ()=>{
        dispatch(choseTaskAC(id,!content.enable))
    }


    return(
        <div className="p-2 col-3" >
        <div className="card" >
            <div className="row g-0">
                <div className="col-md-4">
                    <img style={{width: "100%", height: "100%"}}
                         src={content.pic}
                         alt="..."/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{content.title}</h5>
                        <p className="card-text">{content.description}</p>
                        <div className="form-check form-switch">
                            <input className="form-check-input"
                                   type="checkbox"
                                   id="flexSwitchCheckDefault"
                                   onChange={addTaskHandler}
                                   value={content.enable}
                            />
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Add</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
