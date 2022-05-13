import classes from "./Modal.module.css"
import Button from "./UI/Button"
import Section from "./Section"

const Modal = props => {
    return(
        <Section className={`${classes['modal-container']}`}>
            <div className={classes.modal}>
                <div className={classes.title}>
                    <h1>{props.title}</h1>
                </div>
                <div className={classes.body}>
                    <p>{props.body}</p>
                </div>
                <div className={classes.title}>
                    <Button onClick={props.onClose}>Close</Button>
                </div>
            </div>
        </Section>
    )
}
export default Modal