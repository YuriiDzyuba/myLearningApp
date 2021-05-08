import React, {useContext} from 'react'
import {logInAction} from "../functions/logInAction";
import {useFormChanger} from "../hooks/useFormChanger";
import {LogInForm} from "../components/LogInForm";
import {FireBaseContext} from "../context/FireBaseContext";
import firebase from "firebase";

export const LoginPage = () => {

    let {auth} = useContext(FireBaseContext)
    const {changeHandler, form} = useFormChanger()

    const logInHandler = async () => {
        const {email, password} = form
            let {user} = await auth.signInWithEmailAndPassword(email, password)
        console.log(user)
    }

    return (
        <div className='row justify-content-md-center'>
            <div className="col col-md-4">

                <form name="logIN"
                      onSubmit={e => {
                          console.log("cfggcbcbvb")
                          e.preventDefault()
                          logInHandler()
                      }
                      }
                >
                    <LogInForm changeHandler={changeHandler}/>
                </form>
            </div>
        </div>

    )
}
