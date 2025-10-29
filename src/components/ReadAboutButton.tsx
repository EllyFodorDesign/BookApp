import ReadButton from "./ReadButton";

interface ScheduleButtonProps {
  buttoText?: string;
}



const ReadAboutButton = ({ buttoText }: ScheduleButtonProps) => {
  const handleClick = () => {
    window.open(
      "https://webshop.publit.com/webshop/5846",
      "_blank"
    );
  };

  return (
    <ReadButton style={{ width: "fit-content" }} onClick={handleClick}>
      {buttoText}
    </ReadButton>
  );
};

export default ReadAboutButton;
