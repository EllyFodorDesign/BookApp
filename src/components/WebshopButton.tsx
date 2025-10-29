import { ContactButton } from "./ContactButton";

interface ScheduleButtonProps {
  buttoText?: string;
}



const WebshopButton = ({ buttoText }: ScheduleButtonProps) => {
  const handleClick = () => {
    window.open(
      "https://webshop.publit.com/webshop/5846",
      "_blank"
    );
  };

  return (
    <ContactButton style={{ width: "fit-content" }} onClick={handleClick}>
      {buttoText}
    </ContactButton>
  );
};

export default WebshopButton;
