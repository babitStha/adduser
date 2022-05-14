import { useState, useRef } from "react";
import styles from "./AddUserForm.module.css"
import Section from "./Section";
import Button from "./UI/Button";
import Modal from "./Modal";
const AddUserForm = (props) =>{
    const name = useRef();
    const age = useRef();
    const [error, setError] = useState()

const onSubmitHandler =(event) =>{
    console.log(event)
    const user = {
        id: Math.random().toString(),
        name: name.current.value,
        age: age.current.value,
    }
    if ((name.current.value.length === 0) || (age.current.value.length === 0)){
        setError({
            title: "Invalid Data",
            body: "Please provide valid Data",
        })
        return
    }
    if(+age < 0){
        setError({
            title: "Invalid Age",
            body: "Age Should be greater than 0",
        })
        return
    }
    props.onAddUser(user)
    name.current.value = ''
    age.current.value = ''
}
const onCloseHandler = ()=>{
    setError(null)
}
    return(
        <Section className={`${styles['add-user-form']}`}>
            <div className={`${styles['add-user-input']}`}>
                <label> Username</label>
                <input type="text" ref={name}/>
            </div>
            <div className={`${styles['add-user-input']}`}>
                <label> Age</label>
                <input type="number" ref={age}/>
            </div>
            <Button type="submit" onClick={onSubmitHandler} >Add User</Button>
            {error && <Modal title={error.title} body={error.body} onClose= {onCloseHandler}/>}
        </Section>
    )
}
export default AddUserForm