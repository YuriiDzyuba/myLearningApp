import React, {Fragment} from 'react'

export const LogInForm = ({changeHandler}) => {

    return (
                <Fragment>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email"
                               name="email"
                               className="form-control"
                               id="email"
                               aria-describedby="emailHelp"
                               onChange={changeHandler}
                        />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password"
                               name="password"
                               className="form-control"
                               id="password"
                               onChange={changeHandler}

                        />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <div className="d-grid gap-2 col-6 mx-auto">
                        <button
                            type="submit"
                            className="btn btn-primary"

                        >
                            Submit
                        </button>
                    </div>
                </Fragment>

    )
}
