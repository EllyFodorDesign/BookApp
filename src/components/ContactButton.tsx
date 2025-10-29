// components/client/test/ContactButton.tsx
"use client";

import { styled } from "styled-components";

export const ContactButton = styled.a`
  padding: ${({ theme }) => theme.spacing.M};

  font-size: ${({ theme }) => theme.fontSizes.H2};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  border-radius: ${({ theme }) => theme.radii.LG};
  border: 2px solid black;
  cursor: pointer;
  /*add shadow so the button stands out*/
  transition: all 0.5s ease;
  margin-top: ${({ theme }) => theme.spacing.L};
  margin-bottom: ${({ theme }) => theme.spacing.XL};
  background: #e5a54c;
  color: hsl(0, 80%, 5.88235294117647%);

  &:hover {
    background: black;
    color: hsl(0, 0%, 98%);
  }
`;
export default ContactButton;
