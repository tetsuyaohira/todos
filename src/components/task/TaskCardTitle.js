import {useState} from "react";
import styled from "styled-components";

const StyledTaskCardInputAreaDiv = styled.div`
      margin-bottom: 10px;
      /*width: 30%;*/
      cursor: pointer;
    `
const StyledTaskCardInputDiv = styled.input`
      width: 80px;
      font-size: 1.1rem;
      padding:4px 6px;
      border-radius: 3px;
      border:none;
      outline:none;
    `

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
        <StyledTaskCardInputAreaDiv onClick={clickHandler} >
            {isEditing ?
                <form onSubmit={submitHandler}>
                    <StyledTaskCardInputDiv
                           onChange={changeHandler}
                           onBlur={blurHandler}
                           autoFocus
                           maxLength={20}
                           value={title}>
                    </StyledTaskCardInputDiv>
                </form>
                : <h3>{title}</h3>
            }
        </StyledTaskCardInputAreaDiv>
    )
}

export default TaskCardTitle
