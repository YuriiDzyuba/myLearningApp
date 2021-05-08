import {createContext} from 'react'

export const FireBaseContext = createContext({
    firebase: null,
    auth: null,
    firestore: null,
    currentUser: null
})
