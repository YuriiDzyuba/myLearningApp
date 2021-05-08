import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import {App} from './App';
import firebase from "firebase";
import 'firebase/firestore'
import 'firebase/auth'
import {FireBaseContext} from "./context/FireBaseContext";
import {firebaseConfig} from "./firebaseConfig";


firebase.initializeApp(firebaseConfig)
const auth = firebase.auth()
const firestore = firebase.firestore()

ReactDOM.render(
    <React.StrictMode>
        <FireBaseContext.Provider value={{auth, firestore}}>
            <App/>
        </FireBaseContext.Provider>
    </React.StrictMode>,
    document.getElementById('root')
);


