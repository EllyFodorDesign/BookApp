import { styled } from "styled-components";

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
`;

const Button = styled.button<{ $variant?: "outline" }>`
  padding: 0.75rem 2rem;
  font-size: 1.125rem;
  font-weight: 500;
  border-radius: 0.375rem;
  border: 2px solid
    hsl(83.57142857142857, 31.11111111111111%, 17.647058823529413%);
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 20px;

  ${(props) =>
    props.$variant === "outline"
      ? `
      background: transparent;
      color: hsl(85.16129032258065, 32.631578947368425%, 18.627450980392158%);
      &:hover {
        background: hsl(85, 35%, 35%);
        color: hsl(0, 6.89655172413793%, 54.509803921568626%);
      }
    `
      : `
      background: hsl(75, 73.41772151898734%, 30.980392156862745%);
      color: hsl(0, 0%, 98%);
      &:hover {
        background: hsl(84.77064220183486, 63.74269005847953%, 33.529411764705884%);
      }
    `}
`;
export { ButtonGroup, Button };
