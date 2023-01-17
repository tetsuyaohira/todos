import {v4 as uuid } from 'uuid';

const TaskCardInput = ({inputText, setInputText, tasks, setTasks}) => {

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
                <input type="text"
                       onChange={changeHandler}
                       placeholder="Add a task"
                       className="taskAddInput"
                       value={inputText}/>
            </form>
        </div>
    )
}

export default TaskCardInput
