import React, {Fragment} from 'react'
import {Link, useHistory} from "react-router-dom";
import {CreatedLessons} from "../components/myLessons/CreatedLessons";

export const MyLessons = () => {
    return (
        <Fragment>
            <div className='d-flex flex-row mt-3 justify-content-center align-items-center'
                 style={{height: "100%"}}
            >
                <Link to="/createLesson"
                      type="button"
                      className="btn btn-outline-success btn-lg mb-4"
                >
                    Create lesson
                </Link>

            </div>
            <div className="d-flex flex-row  mt-3 justify-content-center align-items-center">
                    <CreatedLessons/>
            </div>
        </Fragment>


    )
}
