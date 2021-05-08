import firebase from "firebase";

export const logInAction = async (name, form) => {

    const {email, password} = form

    if (name ==="register") {
        try {
            const response = await firebase.auth().createUserWithEmailAndPassword(email, password)
            console.log(response, "response")
        } catch (e) {
            console.log(e)
        }
    } else if (name ==="logIN"){
        try {
            firebase.auth().signInWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    return (userCredential.user)
                })

        } catch (e) {
            console.log(e)
            return false
        }
    }
}
