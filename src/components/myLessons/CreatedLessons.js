import {Link} from "react-router-dom";
import React from "react";
import {useDispatch, useSelector} from "react-redux";

export const CreatedLessons = ()=>{
    const dispatch = useDispatch()
    const createdLessons = useSelector(state => state.lessons.createdLessons)
    let lessonsCard = createdLessons.map((e,i)=>{

        return(
            <div className="col-3 m-3"
                 key={i}
            >
                <div className="card rounded-5">
                    <Link to="/createLesson" className=" text-decoration-none link-dark">
                        <img src={e.pic}
                             className="card-img-top"
                             alt="..."
                             style={{height:"155px"}}

                        />
                        <div className="card-body">
                            <h4 className="card-text text-center">{e.name}</h4>
                            <p className="card-text text-center">{e.description}</p>
                        </div>
                    </Link>
                </div>
            </div>
        )
    })

    return (
        <div className='d-flex flex-row align-items-start overflow-auto'>
            {lessonsCard}
        </div>
    )
}
