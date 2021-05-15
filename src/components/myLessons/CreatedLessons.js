import {Link} from "react-router-dom";
import React, {useContext} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Loader} from "../Loader";
import {loadLessons} from "../../redux/lessonsReducer";
import {FireBaseContext} from "../../context/FireBaseContext";
import {useAuthState} from "react-firebase-hooks/auth";

export const CreatedLessons = () => {
    const {auth} = useContext(FireBaseContext)
    const [user, loading, error] = useAuthState(auth)
    const dispatch = useDispatch()
    const lessons = useSelector(state => state.lessons)

    if (!lessons.loaded){
        dispatch(loadLessons(user.uid))
        return <Loader/>
    }

    let lessonsCard = lessons.createdLessons.length>0 ? lessons.createdLessons.map((e, i) => {

        return (
            <div className="col-3 m-3"
                 key={i}
            >
                <div className="card rounded-5"
                     style={{width: "100%"}}
                >
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
    }) : null

    return (
        <div className='d-flex flex-row justify-content-center flex-wrap'>
            {lessonsCard}
        </div>
    )
}
