// components/client/test/ContactButton.tsx
"use client";

import { styled } from "styled-components";



export const ContactButton = styled.a`
padding: 0.75rem 1.5rem;
  
  font-size: 1.125rem;
  font-weight: 500;
  border-radius: 0.375rem;
  border: 2px solid
  black;
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 20px;
      background: #c99d60;
      color: hsl(0, 0%, 98%);


  &:hover {
   background: black;
    color: hsl(0, 0%, 98%);
  }
`;
