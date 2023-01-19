import {useState} from "react";
import TaskCardDeleteButton from "./button/TaskCardDeleteButton";
import TaskCardTitle from "./TaskCardTitle";
import TaskAddInput from "./input/TaskAddInput";
import Tasks from "./Tasks";
import {Draggable} from "react-beautiful-dnd";

const TaskCard = ({index, taskCard, setTaskCards}) => {

    const [inputText, setInputText] = useState('');
    const [tasks, setTasks] = useState([]);

    return (
        <Draggable draggableId={taskCard.id} index={index}>
            {(provided) => (
                <div className="taskCard"
                     {...provided.draggableProps}
                     ref={provided.innerRef}
                >
                    <div className="taskCardHeader"
                         {...provided.dragHandleProps}>
                        <TaskCardTitle/>
                        <TaskCardDeleteButton
                            taskCard={taskCard}
                            setTaskCards={setTaskCards}
                        />
                    </div>
                    <TaskAddInput
                        inputText={inputText}
                        setInputText={setInputText}
                        tasks={tasks}
                        setTasks={setTasks}
                    />
                    <Tasks inputText={inputText}
                           tasks={tasks}
                           setTasks={setTasks}/>
                </div>
            )}
        </Draggable>

    )
}

export default TaskCard