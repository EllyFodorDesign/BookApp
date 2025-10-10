import { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Bell } from "lucide-react";
import { toast } from "sonner";

// ====== Styled Components ======
const fadeInScale = keyframes`
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
`;

const Section = styled.section`
  padding: 6rem 1.5rem;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  max-width: 48rem;
  width: 100%;
`;

const Card = styled.div`
  background: linear-gradient(
    to bottom right,
    rgba(0, 122, 255, 0.1),
    rgba(255, 100, 150, 0.1),
    rgba(100, 255, 200, 0.2)
  );
  border-radius: 1.5rem;
  padding: 3rem;
  border: 1px solid rgba(0, 122, 255, 0.2);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
  animation: ${fadeInScale} 0.4s ease forwards;
  text-align: center;
`;

const IconWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background: rgba(255, 200, 0, 0.15);
  border-radius: 9999px;
  margin-bottom: 1.5rem;

  svg {
    width: 2rem;
    height: 2rem;
    color: #007aff;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #111;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Description = styled.p`
  font-size: 1.125rem;
  color: #555;
  margin-bottom: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 28rem;
  margin: 0 auto;
  padding-top: 1rem;

  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

const Input = styled.input`
  flex: 1;
  height: 3rem;
  padding: 0 1.5rem;
  font-size: 1rem;
  color: #111;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  transition: border-color 0.2s;

  &::placeholder {
    color: #888;
  }

  &:focus {
    border-color: #007aff;
    outline: none;
  }
`;

const Button = styled.button`
  height: 3rem;
  padding: 0 2rem;
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  background: #007aff;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 122, 255, 0.25);
  transition: transform 0.2s;

  &:hover {
    background: #0066d6;
    transform: scale(1.05);
  }
`;

const FooterNote = styled.p`
  font-size: 0.875rem;
  color: #777;
  margin-top: 1rem;
`;

// ====== Component ======
const NotifyForm = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Tack! Vi meddelar dig när boken är tillgänglig.", {
        description: `Vi skickar ett mail till ${email}`,
      });
      setEmail("");
    }
  };

  return (
    <Section>
      <Container>
        <Card>
          <IconWrapper>
            <Bell />
          </IconWrapper>

          <Title>Få Besked När Boken Släpps</Title>

          <Description>
            Registrera din e-postadress så meddelar vi dig så snart boken är
            tillgänglig
          </Description>

          <Form onSubmit={handleSubmit}>
            <Input
              type="email"
              placeholder="din.email@exempel.se"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button type="submit">Anmäl Intresse</Button>
          </Form>

          <FooterNote>
            Vi respekterar din integritet och skickar endast relevanta
            uppdateringar
          </FooterNote>
        </Card>
      </Container>
    </Section>
  );
};

export default NotifyForm;
