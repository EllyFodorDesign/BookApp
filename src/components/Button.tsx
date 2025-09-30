import { styled } from "styled-components";

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
 
  font-size: 1.2rem;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 20px;

  /* Default styles */
  background-color: #dedede;
  color: black;
  border: 2px solid black;

  /* Optional hover effect */
  &:hover {
    opacity: 0.9;
  }
`;

export { ButtonGroup, Button };
