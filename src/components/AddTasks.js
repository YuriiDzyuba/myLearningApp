import React, {Fragment} from "react";
import {TasKCardsContainer} from "./TasKCardsContainer";

export const AddTasks = () => {
    return (
        <Fragment>
            <div className='d-flex flex-row mt-1 justify-content-center'>
                <div className="col-12 chooseFile">
                    <h3 className="text-center mb-3">Add tasks</h3>
                </div>
            </div>
            <div className='d-flex flex-wrap flex-row mt-1 justify-content-center'>
                        <TasKCardsContainer/>
            </div>
        </Fragment>
    )
}
