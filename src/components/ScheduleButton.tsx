import { ContactButton } from "./ContactButton";
import { useNavigate } from "react-router-dom";

interface ScheduleButtonProps {
  buttoText?: string;
}



const ScheduleButton = ({ buttoText }: ScheduleButtonProps) => {
 const navigate = useNavigate();
 
 

  return (
    <ContactButton style={{ width: "fit-content" }} onClick={() => navigate("/books")}>
      {buttoText}
    </ContactButton>
  );
};

export default ScheduleButton;
