import React from "react";
import ListUser from "./ListUser"
import style from "./User.module.css"
import Section from "./Section";

const User = (props) => {
    const users = props.users
    const listRemoveHandler = (index) => {
        props.onRemoveUser(index)
    }
    let content = (users.length === 0) ? (<h2>No users Found</h2>):
    users.map((user,index) =>{
        return(<ListUser name={user.name} age={user.age} key={user.id} index={index} onListRemove={listRemoveHandler} />)
    })
    return(
        <Section className={style.user}>
            {content}
        </Section>
    )
}
export default User