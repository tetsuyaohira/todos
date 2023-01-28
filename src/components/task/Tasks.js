import Task from "./Task";
import {DragDropContext, Droppable} from "react-beautiful-dnd";

const Tasks = ({tasks, setTasks}) => {
    const dragEndHandler = (result) => {
        if (!result.destination) return;

        const newTasks = [...tasks];
        const [reorderedTask] = newTasks.splice(result.source.index, 1);
        newTasks.splice(result.destination.index, 0, reorderedTask);
        setTasks(newTasks);
    }

    return (
        <div>
            <DragDropContext onDragEnd={dragEndHandler}>
                <Droppable droppableId="droppable">
                    {(provided) =>
                        <div {...provided.droppableProps} ref={provided.innerRef}>
                            {tasks.map((task, index) =>
                                <div key={task.id}>
                                    <Task
                                        index={index}
                                        task={task}
                                        setTasks={setTasks}
                                    />
                                </div>
                            )}
                            {provided.placeholder}
                        </div>
                    }
                </Droppable>
            </DragDropContext>
        </div>
    )
}

export default Tasks
