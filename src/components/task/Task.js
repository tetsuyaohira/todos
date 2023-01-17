import {Draggable} from "react-beautiful-dnd";

const Task = ({index, task, tasks, setTasks}) => {

    const clickHandler = (task) => {
        console.log(task)

        setTasks((prev) => {
            return prev.filter((_task) => _task.id !== task.id)
        })

    }

    return (
        <Draggable index={index} draggableId={task.draggableId}>
            {(provided) =>
                <div className="taskBox"
                     key={task.id}
                     ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <p className="taskText">{task.text}</p>
                    <button className="taskTrashButton" onClick={() => clickHandler(task)}>
                        <i className="fa-regular fa-trash-can"></i>
                    </button>
                </div>
            }

        </Draggable>
    )
}

export default Task