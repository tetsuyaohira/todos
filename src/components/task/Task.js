import {Draggable} from "react-beautiful-dnd";
import styled from "styled-components";

const StyledButton = styled.button`
      margin-right:9px;
      border:none;
      cursor:pointer;
    `

const StyledTaskTextDiv = styled.div`
      margin-left:12px;
    `

const StyledTaskBoxDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 17px 0;
  margin-top: 10px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 1px 1px 1px 1px rgb(75,75,75);
`

const Task = ({index, task, setTasks}) => {

    const clickHandler = (task) => {
        console.log(task)

        setTasks((prev) => {
            return prev.filter((_task) => _task.id !== task.id)
        })
    }

    return (
        <Draggable index={index} draggableId={task.draggableId}>
            {(provided) =>
                <StyledTaskBoxDiv
                     key={task.id}
                     ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <StyledTaskTextDiv >{task.text}</StyledTaskTextDiv>
                    <StyledButton onClick={() => clickHandler(task)}>
                        <i className="fa-regular fa-trash-can"></i>
                    </StyledButton>
                </StyledTaskBoxDiv>
            }

        </Draggable>
    )
}

export default Task