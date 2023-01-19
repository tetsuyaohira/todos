const TaskCardDeleteButton = ({taskCard,setTaskCards}) => {

    const taskCardDeleteButton = (id) => {
        setTaskCards((prev) => {
            return prev.filter((taskCard) => taskCard.id !== id);
        })
    };

    return (
        <div>
            <button className="taskCardDeleteButton"
                    onClick={() => taskCardDeleteButton(taskCard.id)}>
                <i className="fas fa-times"></i>
            </button>
        </div>
    )
}

export default TaskCardDeleteButton
