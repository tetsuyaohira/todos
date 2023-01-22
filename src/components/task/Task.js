import {Draggable} from "react-beautiful-dnd";
import styled from "styled-components";

const Task = ({index, task, tasks, setTasks}) => {

    const clickHandler = (task) => {
        console.log(task)

        setTasks((prev) => {
            return prev.filter((_task) => _task.id !== task.id)
        })
    }

    const StyledButton = styled.button`
      margin-right:9px;
      border:none;
      cursor:pointer;
    `

    const StyledTaskText = styled.div`
      margin-left:12px;
    `

    return (
        <Draggable index={index} draggableId={task.draggableId}>
            {(provided) =>
                <div className="taskBox"
                     key={task.id}
                     ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <StyledTaskText >{task.text}</StyledTaskText>
                    <StyledButton onClick={() => clickHandler(task)}>
                        <i className="fa-regular fa-trash-can"></i>
                    </StyledButton>
                </div>
            }

        </Draggable>
    )
}

export default Task