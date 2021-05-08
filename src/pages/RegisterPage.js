import React, {useContext, useEffect} from 'react'
import {useFormChanger} from "../hooks/useFormChanger";
import {logInAction} from "../functions/logInAction"
import {LogInForm} from "../components/LogInForm";

export const RegisterPage = () => {
    const {changeHandler, form} = useFormChanger()

    return (
        <div className='row justify-content-md-center'>
            <div className="col col-md-4">
                <form name="register"
                      onSubmit={e => {
                          e.preventDefault()
                          logInAction(e.target.name, form)
                      }}>
                  <LogInForm changeHandler={changeHandler}/>
                </form>
            </div>
        </div>
    )
}
