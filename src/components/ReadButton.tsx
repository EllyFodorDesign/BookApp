// components/client/test/ContactButton.tsx
"use client";

import { styled } from "styled-components";



export const ReadButton = styled.a`
padding: 0.75rem 1.5rem;
  
  font-size: 1rem;
  font-weight: 500;
  border-radius: 0.375rem;
  border: 2px solid
  black;
  cursor: pointer;
  transition: all 0.5s ease;
  margin: 20px;
      background: #1b1917;
      color: hsl(0, 0%, 98%);


  &:hover {
   background: black;
    color: hsl(0, 0%, 98%);
  
  }
`;
export default ReadButton;
