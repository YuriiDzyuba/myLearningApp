import React, {useContext} from 'react';
import {BrowserRouter} from 'react-router-dom'
import './App.scss';
import {Routes} from "./routes/Routes";
import {Navbar} from "./components/Navbar";
import {FireBaseContext} from "./context/FireBaseContext";
import {useAuthState} from "react-firebase-hooks/auth";
import {Loader} from "./components/Loader";
import {Provider} from "react-redux";
import {store} from "./redux/store";
import {ModalProvider} from "react-simple-hook-modal";

export const  App =() =>{

    const {auth} = useContext(FireBaseContext)
    const [user, loading, error] = useAuthState(auth)
    const routes = Routes(!!user)

    return (
        <Provider store={store}>
        <BrowserRouter>
            <div className="App">
                <Navbar />
                <ModalProvider>
                <div className="container-fluid">
                    {loading ? <Loader/> : routes}
                </div>
                </ModalProvider>
            </div>
        </BrowserRouter>
        </Provider>
    );
}

