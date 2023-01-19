import {v4 as uuid} from 'uuid';

const AddTaskCardButton = ({setTaskCards}) => {

    const clickHandler = () => {
        const taskCardId = uuid();

        setTaskCards((prev) => {
            return [...prev,
                {
                    id: taskCardId,
                    draggableId: `item-${taskCardId}`,
                }];
        })
    }

    return (
        <div className="addTaskCardButtonArea">
            <button className="addTaskCardButton" onClick={clickHandler}>+</button>
        </div>
    )
}

export default AddTaskCardButton