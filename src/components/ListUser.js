import style from './ListUser.module.css'
import Section from "./Section";
const ListUser =(props) => {
    const removeUser = ()=> {
        props.onListRemove(props.index)
    }
    return(
        <Section className={`${style['list-user']}`} onClick={removeUser}>
            {`${props.name} (${props.age} years old.)`}
        </Section>
    )
}
export default ListUser