import { styled } from "styled-components";

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;


@media (min-width: 768px) {
  margin-top: 2rem;
}
`;

const Button = styled.button`
 
  font-size: 1rem;
  border-radius: 0.3rem;
  cursor: pointer;
  transition: all 0.3s ease;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 14px;
  padding-bottom: 14px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
  font-size: 1.5rem;
  
}
;
  
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
