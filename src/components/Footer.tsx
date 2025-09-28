import styled from "styled-components";
import { Link } from "react-router-dom";
import MediaQuery from "../styles/mediaQuery";

export const Wrapper = styled.div`
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
`;

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  ${MediaQuery.desktop} {
    max-width: 1600px;
  }
`;

const FooterSection = styled.footer`
  background: hsl(85.16129032258064, 36.47058823529412%, 16.666666666666664%);
  color: hsl(0, 0%, 98%);
  padding: 3rem 0;

  @media (min-width: 768px) {
    margin: 0 auto;
    width: 100%;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: 480px) {
    display: grid;
    grid-template-columns: repeat(1, 2fr);
    gap: 0.5rem;
    margin-left: 1rem;
    margin-top: 0rem;

    justify-content: left;
  }
`;

const Column = styled.div`
  @media (min-width: 480px) {
  }
`;

const ColumnLinksInfo = styled(Column)`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  margin-top: 4rem;
  gap: 60px;

  @media (min-width: 480px) {
    gap: 9rem;
  }

  @media (min-width: 768px) {
    gap: 9rem;
  }
`;

const BrandSection = styled.div`
  @media (min-width: 768px) {
    grid-column: span 2;
  }
`;

const BrandTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: bold;
  margin: 0 0 1rem 0;
`;

const BrandDescription = styled.p`
  color: rgba(249, 250, 251, 0.8);
  margin: 0 0 1rem 0;
  max-width: 24rem;
  font-size: 1.2rem;
`;

const LinksSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const LinksTitle = styled.h4`
  font-weight: 800px;
  font-size: 1rem;
  margin: 0 0 1rem 0;

  @media (min-width: 480px) {
    font-size: 1.1rem;
  }
`;

const LinksList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const LinkItem = styled.li``;

const StyledRouterLink = styled(Link)`
  color: rgba(249, 250, 251, 0.8);
  text-decoration: none;
  transition: color 0.3s ease;
  font-size: 1.1rem;

  &:hover {
    color: hsl(0, 0%, 98%);
  }

  @media (min-width: 480px) {
    font-size: 0.9rem;
  }
`;

const ContactInfo = styled.div`
  color: rgba(249, 250, 251, 0.8);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 1.1rem;

  @media (min-width: 480px) {
    font-size: 0.9rem;
  }
`;

const Divider = styled.div`
  border-top: 1px solid rgba(249, 250, 251, 0.2);
  margin-top: 2rem;
  padding-top: 2rem;
  text-align: center;
`;

const Copyright = styled.p`
  color: rgba(249, 250, 251, 0.8);
  margin: 0;
`;

const Footer = () => {
  return (
    <Wrapper>
      <FooterWrapper>
        <FooterSection>
          <Container>
            <BrandSection>
              <BrandTitle>Ellinor Fodor Johansson</BrandTitle>
              <BrandDescription>
                Skriver om barn med NPF i skolan. Här hittar du böcker och
                resurser för att stödja barn med neuropsykiatriska
                funktionsnedsättningar i skolan.
              </BrandDescription>
            </BrandSection>
            <Column>
              <ColumnLinksInfo>
                <LinksSection>
                  <LinksTitle>Genvägar</LinksTitle>
                  <LinksList>
                    <LinkItem>
                      <StyledRouterLink to="/home">Hem</StyledRouterLink>
                    </LinkItem>
                    <LinkItem>
                      <StyledRouterLink to="/about">
                        Om författaren
                      </StyledRouterLink>
                    </LinkItem>
                    <LinkItem>
                      <StyledRouterLink to="/contact">Kontakt</StyledRouterLink>
                    </LinkItem>
                    <LinkItem>
                      <StyledRouterLink to="/books">Böcker</StyledRouterLink>
                    </LinkItem>
                    <LinkItem>
                      <StyledRouterLink to="/projects">
                        Projekt
                      </StyledRouterLink>
                    </LinkItem>
                  </LinksList>
                </LinksSection>
                <LinksSection>
                  <LinksTitle>Kontakt info</LinksTitle>
                  <ContactInfo>
                    <div>ellinor.j@hotmail.se</div>
                    <div>+46 (0) 738-131 993</div>
                  </ContactInfo>
                </LinksSection>
              </ColumnLinksInfo>
            </Column>
          </Container>
          <Divider>
            <Copyright>
              © 2025 EllyFodor. Alla rättigheter reserverade.
            </Copyright>
          </Divider>
        </FooterSection>
      </FooterWrapper>
    </Wrapper>
  );
};

export default Footer;
