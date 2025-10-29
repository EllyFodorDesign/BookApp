import { styled } from "styled-components";

export const Heading = styled.h1`
  font-size: 1.2rem;
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  color: hsl(85, 15%, 25%);

  text-align: center;

  margin-bottom: ${({ theme }) => theme.spacing.XL};

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const PageTitle = styled.h1`
  //Main heading

  font-size: 2rem;
  margin: 20px;
  text-align: center;
`;

export const HeadingTwo = styled(Heading)`
  margin: ${({ theme }) => theme.spacing.XS};
  margin-top: ${({ theme }) => theme.spacing.L};
`;

export const Title = styled.h2`
  font-size: 1.875rem;
  font-weight: bold;
  color: hsl(85, 15%, 25%);
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    font-size: 2.25rem;
  }
`;

export const Description = styled.p`
  font-size: 1.125rem;
  color: hsl(85, 8%, 45%);
  text-align: left;
`;

export const PlaceholderText = styled.div`
  font-size: 1.75rem;
  font-weight: bold;
  color: hsl(85, 35%, 35%);
  margin-bottom: 1rem;
`;

export const PlaceholderSubtext = styled.div`
  color: hsl(85, 8%, 45%);
`;

export const PlaceholderTextAuthor = styled.div`
  font-size: 2rem;
  font-weight: 400px;
  color: hsl(85, 35%, 35%);
  margin-bottom: 1rem;
`;

export const PlaceholderSubtextAuthor = styled.div`
  color: hsl(85, 8%, 45%);
  font-size: 1rem;
  margin-bottom: 2rem;
  margin-left: 1rem;
  margin-right: 1rem;
  text-align: left;
`;

export const TextContent = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Content = styled.div`
  max-width: 64rem;
  margin: 0 auto;
  text-align: center;
`;

export const SubHeading = styled.h2``;
