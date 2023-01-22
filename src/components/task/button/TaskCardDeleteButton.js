import styled from "styled-components";

const TaskCardDeleteButton = ({taskCard, setTaskCards}) => {

    const taskCardDeleteButton = (id) => {
        setTaskCards((prev) => {
            return prev.filter((taskCard) => taskCard.id !== id);
        })
    };

    const StyledDiv = styled.div`
      border: none;
      cursor: pointer;
      background-color: #e0e0e0;
      font-size: 16px;
      color: #af1212;
    `

    return (
        <div>
            <StyledDiv
                onClick={() => taskCardDeleteButton(taskCard.id)}>
                <i className="fas fa-times"></i>
            </StyledDiv>
        </div>
    )
}

export default TaskCardDeleteButton
