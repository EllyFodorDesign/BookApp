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

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  display: grid;
  grid-template-columns: 1fr; /* mobile = single column */
  grid-template-rows: auto auto;
  grid-template-areas:
    "brand"
    "links";

  @media (min-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FooterSection = styled.footer`
  background: hsl(85.16129032258064, 36.47058823529412%, 16.666666666666664%);
  color: hsl(0, 0%, 98%);

  @media (min-width: 768px) {
    width: 100%;
  }
`;

const BrandSection = styled.div`
  grid-area: brand;
  margin: 0;
  text-align: left;
  max-width: none;
  @media (min-width: 768px) {
  }
`;

const BrandTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: normal;
  margin-bottom: 0.5rem;
  margin-top: 1rem;

  text-align: left;

  @media (min-width: 480px) {
    margin-bottom: 0.5rem;
  }

  @media (min-width: 768px) {
    text-align: left;
    font-size: 1.4rem;
  }
`;

const BrandDescription = styled.p`
  color: rgba(249, 250, 251, 0.8);
  margin: 0;
  padding: 0;
  max-width: 24rem;
  font-size: 1rem;
  text-align: left;

  @media (min-width: 480px) {
    font-size: 1rem;
  }

  @media (min-width: 768px) {
    font-size: 1rem;
    max-width: 70%;
    text-align: left;
  }
`;

const ColumnLinksInfo = styled.div`
  grid-area: links;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 3rem;
  margin-top: 2rem;
  max-width: none;
  width: 100%;
`;

const LinksSection = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 480px) {
    display: flex;
    flex-direction: column;
  }
`;

const ShortCuts = styled(LinksSection)`
  display: flex;
  flex-direction: column;

  @media (min-width: 480px) {
    display: flex;
    flex-direction: column;
  }
`;

const ContactLinks = styled(ShortCuts)`
  display: flex;
  flex-direction: column;

  @media (min-width: 480px) {
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 768px) {
    grid-area: contact;
  }
`;

const LinksTitle = styled.h4`
  font-weight: 800px;
  font-size: 1rem;
  margin: 0 0 1rem 0;

  @media (min-width: 480px) {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }
`;

const LinksList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

const LinkItem = styled.li``;

const StyledRouterLink = styled(Link)`
  color: rgba(249, 250, 251, 0.8);
  text-decoration: none;
  transition: color 0.3s ease;
  font-size: 1rem;

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
  font-size: 1rem;

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

            <ColumnLinksInfo>
              <LinksSection>
                <ShortCuts>
                  <LinksTitle>Genvägar</LinksTitle>
                  <LinksList>
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
                  </LinksList>
                </ShortCuts>
              </LinksSection>
              <ContactLinks>
                <LinksTitle>Kontakt info</LinksTitle>
                <ContactInfo>
                  <div>ellinor.j@hotmail.se</div>
                  <div>+46 (0) 738-131 993</div>
                </ContactInfo>
              </ContactLinks>
            </ColumnLinksInfo>
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
