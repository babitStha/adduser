import { useState } from "react";
import styles from "./AddUserForm.module.css"
import Section from "./Section";
import Button from "./UI/Button";
import Modal from "./Modal";
const AddUserForm = (props) =>{
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [error, setError] = useState()

    const userNameChangeHandler = (event) =>{
        setName(event.target.value)
        console.log(event.target.value)
    }
    const ageChangeHandler = (event) =>{
        setAge(event.target.value)
        console.log(event.target.value)
    }
const onSubmitHandler =(event) =>{
    console.log(event)
    const user = {
        id: Math.random().toString(),
        name: name,
        age: age,
    }
    if ((name.length === 0) || (age.length === 0)){
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
    setName('')
    setAge('')
}
const onCloseHandler = ()=>{
    setError(null)
}
    return(
        <Section className={`${styles['add-user-form']}`}>
            <div className={`${styles['add-user-input']}`}>
                <label> Username</label>
                <input type="text" onChange={userNameChangeHandler} value={name}/>
            </div>
            <div className={`${styles['add-user-input']}`}>
                <label> Age</label>
                <input onChange={ageChangeHandler} type="number" value={age}/>
            </div>
            <Button type="submit" onClick={onSubmitHandler} >Add User</Button>
            {error && <Modal title={error.title} body={error.body} onClose= {onCloseHandler}/>}
        </Section>
    )
}
export default AddUserForm