import {useState} from "react";

const TaskCardTitle = () => {

    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState('new Title');


    const clickHandler = () => {
        setIsEditing(true)
    }

    const changeHandler = (e) => {
        setTitle(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        setIsEditing(false);
    }

    const blurHandler = () => {
        setIsEditing(false);
    }

    return (
        <div onClick={clickHandler} className="taskCardInputArea">
            {isEditing ?
                <form onSubmit={submitHandler}>
                    <input className="taskCArdInput"
                           onChange={changeHandler}
                           onBlur={blurHandler}
                           autoFocus
                           maxLength={20}
                           value={title}></input>
                </form>
                : <h3>{title}</h3>
            }
        </div>
    )
}

export default TaskCardTitle
