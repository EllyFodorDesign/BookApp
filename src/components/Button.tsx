import { styled } from "styled-components";


const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
`;

const Button = styled.button<{ $variant?: "primary" | "secondary" | "form" }>`
  padding: 0.75rem 2rem;
  font-size: ${({ theme }) => theme.fontSizes.button};
  border-radius: 0.375rem;
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 20px;

  ${({ $variant, theme }) => {
    const btn = $variant ? theme.button[$variant] : theme.button.primary;
    return `
      background: ${btn.backgroundColor || btn.background};
      color: ${btn.color};
      border: ${btn.border || "none"};
    `;
  }}
`;

export { ButtonGroup, Button };
