import React, {Fragment, useContext} from 'react'
//import './navbar.scss'
import {Link, useHistory} from "react-router-dom";
import {FireBaseContext} from "../context/FireBaseContext";
import {useAuthState} from "react-firebase-hooks/auth";

export const Navbar = ({isAuth}) => {
    const {auth} = useContext(FireBaseContext)
    const [user, loading, error] = useAuthState(auth)

    const loggedOutButtons = <Fragment>
        <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/login">log in</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/registration">Sign in</Link>
        </li>
    </Fragment>

    const loggedinButtons = <Fragment>
        <li className="nav-item">
            <Link className="nav-link active" onClick={()=>auth.signOut()} aria-current="page" to="">log Out</Link>
        </li>
    </Fragment>

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Navbar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>

                    </ul>
                    <ul className="navbar-nav d-flex">
                        {user && !loading ? loggedinButtons : loggedOutButtons}
                    </ul>
                </div>
            </div>
        </nav>

    )
}

