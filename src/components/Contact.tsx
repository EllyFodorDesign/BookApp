import styled from "styled-components";

const ContactSection = styled.section`
  padding: 5rem 0;
  background: hsl(0, 0%, 98%);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Content = styled.div`
  max-width: 64rem;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const Title = styled.h2`
  font-size: 1.875rem;
  font-weight: bold;
  color: hsl(85, 15%, 25%);
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 2.25rem;
  }
`;

const Description = styled.p`
  font-size: 1.125rem;
  color: hsl(85, 8%, 45%);
`;

const Grid = styled.div`
  display: grid;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Card = styled.div`
  background: hsl(0, 0%, 100%);
  border-radius: 0.5rem;
  border: 1px solid hsl(85, 15%, 85%);
`;

const CardHeader = styled.div`
  padding: 1.5rem 1.5rem 0;
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: hsl(85, 15%, 25%);
  margin: 0 0 0.5rem 0;
`;

const CardDescription = styled.p`
  color: hsl(85, 8%, 45%);
  margin: 0;
`;

const CardContent = styled.div`
  padding: 0 1.5rem 1.5rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const InputRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid hsl(85, 15%, 85%);
  border-radius: 0.375rem;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: hsl(85, 35%, 35%);
    box-shadow: 0 0 0 2px hsl(85, 35%, 35%, 0.2);
  }

  &::placeholder {
    color: hsl(85, 8%, 45%);
  }
`;

const Textarea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid hsl(85, 15%, 85%);
  border-radius: 0.375rem;
  font-size: 1rem;
  min-height: 8rem;
  resize: vertical;
  font-family: inherit;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: hsl(85, 35%, 35%);
    box-shadow: 0 0 0 2px hsl(85, 35%, 35%, 0.2);
  }

  &::placeholder {
    color: hsl(85, 8%, 45%);
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  background: hsl(85, 35%, 35%);
  color: hsl(0, 0%, 98%);
  border: none;
  border-radius: 0.375rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background: hsl(85, 40%, 30%);
  }
`;

const InfoCard = styled(Card)`
  height: fit-content;
`;

const InfoContent = styled.div`
  padding: 1.5rem;
`;

const InfoTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: hsl(85, 15%, 25%);
  margin: 0 0 0.5rem 0;
`;

const InfoText = styled.p`
  color: hsl(85, 8%, 45%);
  margin: 0;
  line-height: 1.6;
`;

const Contact = () => {
  return (
    <ContactSection id="Contact">
      <Container>
        <Content>
          <Header>
            <Title>Get In Touch</Title>
            <Description>
              Ready to start your next project? Let's discuss how we can help
              you achieve your goals.
            </Description>
          </Header>

          <Grid>
            <Card>
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
                <CardDescription>
                  Fill out the form and we'll get back to you as soon as
                  possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form>
                  <InputRow>
                    <Input placeholder="First name" />
                    <Input placeholder="Last name" />
                  </InputRow>
                  <Input placeholder="Email address" type="email" />
                  <Input placeholder="Subject" />
                  <Textarea placeholder="Your message" />
                  <Button type="submit">Send Message</Button>
                </Form>
              </CardContent>
            </Card>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              <InfoCard>
                <InfoContent>
                  <InfoTitle>Email</InfoTitle>
                  <InfoText>hello@bitjo.com</InfoText>
                </InfoContent>
              </InfoCard>

              <InfoCard>
                <InfoContent>
                  <InfoTitle>Phone</InfoTitle>
                  <InfoText>+1 (555) 123-4567</InfoText>
                </InfoContent>
              </InfoCard>

              <InfoCard>
                <InfoContent>
                  <InfoTitle>Address</InfoTitle>
                  <InfoText>
                    123 Business Street
                    <br />
                    Suite 100
                    <br />
                    City, State 12345
                  </InfoText>
                </InfoContent>
              </InfoCard>
            </div>
          </Grid>
        </Content>
      </Container>
    </ContactSection>
  );
};

export default Contact;
