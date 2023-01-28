import {useState} from "react";
import TaskCardDeleteButton from "./button/TaskCardDeleteButton";
import TaskCardTitle from "./TaskCardTitle";
import TaskCardInput from "./input/TaskCardInput";
import Tasks from "./Tasks";
import {Draggable} from "react-beautiful-dnd";
import styled from "styled-components";

const StyledTaskCardDiv = styled.div`
      width:250px;
      padding: 10px 25px;
      margin: 10px 1%;
      background-color: #e0e0e0;
      border-radius: 5px;
    `
const StyledTaskCardHeaderDiv = styled.div`
      display:flex;
      justify-content: space-between;
    `

const TaskCard = ({index, taskCard, setTaskCards}) => {

    const [inputText, setInputText] = useState('');
    const [tasks, setTasks] = useState([]);

    return (
        <Draggable draggableId={taskCard.id} index={index}>
            {(provided) => (
                <StyledTaskCardDiv className="taskCard"
                     {...provided.draggableProps}
                     ref={provided.innerRef}
                >
                    <StyledTaskCardHeaderDiv
                         {...provided.dragHandleProps}>
                        <TaskCardTitle/>
                        <TaskCardDeleteButton
                            taskCard={taskCard}
                            setTaskCards={setTaskCards}
                        />
                    </StyledTaskCardHeaderDiv>
                    <TaskCardInput
                        inputText={inputText}
                        setInputText={setInputText}
                        setTasks={setTasks}
                    />
                    <Tasks tasks={tasks}
                           setTasks={setTasks}/>
                </StyledTaskCardDiv>
            )}
        </Draggable>

    )
}

export default TaskCard