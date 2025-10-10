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
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  max-width: 48rem;
  width: 100%;
`;

const Card = styled.div`
  background: ${({ theme }) => theme.colors.cardBackground};
  border-radius: 1.5rem;
  padding: ${({ theme }) => theme.spacing.M} ${({ theme }) => theme.spacing.XXL};
  margin: ${({ theme }) => theme.spacing.S};

  border: 0.5px solid rgba(127, 129, 131, 0.2);
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.05);
  animation: ${fadeInScale} 0.4s ease forwards;
  text-align: center;
`;

const IconWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0rem;
  background: rgba(255, 200, 0, 0.15);
  border-radius: 9999px;
  margin-bottom: ${({ theme }) => theme.spacing.XXS};

  svg {
    width: 2rem;
    height: 2rem;
    color: #15712f;
  }
`;

const Description = styled.p`
  font-size: 1.125rem;
  color: #555;
  margin-bottom: 0;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 28rem;
  margin-left: ${({ theme }) => theme.spacing.XS};
  margin-bottom: ${({ theme }) => theme.spacing.L};
  margin-top: ${({ theme }) => theme.spacing.S};
  padding-top: 1rem;

  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

const Input = styled.input`
  flex: 1;
  height: 3rem;
  padding: ${({ theme }) => theme.spacing.S};
  margin-bottom: ${({ theme }) => theme.spacing.S};
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
  color: #0f0f0f;
  background: #71b676;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(8, 8, 8, 0.25);
  transition: transform 0.2s;

  &:hover {
    background: #00c8d6;
    transform: scale(1.05);
  }
`;

const FooterNote = styled.p`
  font-size: 0.875rem;
  color: #777;
  margin-top: ${({ theme }) => theme.spacing.M};
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

          <Description>
            Registrera din e-postadress för notis om boksläpp!
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

          <FooterNote>E-postadress delas ej med tredje part.</FooterNote>
        </Card>
      </Container>
    </Section>
  );
};

export default NotifyForm;
