import React, {Fragment} from 'react'
import {Link} from "react-router-dom";
import {CreatedLessons} from "../components/myLessons/CreatedLessons";

export const MyLessons = () => {

    return (
        <Fragment>
            <div className='d-flex flex-row mt-3 justify-content-center align-items-center'
                 style={{height: "100%"}}
            >
                <Link to="/createLesson"
                      type="button"
                      className="btn btn-outline-success btn-lg m-3"
                >
                    Create lesson
                </Link>
                <Link to="/createLessonToApp"
                      type="button"
                      className="btn btn-outline-success btn-lg m-3"
                >
                    Create lesson for App
                </Link>

            </div>
            <div className="row">
                    <CreatedLessons/>
            </div>
        </Fragment>


    )
}
