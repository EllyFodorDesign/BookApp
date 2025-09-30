import { ContactButton } from "./ContactButton";

interface ScheduleButtonProps {
  buttoText?: string;
}



const ScheduleButton = ({ buttoText }: ScheduleButtonProps) => {
  const handleClick = () => {
    window.open(
      "https://book-app-alpha-two.vercel.app/books",
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
