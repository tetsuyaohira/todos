import {v4 as uuid} from 'uuid';
import styled from "styled-components";

const StyledDiv = styled.div`
      margin-left: 1%;
      margin-top: 25px;
    `
const StyledButton = styled.button`
      padding: 10px 18px;
      border-radius: 9999px;
      font-size:30px;
      background-color: rgb(192, 200, 217);
      box-shadow: 3px 3px 8px 1px black;
      cursor: pointer;
      transition: all 0.3s;
      &:hover {
        box-shadow: none;
        transform: translate(3px, 3px);
      }
    `

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
        <StyledDiv>
            <StyledButton onClick={clickHandler}>+</StyledButton>
        </StyledDiv>
    )
}

export default AddTaskCardButton