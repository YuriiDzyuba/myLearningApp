import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {LoginPage} from "../pages/LoginPage";
import {CreateLesson} from "../pages/CreateLesson";
import {HomePage} from "../pages/HomePage";
import {RegisterPage} from "../pages/RegisterPage";
import {MyLessons} from "../pages/MyLessons";
import {EditLesson} from "../pages/EditLesson";
import {PlayLesson} from "../pages/PlayLesson";
import {CreateLessonToApp} from "../pages/CreateLessonToApp/CreateLessonToApp";

export const Routes = (isAutentificate) => {
    console.log(isAutentificate, "is Auth")
    if (isAutentificate) {
        return (
            <Switch>
                <Route path="/myLessons">
                    <MyLessons/>
                </Route>
                <Route path="/createLesson">
                    <CreateLesson/>
                </Route>
                <Route path="/createLessonToApp">
                    <CreateLessonToApp/>
                </Route>
                <Route path="/lesson/:id">

                </Route>
                <Route path="/editLesson/:id">
                    <EditLesson/>
                </Route>
                <Route path="/play/:id">
                    <PlayLesson/>
                </Route>
                <Redirect to="/myLessons"/>
            </Switch>
        )
    }
    return (
        <Switch>
            <Route path="/" exact>
                <HomePage/>
            </Route>
            <Route path="/login" exact>
                <LoginPage/>
            </Route>
            <Route path="/registration">
                <RegisterPage/>
            </Route>
            <Redirect to="/"/>
        </Switch>
    )
}
