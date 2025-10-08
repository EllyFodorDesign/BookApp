import React from "react";
import styled from "styled-components";

const HeaderEl = styled.header`
  background: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacing.m} 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.04);
`;

const Inner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.m};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.h1};
  color: ${({ theme }) => theme.colors.primary};
  line-height: 1;
`;

const Subtitle = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.muted};
  font-size: ${({ theme }) => theme.fontSizes.h3};
`;

export default function Header() {
  return (
    <HeaderEl>
      <Inner>
        <div>
          <Title>Ellinor Fodor Johansson</Title>
          <Subtitle>Författare — skriver om barn med NPF i skolan</Subtitle>
        </div>
      </Inner>
    </HeaderEl>
  );
}
