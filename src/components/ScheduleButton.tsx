import { ContactButton } from "./ContactButton";

interface ScheduleButtonProps {
  buttoText?: string;
}



const ScheduleButton = ({ buttoText }: ScheduleButtonProps) => {
  const handleClick = () => {
    window.open(
      "https://lovable.dev/@3Sz5emS6E8aoPFYUCqbgKyh4bu93",
      "_blank"
    );
  };

  return (
    <ContactButton style={{ width: "fit-content" }} onClick={handleClick}>
      {buttoText}
    </ContactButton>
  );
};

export default ScheduleButton;
