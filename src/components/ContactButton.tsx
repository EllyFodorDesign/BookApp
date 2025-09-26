// components/client/test/ContactButton.tsx
"use client";

import { styled } from "styled-components";



export const ContactButton = styled.a`
  padding: 0.75rem 2rem;
  font-size: 1.125rem;
  font-weight: 500;
  border-radius: 0.375rem;
  border: 2px solid
    hsl(83.57142857142857, 31.11111111111111%, 17.647058823529413%);
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 20px;
      background: hsl(28.2051282051282, 55.980861244019145%, 59.01960784313726%);
      color: hsl(0, 0%, 98%);


  &:hover {
   background: black;
    color: hsl(0, 0%, 98%);
  }
`;
