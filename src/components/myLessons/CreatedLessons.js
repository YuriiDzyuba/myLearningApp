import {Link} from "react-router-dom";
import React from "react";
import {useDispatch, useSelector} from "react-redux";

export const CreatedLessons = () => {
    const dispatch = useDispatch()
    const createdLessons = useSelector(state => state.lessons.createdLessons)
    let lessonsCard = createdLessons.map((e, i) => {

        return (
            <div className="col-3 m-3"
                 key={i}
            >
                <div className="card rounded-5">

                    <img src={e.pic}
                         className="card-img-top"
                         alt="..."
                         style={{height: "155px"}}

                    />
                    <div className="card-body">
                        <h4 className="card-text text-center">{e.name}</h4>
                        <p className="card-text text-center">{e.description}</p>
                        <div className='d-flex flex-row justify-content-center'>
                            <Link
                                type={"button"}
                                to={`/editLesson/${e.id}`}
                                className="btn btn-outline-secondary text-decoration-none m-2">
                                edit
                            </Link>
                            <Link
                                type={"button"}
                                to={`/play/${e.id}`}
                                className="btn btn-outline-success text-decoration-none m-2">
                                start
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        )
    })

    return (
        <div className='d-flex flex-row justify-content-center flex-wrap'>
            {lessonsCard}
        </div>
    )
}
