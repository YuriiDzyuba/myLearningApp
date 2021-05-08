import React, {Fragment, useState} from 'react'
import {TaskCard} from "./TaskCard";
import {useDispatch, useSelector} from "react-redux";

export const TasKCardsContainer = ()=>{
    const availableTasks = useSelector(state => state.availableTasks.tasks)

    let cards = availableTasks.map((e, i)=>(
        <TaskCard
            content={e}
            id={i}
            key={i}
        />))

    return(
        <Fragment>
            {cards}
        </Fragment>
    )
}
