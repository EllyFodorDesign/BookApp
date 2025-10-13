import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { Bell } from "lucide-react";
import { toast } from "sonner";
import MediaQuery from "@/styles/mediaQuery";
import { MainSection } from "@/styled-components";

// ====== Styled Components ======
const fadeInScale = keyframes`
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
`;

const Section = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing.XL};
  margin-top: ${({ theme }) => theme.spacing.M};

  @media (min-width: 375px) {
    margin-top: 0px;
    margin-bottom: 0px;
  }

  ${MediaQuery.tablet} {
    display: flex;
    height: 100%;
    flex-direction: row;
    width: 100%;
    justify-content: left;
    margin-bottom: 40px;
  }

  ${MediaQuery.desktop} {
    max-width: 1200px;
    justify-content: center;
  }
`;

const Container = styled.div`
  @media (min-width: 375px) {
    margin: ${({ theme }) => theme.spacing.XS} auto;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const Card = styled.div`
  background: ${({ theme }) => theme.colors.cardBackground};
  border-radius: 0.6rem;
  margin: ${({ theme }) => theme.spacing.S};
  padding: ${({ theme }) => theme.spacing.S} ;
  border: 0.5px solid rgba(127, 129, 131, 0.2);
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.05);
  animation: ${fadeInScale} 0.4s ease forwards;
  text-align: center;

  ${MediaQuery.phone} {
    margin: 0 auto;

    max-width: 90%;
    max-height: 340px;
  }
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
  color: #555;
  margin-bottom: 0;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 1rem;
  margin-left: ${({ theme }) => theme.spacing.XS};
  margin-bottom: ${({ theme }) => theme.spacing.L};
  margin-top: ${({ theme }) => theme.spacing.S};
  max-height: 5rem;

  @media (min-width: 375px) {
    align-items: center;
  }

  @media (min-width: 480px) {
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

const ThankYou = styled.div`
  padding: ${({ theme }) => theme.spacing.M};
  text-align: center;
`;

// ====== Component ======
const NotifyForm = () => {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (!sent) return;
    const timer = setTimeout(() => setSent(false), 1500);
    return () => clearTimeout(timer);
  }, [sent]);

  /**
   * AJAX submit to FormSubmit's /ajax endpoint so the user stays on the page
   * and we can show inline success/failure via toast.
   * Note: the recipient email (ellyfodor@gmail.com) must be verified once via
   * FormSubmit for reliable delivery. The submitter (visitor) does not need
   * to verify their email.
   */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email) {
      toast.error("Fyll i en giltig e-postadress.");
      return;
    }

    setSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("_subject", "Ny anmälan från webben");
      // Disable FormSubmit's captcha if you prefer (use with caution)
      formData.append("_captcha", "false");

      const res = await fetch(
        "https://formsubmit.co/ajax/ellyfodor@gmail.com",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: formData,
        }
      );

      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        toast.success("Tack! Mejl kommer när boken är tillgänglig.", {
          description: `Vi skickar ett mail till ${email}`,
        });
        setEmail("");
        setSent(true);
      } else {
        // FormSubmit may return validation or other errors in data
        toast.error(data.message || "Något gick fel vid utskick.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Nätverksfel, försök igen senare.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <MainSection>
      <Section>
        <Container>
          <Card>
            <IconWrapper>
              <Bell />
            </IconWrapper>
            {!sent && (
              <Description>
                Registrera din e-postadress för notis om boksläpp!
              </Description>
            )}
            {sent ? (
              <ThankYou>
                <h3>Tack! Vi hör av oss via mejl när boken är tillgänglig.</h3>
              </ThankYou>
            ) : (
              <Form onSubmit={handleSubmit}>
                <Input
                  name="email"
                  type="email"
                  placeholder="din.email@exempel.se"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button type="submit" disabled={submitting}>
                  {submitting ? "Skickar…" : "Anmäl Intresse"}
                </Button>
              </Form>
            )}

            <FooterNote>E-postadress delas ej med tredje part.</FooterNote>
          </Card>
        </Container>
      </Section>
    </MainSection>
  );
};

export default NotifyForm;
