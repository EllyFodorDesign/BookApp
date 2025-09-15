import styled from "styled-components";

const ContactSection = styled.section`
  padding: 5rem 0;
  background: hsl(0, 0%, 98%);
`;

const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Content = styled.div`
  max-width: 100%;
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
  display: column;
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

const Contact = () => {
  return (
    <ContactSection id="Contact">
      <Container>
        <Content>
          <Header>
            <Title>Hör av dig</Title>
            <Description></Description>
          </Header>

          <Grid>
            <Card>
              <CardHeader>
                <CardDescription></CardDescription>
              </CardHeader>
              <CardContent>
                <Form>
                  <InputRow>
                    <Input placeholder="Förnamn" />
                    <Input placeholder="Efternamn" />
                  </InputRow>
                  <Input placeholder="Email" type="email" />
                  <Input placeholder="Ämne" />
                  <Textarea placeholder="Ditt meddelande" />
                  <Button type="submit">Skicka</Button>
                </Form>
              </CardContent>
            </Card>
          </Grid>
        </Content>
      </Container>
    </ContactSection>
  );
};

export default Contact;
