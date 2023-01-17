import {useState} from "react";
import TaskCardDeleteButton from "./button/TaskCardDeleteButton";
import TaskCardTitle from "./TaskCardTitle";
import TaskAddInput from "./input/TaskAddInput";
import Tasks from "./Tasks";

const TaskCard = () => {

    const [inputText, setInputText] = useState('');
    const [tasks, setTasks] = useState([]);

    return (
        <div className="taskCard">
            <TaskCardTitle/>
            <TaskCardDeleteButton/>
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
    )
}

export default TaskCard