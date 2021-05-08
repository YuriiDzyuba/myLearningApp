import {useState} from "react";


export const useFormChanger = () => {

    const [form, setForm] = useState(
        {
            email: '',
            password: ''
        }
    )

    const changeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value}
        )
    }

    return {changeHandler, form}
}
