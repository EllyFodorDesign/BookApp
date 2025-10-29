// components/client/test/ContactButton.tsx
"use client";

import { styled } from "styled-components";

export const ContactButton = styled.a`
  padding: ${({ theme }) => theme.spacing.M};
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);

  font-size: ${({ theme }) => theme.fontSizes.H2};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  border-radius: ${({ theme }) => theme.radii.LG};
  border: 2px solid black;
  cursor: pointer;
 
  transition: all 0.5s ease;
  margin-top: ${({ theme }) => theme.spacing.L};
  margin-bottom: ${({ theme }) => theme.spacing.XL};
  background: #e5a54c;
  color: hsl(0, 1.0101010101010066%, 19.411764705882355%);

  &:hover {
    background: black;
    color: hsl(0, 0%, 98%);
  }
`;
export default ContactButton;
