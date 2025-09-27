import { styled } from "styled-components";

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
`;

const Button = styled.button`
  padding: 0.75rem 2rem;
  font-size: 1rem;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 20px;

  /* Default styles */
  background-color: #0070f3;
  color: #fff;
  border: none;

  /* Optional hover effect */
  &:hover {
    opacity: 0.9;
  }
`;

export { ButtonGroup, Button };
