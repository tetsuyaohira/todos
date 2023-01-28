import {v4 as uuid } from 'uuid';
import styled from "styled-components";

const StyledInput = styled.input`
  width: 100%;
  font-size:1.3rem;
  border-radius: 3px;
  border:none;
  outline:none;
`

const TaskCardInput = ({inputText, setInputText, setTasks}) => {

    const submitHandler = (e) => {
        e.preventDefault()
        if (inputText === '') return;

        const taskId = uuid();
        setTasks((prev) => {
            return [...prev,
                {
                    id: taskId,
                    draggableId: `task-${taskId}`,
                    text: inputText
                }]
        })
        setInputText('')
    }

    const changeHandler = (e) => {
        setInputText(e.target.value)
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <StyledInput type="text"
                       onChange={changeHandler}
                       placeholder="Add a task"
                       value={inputText}/>
            </form>
        </div>
    )
}

export default TaskCardInput
