import {useState} from "react";
import styled from "styled-components";

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

    const StyledDiv = styled.div`
      margin-bottom: 10px;
      /*width: 30%;*/
      cursor: pointer;
    `
    const StyledInput = styled.input`
      width: 80px;
      font-size: 1.1rem;
      padding:4px 6px;
      border-radius: 3px;
      border:none;
      outline:none;
    `

    return (
        <StyledDiv onClick={clickHandler} >
            {isEditing ?
                <form onSubmit={submitHandler}>
                    <StyledInput
                           onChange={changeHandler}
                           onBlur={blurHandler}
                           autoFocus
                           maxLength={20}
                           value={title}></StyledInput>
                </form>
                : <h3>{title}</h3>
            }
        </StyledDiv>
    )
}

export default TaskCardTitle
