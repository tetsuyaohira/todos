import {useState} from "react";
import TaskCard from "./TaskCard";
import AddTaskCardButton from "./button/AddTaskCardButton";
import {v4 as uuid} from 'uuid';
import {DragDropContext, Droppable} from "react-beautiful-dnd";
import styled from "styled-components";

const TaskCards = () => {
    const taskCardId = uuid();
    const [taskCards, setTaskCards] = useState([{
        id: taskCardId,
        draggableId: `item-${taskCardId}`
    }]);

    const dragEndHandler = (result) => {
        if (!result.destination) return;
        const newTaskCards = [...taskCards];
        const [reorderedTaskCard] = newTaskCards.splice(result.source.index, 1);
        newTaskCards.splice(result.destination.index, 0, reorderedTaskCard);
        setTaskCards(newTaskCards);
    }

    const StyledTaskCardsDiv = styled.div`
      display: flex;
      justify-content: flex-start;
      align-items:flex-start;
      flex-wrap: wrap;
    `

    return (
        <DragDropContext onDragEnd={dragEndHandler}>
            <Droppable droppableId="taskCards" direction="horizontal">
                {(provided) => (
                    <StyledTaskCardsDiv
                         {...provided.droppableProps}
                         ref={provided.innerRef}
                    >
                        {taskCards.map((taskCard, index) => {
                            return <TaskCard key={taskCard.id} index={index} taskCard={taskCard}
                                             setTaskCards={setTaskCards}/>
                        })}
                        {provided.placeholder}
                        <AddTaskCardButton
                            setTaskCards={setTaskCards}
                        />
                    </StyledTaskCardsDiv>
                )}
            </Droppable>
        </DragDropContext>
    )
}

export default TaskCards