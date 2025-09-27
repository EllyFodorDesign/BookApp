import { ContactButton } from "./ContactButton";

interface CustomButtonProps {
  buttonText?: string;
}

const ProjectButton = ({ buttonText }: CustomButtonProps) => {
  const handleClick = () => {
    window.open(
      "https://www.diva-portal.org/smash/get/diva2:1612788/FULLTEXT01.pdf",
      "_blank"
    );
  };

  return (
    <ContactButton style={{ width: "fit-content" }} onClick={handleClick}>
      {buttonText}
    </ContactButton>
  );
};

export default ProjectButton;
